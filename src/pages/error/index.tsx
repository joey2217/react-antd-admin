import React, { memo } from 'react'
import { useRouteError } from 'react-router-dom'

const Error: React.FC = () => {
  const error = useRouteError() as any
  console.error(error)
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default memo(Error)
