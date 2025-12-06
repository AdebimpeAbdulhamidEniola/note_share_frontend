"use client"
import CodeEditor from "./CodeEditor"
import { LangType } from "@/types"
import { LanguageDropDowns, DropDownThemes } from "./Dropdowns"
import { useState } from "react"

const EditorWrapper = () => {
  const [language, setLanguage] = useState<LangType>("html")
  const langTypeHandler  = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    setLanguage(event.target.value  as unknown as LangType)
  }
  return (
    <div className="bg-[#fffffe] w-full lg:w-[80%] rounded-2xl overflow-auto
      mx-4 md:mx-20 lg:mx-60
      h-[80vh] md:h-[65vh] max-h[800px]
      shadow-lg relative">
      <CodeEditor language = {language}/>
      <div className="base-buttons  flex gap-5 absolute bottom-6 left-4">
        <select className="rounded-xl px-3 bg-[#ced6e1] "  onChange = {langTypeHandler}>
          <LanguageDropDowns />
        </select>

        <select className="rounded-xl bg-[#ced6e1] px-3 p-1.5">
          
          <DropDownThemes />
        </select>

      </div>
    </div>
  )
}

export default EditorWrapper