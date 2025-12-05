"use client"
import CodeEditor from "./CodeEditor"

const EditorWrapper = () => {
  return (
    <div className="bg-[#fffffe] w-full lg:w-[80%] rounded-2xl  overflow-auto
      mx-4 md:mx-20 lg:mx-60
      h-[80vh] md:h-[65vh] max-h[800px]

      shadow-lg">
      <CodeEditor />
    </div>
  )
}

export default EditorWrapper