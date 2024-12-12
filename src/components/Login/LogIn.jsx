import ImageContainer from "./ImageContainer";

const LogIn = () => {
  return (
    <>
      <div className="h-[800px] w-[360px] bg-yellow-400 mx-auto container">
        <ImageContainer />

        <div
          id="login-container"
          className="w-[360px] h-[360px] rounded-t-[63px] bg-white relative top-[520px]"
        >
          <div
            id="second-part"
            className="text-black flex flex-col items-center justify-center"
          >
            <div className="flex flex-col">
              <div id="logo-container" className="flex justify-center mt-7">
                <div id="logo">
                  <img
                    src="public\assets\Img\logo.png"
                    alt="logo"
                    className="w-[46px] h-[34px]"
                  />
                </div>
                <h1 className="text-[28px] font-semibold font-Karla">
                  Vibesnap
                </h1>
              </div>

              <div id="logo-para">
                <p className="text-[16px] font-KumbhSans">
                  Moments That Matter, Shared Forever.
                </p>
              </div>
            </div>
          </div>

          <button className="bg-[#292929] text-white rounded-full flex items-center gap-3 mx-auto mt-7">
            <img
              src="public\assets\Img\google.png"
              alt="google-logo"
              className="w-[18px] h-[18px]"
            />
            <p className="font-bold text-[16px] font-Karla">
              Continue with Google
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default LogIn; 
