import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center relative">
      <Image src="/resources/404.gif" width={800} height={800} />
      <p className="absolute bottom-40 sm:bottom-20 md:bottom-16"><Link href="/" className="btn">Back to Home</Link></p>
    </div>
  );
};

export default Error;