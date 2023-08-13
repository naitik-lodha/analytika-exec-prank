// Prank.js
import { useRouter } from "next/router";

export default function Prank() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <img
        src="/analytika-logo.png"
        alt="Analytika Logo"
        className="w-32 mb-6"
      />
      <div className="text-white text-center mb-6">
        <p className="text-2xl font-bold font-fredoka-one bg-gradient-to-r from-yellow-300 via-green-500 to-green-700 inline-block bg-clip-text text-transparent">
          Congratulations,{" "}
          <span className="text-3xl font-extrabold">{name} !</span>
        </p>
        <br />
        <p className="text-lg inline-block mt-2">
          You've just experienced an Analytika Prank!
        </p>
      </div>
      <div className="mb-4">
        <video width="560" height="415" autoPlay controls>
          <source src="/rickroll-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-white text-lg italic mt-4">
        Now you can dance along with the prank, but don't forget to stay
        analytical!
      </p>
    </div>
  );
}
