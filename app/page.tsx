import getCurrentUser from "./actions/getCurrentUser";
import Welcome from "./components/home/Welcome";
import SVGAnimation from "./components/home/SVGAnimation";
import CTA from "./components/home/CTA";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl font-extrabold mb-[2rem]">
        <Welcome currentUser={currentUser} />
      </h1>
      <SVGAnimation />
      <div className="mt-[2rem]">
        <CTA currentUser={currentUser} />
      </div>
    </div>
  )
}
