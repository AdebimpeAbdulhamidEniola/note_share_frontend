import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
console.log(`This is the api url ${process.env.API_URL}`)

  return (
    <div>
      <Hero />
    </div>
  );
}
