import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import InvoiceForm from '../components/InvoiceForm'
import Head from 'next/head'
class App extends Component {
  render () {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <Head>
            <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
            <title>Invoice Maker</title>
          </Head>
          {/* <img src='/images/favicon.ico'/> */}
          <InvoiceForm />
        </Container>
      </div>
    )
  }
}

export default App
