import * as React from 'react'
import Layout from '../components/layout/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <section>
        <h3>Summary</h3>
        <p>
          Customer-centric Software Engineer specializing in applied AI and full-stack systems, 
          with a track record of deploying production solutions alongside engineers to drive adoption, 
          influence product roadmaps, and solve high-impact user problems in real-world environments.
        </p>
      </section>

      <section>
        <h3>Experience</h3>
        <div>
          <h4>Google Inc - Boulder, CO</h4>
          <p><strong>Senior Software Engineer - ChromeOS</strong> (Nov 2021 - Present)</p>
          <p>
            Working on ChromeOS, Google's lightweight, web-centric operating system powering millions of global users. 
            Primary focus includes utilizing generative AI to translate raw user feedback into critical product improvements 
            and engineering robust network infrastructure for millions of devices.
          </p>
        </div>
        <div>
          <h4>Ford Motor Company - Ann Arbor, MI</h4>
          <p><strong>Software Engineer - FordLabs</strong> (May 2019 - Nov 2021)</p>
          <p>
            FordLabs is Ford Motor Company's internal startup and software incubation group, where engineers operate 
            as customer-embedded owners to rapidly prototype, validate, and deploy 0-to-1 products in real production environments.
          </p>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        <p>
          <strong>University of Michigan</strong> - Ann Arbor, MI<br/>
          College of Engineering B.S.E. with Honors in Computer Science, Minor in Mathematics (April 2018)
        </p>
      </section>

      <section>
        <h3>Technical Skills</h3>
        <p><strong>Languages:</strong> Python, Golang, TypeScript, JavaScript, SQL</p>
        <p><strong>Technologies:</strong> gRPC, Pandas, NumPy, Gemini API, React, Flask</p>
        <p><strong>Databases:</strong> BigQuery, Spanner, MongoDB, PostgreSQL</p>
        <p><strong>DevOps:</strong> GCP, AWS, Git, Docker, GitHub Actions</p>
      </section>

      <section>
        <h3>Contact</h3>
        <p>
          <a href="mailto:michael.rygiel1@gmail.com">michael.rygiel1@gmail.com</a><br/>
          Denver, CO
        </p>
      </section>
    </Layout>
  )
}

export default AboutPage
