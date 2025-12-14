"use client";
import CodeEditor from "./CodeEditor";
import { LangType, ThemeType } from "@/types";
import { LanguageDropDowns, DropDownThemes } from "./Dropdowns";
import { useState } from "react";
import ShareButton from "./ShareButton";

const EditorWrapper = ({
  backendCode,
  backendLanguage,
  backendTheme,
  fromBackend,
}: {
  backendCode?: string;
  backendLanguage?: string;
  backendTheme?: string;
  fromBackend?: boolean;
}) => {
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

  const [language, setLanguage] = useState(backendLanguage || "html");
  const [theme, setTheme] = useState<string>(backendTheme || "light");
  const [code, setCode] = useState(backendCode || initialCode);
  const [unsavedChanges, setUnsavedChanges] = useState(backendCode ? false : true);
  const isFromBackend = !!fromBackend || !!backendCode;

  const langTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setLanguage(event.target.value as unknown as LangType);
  };

  const themeTypeHndler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as unknown as ThemeType);
  };

  const handleEditorChange = (value: string | undefined) => {
    console.log(value);
    setCode(value || "");
    setUnsavedChanges(true);
  };

  // Define theme-based colors
  const getThemeColors = () => {
    switch (theme) {
      case "vs-dark":
      case "hc-black":
        return {
          containerBg: "bg-[#1e1e1e]",
          panelBg: "bg-[#1e1e1e]",
          selectBg: "bg-[#3c3c3c]",
          textColor: "text-white",
        };
      case "light":
      default:
        return {
          containerBg: "bg-[#fffffe]",
          panelBg: "bg-[#fffffe]",
          selectBg: "bg-[#ced6e1]",
          textColor: "text-black",
        };
    }
  };

  const themeColors = getThemeColors();

  return (
    <div
      className={`${themeColors.containerBg} w-full lg:w-[80%] rounded-2xl overflow-hidden
      mx-4 md:mx-20 lg:mx-60
      h-[80vh] md:h-[65vh] max-h-[800px]
      shadow-lg relative`}
    >
      <div className="h-full overflow-auto pb-20">
        <CodeEditor
          language={language}
          themeType={theme}
          value={code}
          onChange={handleEditorChange}
          readOnly={isFromBackend}
        />
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 sm:bottom-0 sm:left-0 sm:right-0 flex gap-1 sm:gap-2 md:gap-3 items-center ${themeColors.panelBg} py-1 sm:py-2 px-2 sm:px-4`}
      >
        <select
          className={`rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 sm:py-1.5 ${themeColors.selectBg} ${themeColors.textColor} text-xs sm:text-sm md:text-base`}
          onChange={langTypeHandler}
        >
          <LanguageDropDowns />
        </select>

        <select
          className={`rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 sm:py-1.5 ${themeColors.selectBg} ${themeColors.textColor} text-xs sm:text-sm md:text-base`}
          onChange={themeTypeHndler}
        >
          <DropDownThemes />
        </select>

        <ShareButton
          code={code}
          language={language}
          theme={theme}
          unsavedChanges={unsavedChanges}
          setUnsavedChanges={setUnsavedChanges}
          fromBackend={isFromBackend}
        />
      </div>
    </div>
  );
};

export default EditorWrapper;
