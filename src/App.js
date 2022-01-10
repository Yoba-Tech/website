import { Helmet } from "react-helmet";

const App = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yoba</title>
        <meta name="description" content="React application" />
      </Helmet>
      <section className="container">
        Yoba
      </section>
    </main>
  )
}

export default App
