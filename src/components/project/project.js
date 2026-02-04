import * as React from 'react'

const Project = ({ title, description, link, technologies }) => {
  return (
    <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
      <h4 style={{ marginBottom: '0.5rem' }}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        ) : (
          title
        )}
      </h4>
      <p style={{ marginBottom: '0.5rem' }}>{description}</p>
      {technologies && (
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          <strong>Technologies:</strong> {technologies}
        </p>
      )}
    </div>
  )
}

export default Project
