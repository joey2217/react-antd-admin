import React, { memo } from 'react'
import RichEditor from '../../components/RichEditor'
import '../../components/RichEditor/index.css'

const RichText: React.FC = () => {
  return <RichEditor />
}

export default memo(RichText)
