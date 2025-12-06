export const LanguageDropDowns = () => {
  const languages = [
    "html",
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
    "javascript",
    "css",
  ];
  const dropDownLanguages = languages.map((language) => (
    <option key={language} value={language}>
      {language}
    </option>
  ));
  return dropDownLanguages; 
};

export const DropDownThemes = () => {
  const themes = ["vs", "vs-dark", "hc-black"];
  const dropDownThemes = themes.map((theme) => (
    <option key={theme} value={theme}>
      {theme}
    </option>
  ));
  return dropDownThemes; 
};