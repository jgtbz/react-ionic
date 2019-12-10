import React from 'react'

const Component = ({ error, touched }) => (
  <div>
    {error && touched ? (
      <span>{error}</span>
    ) : (
      ''
    )}
  </div>
)

export default Component
