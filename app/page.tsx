import Image from 'next/image'

import getCurrentUser from "./actions/getCurrentUser";
import CTA from "./components/home/CTA";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-col justify-center items-center text-center">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-100 mb-1">0xVenture Capitalist</h1>
        <h2 className="text-lg text-neutral-300">The world's easiest browser game!</h2>
      </div>

      {/* LOGO/MASCOT */}
      <Image
        src="/images/mascot-256px.jpeg"
        alt="Hero image"
        width={150}
        height={150}
        className="border-8 border-amber-400 rounded-xl my-[2rem] shadow-amber-500 shadow-[0_0_32px]"
      />

      {/* PLAY BUTTON */}
      <CTA currentUser={currentUser} />

      {/* SECTION */}
      {/* <div className="max-w-3xl text-center mt-[2rem] text-xl text-neutral-100">
        <div>Build your money EMPIRE, rise to the TOP. Make your FORTUNE, and become a blockchain TYCOON!</div>
      </div> */}

    </div>
  )
}
