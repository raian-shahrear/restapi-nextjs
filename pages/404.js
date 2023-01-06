import Image from "next/image";

const Error = () => {
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <Image src="/resources/404.gif" width={800} height={800} />
    </div>
  );
};

export default Error;