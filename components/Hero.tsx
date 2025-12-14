import EditorWrapper from "./EditorWrapper";
import Header from "./Header";

const Hero = ({
  code,
  language,
  theme,
  fromBackend,
}: {
  code?: string;
  language?: string;
  theme?: string;
  fromBackend?: boolean;
}) => {
  return (
    <div className="flex flex-col h-screen items-center  w-full px-10 md:px-15 lg:px-40 pb-12">
      <Header />
      <EditorWrapper
        backendCode={code}
        backendLanguage={language}
        backendTheme={theme}
        fromBackend={fromBackend}
      />
    </div>
  );
};

export default Hero;
