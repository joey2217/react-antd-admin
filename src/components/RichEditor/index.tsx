import ExampleTheme from './themes/ExampleTheme'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
// import TreeViewPlugin from './plugins/TreeViewPlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import { $createHeadingNode, HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode, $createLinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin'

import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import {
  $getRoot,
  EditorState,
  LexicalEditor,
  $createTextNode,
  $createParagraphNode,
} from 'lexical'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'

const LOCAL_CONTENT = 'local_content'

function Placeholder() {
  return <div className="editor-placeholder">输入内容...</div>
}

const localData = localStorage.getItem(LOCAL_CONTENT)

function initRichText() {
  const root = $getRoot()
  if (root.getFirstChild() === null) {
    const title = $createHeadingNode('h1')
    title.append($createTextNode('欢迎使用'))
    root.append(title)
    const lexicalLink = $createLinkNode('https://lexical.dev/')
    lexicalLink.append($createTextNode('lexical 网站'))
    const p = $createParagraphNode()
    p.append($createTextNode('了解更多请访问:'), lexicalLink)
    root.append(p)
  }
}

const editorConfig = {
  namespace: 'Editor',
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error: any) {
    throw error
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
  editorState: localData ?? initRichText,
}

export default function Editor() {
  function onChange(editorState: EditorState, editor: LexicalEditor) {
    editorState.read(() => {
      // Read the contents of the EditorState here.
      // const root = $getRoot()
      // const selection = $getSelection()
      // console.log(root, selection)
    })
    console.log(editorState.toJSON())
  }

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          {/* <TreeViewPlugin /> */}
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <ClearEditorPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  )
}
