"use client";
import CodeEditor from "./CodeEditor";
import { LangType, ThemeType } from "@/types";
import { LanguageDropDowns, DropDownThemes } from "./Dropdowns";
import { useState } from "react";
import ShareButton from "./ShareButton";

const EditorWrapper = () => {
  const initialCode = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      h1 {
        color: #cca3a3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... ");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;

  const [language, setLanguage] = useState<LangType>("html");
  const [theme, setTheme] = useState<ThemeType>("light");
  const [code, setCode] = useState<string>(initialCode);

  const langTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setLanguage(event.target.value as unknown as LangType);
  };

  const themeTypeHndler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as unknown as ThemeType);
  };

  const handleEditorChange = (value: string | undefined) => {
    console.log(value)
    setCode(value || "");
  };

  return (
    <div
      className="bg-[#fffffe] w-full lg:w-[80%] rounded-2xl overflow-hidden
      mx-4 md:mx-20 lg:mx-60
      h-[80vh] md:h-[65vh] max-h[800px]
      shadow-lg relative"
    >
      <div className="h-full overflow-auto pb-20">
        <CodeEditor 
          language={language} 
          themeType={theme}
          value={code}
          onChange={handleEditorChange}
        />
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 md:gap-3 items-center bg-[#fffffe] py-2">
        <select
          className="rounded-xl px-2 py-1.5 bg-[#ced6e1] text-sm md:text-base"
          onChange={langTypeHandler}
        >
          <LanguageDropDowns />
        </select>

        <select
          className="rounded-xl px-2 py-1.5 bg-[#ced6e1] text-sm md:text-base"
          onChange={themeTypeHndler}
        >
          <DropDownThemes />
        </select>

        <ShareButton />
      </div>
    </div>
  );
};

export default EditorWrapper;