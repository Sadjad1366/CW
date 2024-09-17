

export function Container() {
      return (
            //============================ CONTAINER ==============================
<div className="w-full grid grid-cols-2 gap-x-44 mx-auto bg-bgc-base px-20">
      {/* ====== LEFT SIDE =============== */}
      <div className=" w-full my-[112px] items-start flex flex-col">
            <h2 className="font-semibold text-[44.55px] leading-[52.9px] text-D-grey text-left ">Lessons and insights<span className="text-primary-green"> from 8 years</span></h2>
            <p className="text-[11.14px] text-neutral-grey my-2">Where to grow your business as a photographer: site or social media?</p>
            <button className="my-2 text-[11.14px] font-medium bg-primary-green text-white w-[89.55px] h-[36.49px] rounded-[2.78px]">Register</button>
      </div>
      {/* ============RIGHT SIDE ============== */}
       <div className="my-[66.82px] px-20"><img src="./assets/images/Illustration.png" alt="man-setting-monitor" /></div>
</div>
      )
    }
