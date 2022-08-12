/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}
