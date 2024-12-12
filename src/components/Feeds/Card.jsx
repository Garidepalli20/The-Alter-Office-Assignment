import { HiHeart } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";

const Card = () => {
  return (
    <>
      <div
        id="card"
        className="mt-2 w-[328px] h-[341px] bg-[#F7EBFF] rounded-[26px] flex flex-col mx-auto"
      >
        <div
          id="user-header"
          className="flex items-center gap-2 h-12 mx-4 mt-2"
        >
          <div id="user">
            <img
              src="/assets/Img/Feeds/Aarav.png"
              alt="user-image1"
              className="w-[40px] h-[40px]"
            />
          </div>

          <div id="username">
            <h3 className="text-[16px] font-semibold">Aarav</h3>
            <p className="text-[10px] text-[#00000066]">2 hours ago</p>
          </div>
        </div>

        <div id="desc" className="mt-2">
          <p className="text-[12px] w-[90%] mx-auto">
            Just arrived in New York City! Excited to explore the sights,
            sounds, and energy of this amazing place. 🗽
            <span className="text-[#3C8DFF]">#NYC #Travel</span>
          </p>
        </div>

        <div id="image-container" className="flex gap-2 mt-2 ml-3">
          <div id="div">
            <img
              src="/assets/Img/Feeds/user/postImg1.png"
              alt="userImage1"
              className="w-[184px] h-[168px] rounded-[12px]"
            />
          </div>

          <div id="div">
            <img
              src="/assets/Img/Feeds/user/postImg2.png"
              alt="userImage2"
              className="w-[114px] h-[168px] rounded-[12px]"
            />
          </div>
        </div>

        <div
          id="card-bottom"
          className="flex items-center justify-between mx-auto w-[90%] mt-2"
        >
          <div id="card-like" className="flex items-center">
            <HiHeart className="w-[20px] h-[20px] text-[#D95B7F]" />
            <p className="w-[20px] h-[20px] text-[12px] text-[#D95B7F]">67</p>
          </div>

          <div id="card-share">
            <button className="bg-[#00000012] w-[92px] h-[30px] rounded-full flex items-center justify-center gap-1">
              <img
                className="w-[16px] h-[16px]"
                src="/assets/Img/Feeds/user/navigation.png"
                alt="navigation-icon"
              />

              <p className="text-[14px]">Share</p>
            </button>
          </div>
        </div>
      </div>

      <div
        id="card"
        className="mt-2 w-[328px] h-[341px] bg-[#F7EBFF] rounded-[26px] flex flex-col mx-auto"
      >
        <div
          id="user-header"
          className="flex items-center gap-2 h-12 mx-4 mt-2"
        >
          <div id="user">
            <img
              src="/assets/Img/Feeds/Sneha.png"
              alt="user-image2"
              className="w-[40px] h-[40px] relative"
            />

            <HiPlay className="absolute z-10 text-white w-[32px] h-[32px] top-[85%] left-[45%]" />
          </div>

          <div id="username">
            <h3 className="text-[16px] font-semibold">Sneha</h3>
            <p className="text-[10px] text-[#00000066]">1 Day ago</p>
          </div>
        </div>

        <div id="desc" className="mt-2">
          <p className="text-[12px] w-[90%] mx-auto">
            Taking a moment to slow down, breathe, and focus on myself. 🌿✨
            Self-care isn’t selfish – it’s necessary. 💕
            <span className="text-[#3C8DFF]">#SelfCare #MeTime #Wellness</span>
          </p>
        </div>

        <div id="image-container" className="flex gap-2 mt-2 ml-3">
          <div id="div">
            <img
              src="/assets/Img/Feeds/user/postImg3.png"
              alt="userImage3"
              className="w-[304px] h-[168px] rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card
