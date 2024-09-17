function Navbar() {
  return (
    //============================ HEADER ==============================
    <div className="w-full h-[58.76px] flex justify-between items-center mx-auto">
      <div className="flex items-center px-20">
        <svg
          width="25"
          height="17"
          viewBox="0 0 25 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3106 9.17133L9.55815 15.5981L5.80572 9.17133H13.3106ZM14.3159 8.59692H4.79639L9.55815 16.7348L14.3159 8.59692Z"
            fill="#263238"
          />
          <path
            d="M19.8348 1.17808L23.5872 7.60481H16.0823L19.8348 1.17808ZM19.8348 0.0292969L15.073 8.16715H24.5966L19.8348 0.0292969Z"
            fill="#263238"
          />
          <path
            d="M0.233887 0.0292969L4.22647 7.22725L8.5894 0.210039L0.233887 0.0292969Z"
            fill="#4CAF4F"
          />
          <path
            d="M9.55813 0.659668L13.7461 7.81746H5.36206L9.55813 0.659668Z"
            fill="#4CAF4F"
          />
          <path
            d="M14.8245 9.38013L19.0165 16.7348H10.4331L14.6943 9.38013H14.8245Z"
            fill="#4CAF4F"
          />
          <path
            d="M15.7322 8.93433L19.8346 16.1765L23.9941 8.93433H15.7322Z"
            fill="#4CAF4F"
          />
        </svg>
        <h2 className="font-bold text-[#263238] px-1 text-[24px]">
          Nexcent
        </h2>
      </div>
      <div className="w-full h-[36.49px] flex justify-end items-center  mr-24">
        <div className="flex mr-6">
          <p className="font-medium text-D-grey text-[11.14px] mr-12">Home</p>
          <p className="font-medium text-D-grey text-[11.14px] mr-6">Features</p>
          <p className="font-medium text-D-grey text-[11.14px] mr-6">Community</p>
          <p className="font-medium text-D-grey text-[11.14px] mr-6">Blog</p>
          <p className="font-medium text-D-grey text-[11.14px] mr-3">Pricing</p>
        </div>
        <button className="flex justify-center items-center text-[11.14px] font-medium bg-primary-green text-white px-4 h-[36.49px] rounded-[2.78px]">
          Register Now
          <div className="px-3">
            <svg
              width="17"
              height="25"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
