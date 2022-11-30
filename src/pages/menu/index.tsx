import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

const Menu: React.FC = () => {
  const location = useLocation()
  return <h3>path:{location.pathname}</h3>
}

export default memo(Menu)
