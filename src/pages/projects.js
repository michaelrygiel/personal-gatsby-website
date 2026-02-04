import * as React from 'react'
import Layout from '../components/layout/layout'
import Project from '../components/project/project'

const projects = [
  {
    title: "Feedback Report Clustering",
    description: "Led an engineering team to architect and ship a continuous feedback pipeline using LLM embeddings (Gemini) to cluster qualitative data, automating a workload equivalent to ~15,000 SWEh per week. Built a dashboard used by 300+ engineers across 15+ teams to surface feature requests and critical issues.",
    technologies: "Python, Gemini API, BigQuery, gRPC"
  },
  {
    title: "COVID-19 Map",
    description: "D3 data visualization project to display COVID-19 cases across the United States. Utilized Amazon Web Services to deploy project on an S3 bucket. Created GitHub Actions for daily data updates and automatic deployment to production.",
    link: "http://michaelrygiel.com/covid-map/",
    technologies: "D3.js, JavaScript, AWS S3, GitHub Actions"
  },
  {
    title: "Find Your Ford",
    description: "Executed the full stack delivery of a high-traffic used car search service, achieving #1 SEO rankings and generating hundreds of daily leads. Optimized infrastructure to reduce costs by 50% while improving performance via CDN and caching strategies.",
    link: "https://www.ford.com/used/",
    technologies: "React, TypeScript, CDN, Caching"
  },
  {
    title: "Text For Service",
    description: "Built and deployed a production SMS messaging bot using Dialogflow and Twilio. Owned the full lifecycle from NLP integration to backend analytics, enabling seamless communication channels for service customers.",
    technologies: "Dialogflow, Twilio, NLP, Backend Analytics"
  },
  {
    title: "Captive Portal Improvements",
    description: "Solved complex connectivity friction on public/guest Wi-Fi networks by engineering a configurable captive portal detection system for ChromeOS. Enhanced network reliability by deploying version 108 connectivity updates, reducing 'No Internet' downtime by over 50%.",
    link: "https://support.google.com/chrome/a/answer/16216153?hl=en",
    technologies: "C++, ChromeOS, Network Infrastructure"
  }
]

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>Below is a selection of projects I have worked on throughout my career.</p>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          technologies={project.technologies}
        />
      ))}
    </Layout>
  )
}

export default ProjectsPage
