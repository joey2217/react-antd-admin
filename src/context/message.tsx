import React, { PropsWithChildren, useContext } from 'react'
import { message } from 'antd'
import type { MessageInstance } from 'antd/es/message/interface'

export const MessageContext = React.createContext<MessageInstance>(null!)

const MessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage()
  return (
    <MessageContext.Provider value={messageApi}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  )
}

export default MessageProvider

export function useMessage() {
  const messageApi = useContext(MessageContext)
  return messageApi
}
