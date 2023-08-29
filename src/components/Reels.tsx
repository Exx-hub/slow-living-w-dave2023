import { reels } from "@/helpers/data";
import ReelCard from "./ReelCard";

function Reels() {
  return (
    <div>
      <h2 className="text-center mb-5 text-2xl text-[#005c29] font-semibold">MY REELS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {reels.map((reel) => (
          <ReelCard key={reel.id} {...reel} />
        ))}
      </div>
    </div>
  );
}

export default Reels;
