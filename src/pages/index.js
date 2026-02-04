import * as React from 'react'
import Layout from '../components/layout/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        Hi, my name is Michael Rygiel. I am a Senior Software Engineer at Google, 
        working on ChromeOS in Boulder, CO. I specialize in applied AI and full-stack 
        systems, with a focus on deploying production solutions that drive adoption 
        and solve high-impact user problems.
      </p>
      <p>
        Feel free to explore my <a href="/projects">projects</a> or learn more <a href="/about">about me</a>.
      </p>
    </Layout>
  )
}

export default IndexPage
