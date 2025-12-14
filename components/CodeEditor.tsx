"use client";
import { LangType} from "@/types";
import Editor from "@monaco-editor/react";
import { ReadonlyURLSearchParams } from "next/navigation";

const CodeEditor = ({
  language,
  themeType,
  value,
  onChange,
  readOnly = false
}: {
  language: LangType;
  themeType: string;
  value: string;
  onChange: (value: string | undefined) => void;
  readOnly?: boolean
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
        readOnly: readOnly,
        domReadOnly: readOnly
      }}
    />
  );
};

export default CodeEditor;