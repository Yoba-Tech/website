import svg from "../images/svg.png";
import svgSm from "../images/svgSm.png";
import { useWindowSize, useMediaQuery, useOnScreen } from "../hooks";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const DETAIL_GQL = gql`
  {    
  homePageCollection {
    items {
      featuresCollection {
        items{
          title
          details
          image {
            url
          }
        }
      }
    }
  }
  }
`;

const Details = () => {
    const { loading, error, data } = useQuery(DETAIL_GQL);
    const [query, setQuery] = useState({});

    useEffect(() => {
        if (!loading && !error && data) {
            setQuery(data.homePageCollection.items[0])
        }
    }, [loading, error, data])

    const windowSize = useWindowSize();
    const isPhone = useMediaQuery("(max-width: 768px)");
    const [right, setRight] = useState(0);

    const ref = useRef();
    const inView = useOnScreen(ref);

    useEffect(() => {
        const details = document.querySelector(".details");
        setRight(details.getBoundingClientRect().left);
    }, [windowSize, inView, right]);

    return (
        <div className="container">
            <section className="details">
                {query.featuresCollection &&
                    Object.keys(query.featuresCollection).length > 0 &&
                    query.featuresCollection.items &&
                    query.featuresCollection.items.map(item => (
                        <div className="row" key={item.title}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="col-text"
                            >
                                <h2>{item.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: item.details }}>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="col-image"
                            >
                                <LazyLoadImage
                                    alt="bank card"
                                    effect="blur"
                                    width={499} height={420}
                                    src={item.image && item.image.url} />
                            </motion.div>
                        </div>
                    ))
                }

                {!isPhone ? (
                    <img
                        style={{ right: `-${right}px` }}
                        className="img"
                        src={svg}
                        alt="svg"
                    />
                ) : (
                    <img
                        style={{ right: `-${right}px` }}
                        className="img"
                        src={svgSm}
                        alt="svg"
                    />
                )}
            </section>
        </div>
    );
};

export default Details;
