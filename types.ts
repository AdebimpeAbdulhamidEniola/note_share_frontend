const languages = [
    "javascript",
    "typescript",
    "python",
    "java",
    "cpp",
    "csharp",
    "go",
    "rust",
    "php",
    "ruby",
    "kotlin",
    "swift",
    "sql",
    "html",
    "css",
  ] ;

  const theme = [
    "light",
    "vs-dark",
    "hc-black"
  ] as const

  export type LangType = typeof languages[number]
  export type ThemeType = typeof theme[number]


  export type SnippetCreatePayload = {
  code: string;
  language: string;
  theme: string;
};

export type Snippet = {
  id: string;       
  code: string;
  language: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
};

export interface ApiResponse {
  status: number;
  message: string;
  data: Snippet | null;

}