"use client";
import CodeEditor from "./CodeEditor";
import { LangType, ThemeType } from "@/types";
import { LanguageDropDowns, DropDownThemes } from "./Dropdowns";
import { useState } from "react";
import Image from "next/image";

const EditorWrapper = () => {
  const [language, setLanguage] = useState<LangType>("html");
  const [theme, setTheme] = useState<ThemeType>("light");
  const langTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setLanguage(event.target.value as unknown as LangType);
  };
  const themeTypeHndler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as unknown as ThemeType);
  };
  return (
    <div
      className="bg-[#fffffe] w-full lg:w-[80%] rounded-2xl overflow-hidden
      mx-4 md:mx-20 lg:mx-60
      h-[80vh] md:h-[65vh] max-h[800px]
      shadow-lg relative"
    >
      <div className="h-full overflow-auto pb-20">
        <CodeEditor language={language} themeType={theme} />
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

        <button className="bg-[#406AFF] hover:bg-[#1639B0] font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-lg ml-auto flex gap-1.5 md:gap-2 items-center whitespace-nowrap text-sm md:text-base">
         <Image src="/resources/Share.svg" alt="share-icon" width={14} height={14} className="md:w-4 md:h-4"/>
         <span className="text-white">Share</span>
        </button>
      </div>
    </div>
  );
};

export default EditorWrapper;