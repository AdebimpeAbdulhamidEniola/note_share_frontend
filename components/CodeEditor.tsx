"use client";
import { LangType, ThemeType } from "@/types";
import Editor from "@monaco-editor/react";

const CodeEditor = ({
  language,
  themeType,
  value,
  onChange,
}: {
  language: LangType;
  themeType: ThemeType;
  value: string;
  onChange: (value: string | undefined) => void;
}) => {
  return (
    <Editor
      height="100%"
      defaultLanguage="html"
      value={value}
      theme={themeType}
      language={language}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
      }}
    />
  );
};

export default CodeEditor;