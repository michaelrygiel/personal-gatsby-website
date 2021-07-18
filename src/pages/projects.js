import * as React from 'react'
import Layout from '../components/layout/layout'
import Project from '../components/project/project'

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>Below is a list of my current Projects</p>
      <Project/>
    </Layout>
  )
}

export default ProjectsPage