export function FooterDiv() {
  return (
    <div className="w-full mx-auto flex flex-col py-8">
      {/* GREY PART */}
      <div className="flex flex-col justify-center items-center bg-bgc-base">
        <h2 className="font-semibold text-[44.55px] px-60 mx-20 mt-6 leading-[52.9px] text-app-black">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="flex justify-center items-center text-[11.14px] font-medium bg-primary-green text-white my-6 px-4 h-[36.49px] rounded-[2.78px]">
          Get a Demo
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
      {/* Black Part */}
      <div className="w-full flex justify-between px-28 py-9 bg-app-black">
        {/* Nexcent */}
        <div className="flex flex-col">
          <div className="flex items-center mb-3">
            <svg
              width="31"
              height="22"
              viewBox="0 0 31 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0185 12.0322L12.3793 19.9777L7.74004 12.0322H17.0185ZM18.2614 11.3221H6.49219L12.3793 21.3831L18.2614 11.3221Z"
                fill="white"
              />
              <path
                d="M25.0841 2.14975L29.7234 10.0953H20.4449L25.0841 2.14975ZM25.0841 0.729492L19.197 10.7905H30.9712L25.0841 0.729492Z"
                fill="white"
              />
              <path
                d="M0.851562 0.729492L5.78769 9.62848L11.1817 0.952948L0.851562 0.729492Z"
                fill="#4CAF4F"
              />
              <path
                d="M12.3793 1.50897L17.557 10.3583H7.19165L12.3793 1.50897Z"
                fill="#4CAF4F"
              />
              <path
                d="M18.8902 12.2904L24.0728 21.3831H13.4609L18.7291 12.2904H18.8902Z"
                fill="#4CAF4F"
              />
              <path
                d="M20.0122 11.7391L25.0842 20.6927L30.2266 11.7391H20.0122Z"
                fill="#4CAF4F"
              />
            </svg>
            <h2 className="text-white font-semibold text-[24px] px-2">Nexcent</h2>
          </div>
          <p className="font-normal text-bgc-base text-[9.74px] text-left">Copyright © 2020 Landify UI Kit.</p>
          <p className="font-normal text-bgc-base text-[9.74px] text-left mb-6">All rights reserved</p>
          <svg
            width="124"
            height="23"
            viewBox="0 0 124 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_565_197)">
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.851562 11.7743C0.851562 5.62346 5.83782 0.637207 11.9887 0.637207C18.1395 0.637207 23.1258 5.62346 23.1258 11.7743C23.1258 17.9252 18.1395 22.9114 11.9887 22.9114C5.83782 22.9114 0.851562 17.9252 0.851562 11.7743Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9889 5.83453C10.3758 5.83453 10.1733 5.84159 9.53973 5.87042C8.90739 5.89938 8.47576 5.99949 8.09808 6.14638C7.70741 6.29809 7.37602 6.50103 7.04586 6.83132C6.71546 7.16147 6.51251 7.49287 6.3603 7.88341C6.21304 8.26121 6.11281 8.69296 6.08435 9.32506C6.05601 9.95865 6.04858 10.1612 6.04858 11.7744C6.04858 13.3876 6.05576 13.5894 6.08447 14.223C6.11355 14.8553 6.21366 15.2869 6.36043 15.6646C6.51226 16.0553 6.71521 16.3867 7.04549 16.7168C7.37552 17.0472 7.70692 17.2507 8.09734 17.4024C8.47526 17.5493 8.90702 17.6494 9.53924 17.6784C10.1728 17.7072 10.3752 17.7142 11.9882 17.7142C13.6015 17.7142 13.8033 17.7072 14.4369 17.6784C15.0692 17.6494 15.5014 17.5493 15.8793 17.4024C16.2698 17.2507 16.6007 17.0472 16.9308 16.7168C17.2612 16.3867 17.4641 16.0553 17.6163 15.6647C17.7623 15.2869 17.8626 14.8552 17.8923 14.2231C17.9207 13.5895 17.9282 13.3876 17.9282 11.7744C17.9282 10.1612 17.9207 9.95877 17.8923 9.32519C17.8626 8.69284 17.7623 8.26121 17.6163 7.88354C17.4641 7.49287 17.2612 7.16147 16.9308 6.83132C16.6004 6.50091 16.27 6.29797 15.8789 6.14638C15.5003 5.99949 15.0684 5.89938 14.436 5.87042C13.8024 5.84159 13.6007 5.83453 11.9871 5.83453H11.9889ZM11.4561 6.90493C11.6142 6.90468 11.7907 6.90493 11.9889 6.90493C13.5748 6.90493 13.7628 6.91062 14.3891 6.93908C14.9682 6.96556 15.2826 7.06233 15.4919 7.14364C15.7691 7.2513 15.9668 7.37999 16.1745 7.58789C16.3824 7.79578 16.5111 7.99378 16.619 8.27097C16.7003 8.4801 16.7972 8.79442 16.8236 9.37356C16.852 9.99972 16.8582 10.1878 16.8582 11.773C16.8582 13.3582 16.852 13.5463 16.8236 14.1725C16.7971 14.7516 16.7003 15.0659 16.619 15.2751C16.5114 15.5522 16.3824 15.7496 16.1745 15.9574C15.9666 16.1653 15.7693 16.294 15.4919 16.4016C15.2828 16.4833 14.9682 16.5798 14.3891 16.6063C13.7629 16.6348 13.5748 16.641 11.9889 16.641C10.4028 16.641 10.2149 16.6348 9.58871 16.6063C9.00958 16.5796 8.69526 16.4828 8.48576 16.4015C8.20856 16.2939 8.01057 16.1652 7.80267 15.9573C7.59478 15.7494 7.46608 15.5519 7.35817 15.2746C7.27687 15.0654 7.17998 14.7511 7.15362 14.172C7.12516 13.5458 7.11946 13.3577 7.11946 11.7715C7.11946 10.1853 7.12516 9.99823 7.15362 9.37207C7.1801 8.79294 7.27687 8.47862 7.35817 8.26924C7.46583 7.99205 7.59478 7.79405 7.80267 7.58616C8.01057 7.37826 8.20856 7.24956 8.48576 7.14166C8.69514 7.05998 9.00958 6.96346 9.58871 6.93685C10.1367 6.91211 10.349 6.90468 11.4561 6.90344V6.90493ZM15.1596 7.89119C14.766 7.89119 14.4468 8.21009 14.4468 8.60373C14.4468 8.99724 14.766 9.31651 15.1596 9.31651C15.5531 9.31651 15.8723 8.99724 15.8723 8.60373C15.8723 8.21021 15.5531 7.89119 15.1596 7.89119ZM11.9889 8.72401C10.3044 8.72401 8.93858 10.0898 8.93858 11.7744C8.93858 13.4589 10.3044 14.8241 11.9889 14.8241C13.6735 14.8241 15.0388 13.4589 15.0388 11.7744C15.0388 10.0898 13.6735 8.72401 11.9889 8.72401ZM11.9889 9.79442C13.0823 9.79442 13.9689 10.6808 13.9689 11.7744C13.9689 12.8678 13.0823 13.7543 11.9889 13.7543C10.8954 13.7543 10.009 12.8678 10.009 11.7744C10.009 10.6808 10.8954 9.79442 11.9889 9.79442Z"
                fill="white"
              />
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.2627 11.7743C34.2627 5.62346 39.249 0.637207 45.3998 0.637207C51.5507 0.637207 56.5369 5.62346 56.5369 11.7743C56.5369 17.9252 51.5507 22.9114 45.3998 22.9114C39.249 22.9114 34.2627 17.9252 34.2627 11.7743Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.3395 11.7661C51.3395 12.1678 51.2987 12.5689 51.2183 12.9599C51.14 13.3417 51.024 13.7164 50.872 14.0747C50.7235 14.4266 50.5393 14.7658 50.3241 15.082C50.1121 15.3963 49.8679 15.6911 49.5996 15.9599C49.3307 16.2275 49.0349 16.471 48.7208 16.6839C48.4035 16.8977 48.0638 17.0816 47.7117 17.2308C47.3529 17.3819 46.9773 17.4978 46.5959 17.576C46.2044 17.6565 45.8018 17.6976 45.3995 17.6976C44.9969 17.6976 44.5943 17.6565 44.2034 17.576C43.8214 17.4978 43.4458 17.3819 43.0873 17.2308C42.7352 17.0816 42.3952 16.8977 42.0779 16.6839C41.7638 16.4711 41.4679 16.2275 41.1997 15.9599C40.9311 15.6911 40.6869 15.3963 40.4745 15.082C40.2605 14.7658 40.076 14.4266 39.9269 14.0747C39.7749 13.7164 39.6586 13.3417 39.58 12.9599C39.5006 12.5689 39.46 12.1678 39.46 11.7661C39.46 11.3641 39.5006 10.9621 39.5801 10.5719C39.6587 10.1902 39.775 9.81486 39.927 9.45718C40.076 9.105 40.2605 8.76557 40.4746 8.44928C40.6869 8.13476 40.9311 7.84048 41.1997 7.57142C41.468 7.30379 41.7638 7.06082 42.0779 6.84823C42.3952 6.63361 42.7352 6.44972 43.0873 6.30026C43.4458 6.14875 43.8214 6.03263 44.2034 5.95502C44.5944 5.87509 44.9969 5.83453 45.3995 5.83453C45.8018 5.83453 46.2044 5.87509 46.5959 5.95502C46.9773 6.03265 47.3529 6.14878 47.7117 6.30026C48.0638 6.4497 48.4035 6.63361 48.7208 6.84823C49.0349 7.06082 49.3308 7.30379 49.5996 7.57142C49.8679 7.84048 50.1121 8.13476 50.3241 8.44928C50.5393 8.76557 50.7235 9.10503 50.872 9.45718C51.024 9.81486 51.14 10.1902 51.2183 10.5719C51.2987 10.9621 51.3395 11.3641 51.3395 11.7661ZM43.2352 7.18448C41.8206 7.8515 40.7648 9.15307 40.4356 10.7217C40.5694 10.7229 42.6832 10.7495 45.1187 10.1033C44.2407 8.54571 43.3027 7.27458 43.2352 7.18448ZM45.539 10.8833C42.9271 11.6641 40.4208 11.6079 40.3309 11.6045C40.3295 11.6589 40.3269 11.7116 40.3269 11.7661C40.3269 13.0674 40.8185 14.2537 41.6266 15.1507C41.6248 15.148 43.013 12.6888 45.7504 11.8049C45.8165 11.7829 45.8838 11.7632 45.9505 11.7441C45.8232 11.4562 45.6843 11.1677 45.539 10.8833ZM48.7495 7.96445C47.8564 7.1781 46.6838 6.70111 45.3995 6.70111C44.9873 6.70111 44.5873 6.75093 44.2042 6.84303C44.2802 6.94499 45.233 8.20717 46.1005 9.79777C48.0145 9.08125 48.737 7.98298 48.7495 7.96445ZM46.2963 12.5834C46.285 12.5871 46.2737 12.5904 46.2627 12.5944C43.2698 13.6363 42.2924 15.7359 42.2818 15.7589C43.143 16.4276 44.2231 16.8311 45.3995 16.8311C46.102 16.8311 46.7711 16.6882 47.3799 16.4296C47.3048 15.9871 47.0101 14.4359 46.2963 12.5834ZM48.2341 15.9668C49.3731 15.1993 50.182 13.9806 50.4076 12.5689C50.3032 12.5353 48.884 12.0867 47.2467 12.3488C47.9121 14.1746 48.1824 15.6616 48.2341 15.9668ZM46.4909 10.5525C46.6087 10.7941 46.7227 11.04 46.828 11.287C46.8654 11.3757 46.9019 11.4626 46.9376 11.5494C48.6802 11.3305 50.3969 11.6989 50.4703 11.7139C50.4587 10.5132 50.0286 9.41112 49.3168 8.54834C49.3073 8.56192 48.4937 9.73578 46.4909 10.5525Z"
                fill="white"
              />
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M67.6741 11.7743C67.6741 5.62346 72.6603 0.637207 78.8112 0.637207C84.962 0.637207 89.9483 5.62346 89.9483 11.7743C89.9483 17.9252 84.962 22.9114 78.8112 22.9114C72.6603 22.9114 67.6741 17.9252 67.6741 11.7743Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M78.4777 9.68957L78.501 10.0749L78.1115 10.0278C76.6937 9.84687 75.4551 9.23342 74.4034 8.20315L73.8893 7.69195L73.7568 8.06945C73.4764 8.91097 73.6556 9.79968 74.2398 10.3974C74.5514 10.7277 74.4813 10.7749 73.9438 10.5783C73.7568 10.5154 73.5932 10.4682 73.5777 10.4918C73.5231 10.5468 73.7101 11.2625 73.8581 11.5456C74.0606 11.9389 74.4735 12.3242 74.9254 12.5523L75.3071 12.7332L74.8552 12.7411C74.419 12.7411 74.4034 12.7489 74.4502 12.9141C74.606 13.4253 75.2214 13.968 75.9069 14.2039L76.3899 14.3691L75.9692 14.6207C75.346 14.9825 74.6137 15.187 73.8815 15.2027C73.5309 15.2106 73.2427 15.242 73.2427 15.2656C73.2427 15.3443 74.1931 15.7847 74.7462 15.9577C76.4055 16.4689 78.3764 16.2487 79.8565 15.3757C80.9082 14.7544 81.9599 13.5197 82.4507 12.3242C82.7155 11.6872 82.9804 10.5232 82.9804 9.96484C82.9804 9.60306 83.0038 9.55588 83.44 9.12332C83.6971 8.87165 83.9386 8.59638 83.9853 8.51774C84.0632 8.36831 84.0554 8.36831 83.6581 8.50201C82.996 8.73795 82.9025 8.70649 83.2297 8.35258C83.4712 8.10091 83.7594 7.64476 83.7594 7.51106C83.7594 7.48747 83.6426 7.52679 83.5101 7.59757C83.3699 7.67622 83.0583 7.79419 82.8246 7.86497L82.4039 7.99867L82.0222 7.73913C81.8119 7.59757 81.5158 7.44028 81.36 7.39309C80.9627 7.28298 80.3551 7.29871 79.9968 7.42455C79.023 7.77846 78.4076 8.69076 78.4777 9.68957Z"
                fill="white"
              />
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M101.085 11.7743C101.085 5.62346 106.072 0.637207 112.223 0.637207C118.373 0.637207 123.36 5.62346 123.36 11.7743C123.36 17.9252 118.373 22.9114 112.223 22.9114C106.072 22.9114 101.085 17.9252 101.085 11.7743Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M116.864 7.94565C117.375 8.08591 117.778 8.4992 117.914 9.02404C118.163 9.97525 118.163 11.96 118.163 11.96C118.163 11.96 118.163 13.9446 117.914 14.8959C117.778 15.4207 117.375 15.834 116.864 15.9743C115.938 16.2292 112.223 16.2292 112.223 16.2292C112.223 16.2292 108.508 16.2292 107.581 15.9743C107.07 15.834 106.668 15.4207 106.531 14.8959C106.283 13.9446 106.283 11.96 106.283 11.96C106.283 11.96 106.283 9.97525 106.531 9.02404C106.668 8.4992 107.07 8.08591 107.581 7.94565C108.508 7.69073 112.223 7.69073 112.223 7.69073C112.223 7.69073 115.938 7.69073 116.864 7.94565ZM111.109 10.2894V14.0017L114.079 12.1456L111.109 10.2894Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_565_197">
                <rect
                  width="122.508"
                  height="22.2742"
                  fill="white"
                  transform="translate(0.851562 0.637207)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[13.92px] text-white mb-4 text-left">company</h3>
          <p className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">About us</p>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Blog</p>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Contact us</p>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Pricing</p>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Testimonials</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[13.92px] text-white mb-4 text-left">Support</h3>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Help center</p>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Terms of service</p>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Legal</p>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Privacy policy</p>
          <p  className="font-normal text-[9.74px] text-bgc-base mb-3 text-left">Status</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[13.92px] text-white mb-4 text-left">Stay up to date</h3>
          <div className="flex justify-between items-center bg-[#89939E] py-1 pl-2 rounded-sm pr-1">
            <p className="font-normal text-[9.74px] text-[#D9DBE1] pr-10">Your email address</p>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_565_231)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4609 0.766873C12.6027 0.908682 12.6508 1.11919 12.5845 1.30848L8.93014 11.7495C8.85943 11.9516 8.67255 12.09 8.45867 12.0987C8.2448 12.1074 8.04727 11.9847 7.96034 11.7891L5.95368 7.2741L1.43869 5.26744C1.24309 5.18051 1.12037 4.98298 1.1291 4.7691C1.13782 4.55523 1.27622 4.36835 1.47826 4.29764L11.9193 0.643276C12.1086 0.577025 12.3191 0.625064 12.4609 0.766873ZM6.97186 6.99421L8.37965 10.1617L10.8433 3.12279L6.97186 6.99421ZM10.105 2.38449L3.06604 4.84813L6.23357 6.25592L10.105 2.38449Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_565_231">
                  <rect
                    width="12.5293"
                    height="12.5293"
                    fill="white"
                    transform="translate(0.606445 0.0919189)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
