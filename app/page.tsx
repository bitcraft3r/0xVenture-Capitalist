import Link from 'next/link';
import Image from 'next/image'

import getCurrentUser from "./actions/getCurrentUser";
import CTA from "./components/home/CTA";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-col justify-center items-center h-screen -mt-[10rem]">
      {/* IMAGE */}
      <Image
        src="/images/mascot.jpeg"
        alt="Hero image"
        width={200}
        height={200}
      />
      {/* HERO SECTION */}
      <div className="max-w-3xl text-center mt-[1rem]">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Be the next blockchain billionaire!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Build your money EMPIRE and rise to the TOP!
        </p>
        <CTA currentUser={currentUser} />
      </div>
    </div>
  )
}
