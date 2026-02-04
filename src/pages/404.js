import * as React from 'react'
import Layout from '../components/layout/layout'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <p>
        <a href="/">Return to the home page</a>
      </p>
    </Layout>
  )
}

export default NotFoundPage
