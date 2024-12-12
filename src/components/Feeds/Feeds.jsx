import Card from "./Card";
// import { BsPlusCircleFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

const Feeds = () => {
  return (
    <>
      <div
        id="user-heading"
        className="h-[800px] w-[360px] bg-white text-black border-red-500 border-2 overflow-y-hidden relative"
      >
        <div
          id="container"
          className="p-3 h-[690px] w-[330px]"
        >
          <div id="profile" className="mt-2 flex items-center gap-3">
            <div id="profile-image">
              <img
                className="w-[50px] h-[50px]"
                src="/assets/Img/Feeds/Sakshi.png"
                alt="profile-img"
              />
            </div>

            <div id="profile-heading">
              <p className="text-[10px] text-[#00000054]">Welcome Back,</p>
              <p className="text-[16px] font-semibold">Sakshi Agarwal</p>
            </div>
          </div>

          <h3 className="text-[24px] font-bold mt-5">Feeds</h3>

          <Card />

          <div id="add-post" className="absolute bottom-4 right-4 z-10">
            <BsPlusLg className="h-[50px] w-[50px] rounded-full text-white items-center bg-black p-4 font-semibold" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feeds;
