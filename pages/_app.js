import '../styles/globals.css'
import '../components/LoadingSpinner/loadingSpinner.css'
import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
