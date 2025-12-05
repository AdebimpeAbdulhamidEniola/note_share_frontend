import EditorWrapper from "./EditorWrapper"
import Header from "./Header"

const Hero = () => {
  return (
    <div className="flex flex-col h-screen items-center  w-full px-10 md:px-15 lg:px-40 pb-12">
      <Header />
      <EditorWrapper />
    </div>
  )
}

export default Hero