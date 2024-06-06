import Link from "next/link";
import { getDictionary } from "../../localization/get-dictionary";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="home-page">
      <h1>Welcome to SSS Dashboard</h1>
      <Link href={params.lang + "/about"}>About Us</Link>
    </div>
  );
}
