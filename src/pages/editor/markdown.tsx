import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Input, Row, Col } from 'antd'
import remarkGfm from 'remark-gfm'

const { TextArea } = Input

const defaultInput = `
# Live demo
Changes are automatically rendered as you type.
## Table of Contents
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>
## How about some code?

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)
`

const Markdown: React.FC = () => {
  const [input, setInput] = useState(defaultInput)

  return (
    <Row className="markdown h-full overflow-auto" gutter={10}>
      <Col xs={24} sm={12}>
        <TextArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ height: '100%' }}
        />
      </Col>
      <Col xs={24} sm={12}>
        <ReactMarkdown children={input} skipHtml={false} remarkPlugins={[remarkGfm]}  />
      </Col>
    </Row>
  )
}
export default Markdown
