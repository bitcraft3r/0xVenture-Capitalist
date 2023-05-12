import Link from 'next/link';
import Image from 'next/image'

import getCurrentUser from "./actions/getCurrentUser";
import CTA from "./components/home/CTA";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1
        className="text-3xl font-bold text-neutral-100 mb-1"
      >
        0xVenture Capitalist
      </h1>
      <h2 className="text-lg text-neutral-300">
        The world's easiest game!
      </h2>
      {/* IMAGE */}
      <Image
        src="/images/mascot-256px.jpeg"
        alt="Hero image"
        width={150}
        height={150}
        className="border-8 border-orange-400 shadow-xl rounded-xl my-[1rem]"
      />
      {/* PLAY BUTTON */}
      <div
      >
        <CTA currentUser={currentUser} />
      </div>
      {/* HERO SECTION */}
      <div className="max-w-3xl text-center">
        {/* <p className="text-xl text-gray-700 mt-[5rem]">
          Build your money EMPIRE!
          Rise to the TOP!
          Become a blockchain TYCOON!
          Make your FORTUNE!
        </p> */}
      </div>
    </div>
  )
}
