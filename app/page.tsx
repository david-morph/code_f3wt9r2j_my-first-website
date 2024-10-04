import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to my Landing Page!</h1>
      <Image 
        src="/cat.jpg"
        alt="A cute cat"
        width={500}
        height={500}
      />
    </div>
  )
}