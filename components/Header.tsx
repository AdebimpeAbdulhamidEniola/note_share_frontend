import Image from "next/image";
import Logo from "../public/NoteCodeLogo.svg";

const Header = () => {
  return (
    <header className="w-full gap-7 flex items-center justify-center flex-col text-center  py-8 z-40">
      <Image src={Logo} alt="NoteCode logo" width={96} height={32} />
      <h1 className="text-2xl md:text-3xl font-extrabold">Create & Share</h1>
      <h2 className="text-4xl md:text-2xl font-semibold text-slate-800">Your Code easily</h2>
    </header>
  );
};

export default Header;
