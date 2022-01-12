import { motion } from "framer-motion";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

const FOOTER_GQL = gql`
  {
    homePageCollection {
      items {
        logo {
          url
        }
        socialLinksCollection {
          items {
            name
            icon {
              url
            }
            url
          }
        }
        footerLinksCollection {
          items {
            url
            title
          }
        }
        copyright
      }
    }
  }
`;

const Footer = () => {
    const { loading, error, data } = useQuery(FOOTER_GQL);
    const [query, setQuery] = useState({});

    useEffect(() => {
        if (!loading && !error && data) {
            setQuery(data.homePageCollection.items[0])
        }
    }, [loading, error, data])


    return (
        <>
            {query && Object.keys(query).length > 0 &&
                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="footer"
                >
                    <div className="container">
                        <img src={query.logo && query.logo.url} alt="logo" height={37} width={86} />

                        <div className="links">
                            {query.socialLinksCollection &&
                                Object.keys(query.socialLinksCollection).length > 0 &&
                                query.socialLinksCollection.items &&
                                query.socialLinksCollection.items.map(item => (
                                    <motion.a
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ type: "tween" }}
                                        href={item.url}
                                        key={item.url}
                                    >
                                        <img src={item.icon && item.icon.url} alt="logo" height={39} width={39} />
                                    </motion.a>
                                ))
                            }
                        </div>

                        <div className="policy">
                            {query.footerLinksCollection &&
                                Object.keys(query.footerLinksCollection).length > 0 &&
                                query.footerLinksCollection.items &&
                                query.footerLinksCollection.items.map(item => (
                                    <a
                                        href={item.url}
                                        key={item.title}
                                    >{item.title}
                                    </a>
                                ))
                            }
                        </div>

                        <p className="copyright">{query.copyright}</p>
                    </div>
                </motion.footer>}
        </>
    );
};

export default Footer;
