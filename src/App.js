import Hero from "./components/Hero"
import Details from "./components/Details"
import Footer from "./components/Footer"

import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

const HEADER_GQL = gql`
  {
    homePageCollection {
      items {
        pageTitle
        logo {
          url
        }
      }
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(HEADER_GQL);
  const [query, setQuery] = useState({});

  useEffect(() => {
    if (!loading && !error && data) {
      setQuery(data.homePageCollection.items[0])
    }
  }, [loading, error, data])

  return (
    <>
      {query && Object.keys(query).length > 0 &&
        <main>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{query.pageTitle}</title>
            <meta name="description" content="React application" />
          </Helmet>
          <section className="top-section">
            <section className="container">
              <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "tween", duration: 0.4 }}>
                <img src={query.logo && query.logo.url} alt="logo" height={37} width={86} />
              </motion.header>
              <Hero />
            </section>
          </section>
          <Details />
          <Footer />
        </main>}
    </>
  )
}

export default App
