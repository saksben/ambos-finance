import React from "react";

const Header = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="py-6 px-8 md:px-10 lg:px-10 pb-10">
      <div className="md:max-w-[1000px] mx-auto bg-black p-8 md:p-6 lg:p-6 items-center justify-between flex flex-wrap rounded-[20px] shadow-2xl">
        <div className="flex-shrink-0 h-9 m-1 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="w-28 h-10 relative my-auto">
            <a href="/">
              <img src="/src/assets/img/logo.svg" alt="logo" />
            </a>
          </div>
        </div>
        <div className="lg:hidden justify-end m-1">
          <button onClick={handleExpand} className="text-white">
            {expanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex button-group justify-center">
          <div className="flex items-center gap-4">
            <div className="px-2 py-3 flex items-center gap-2">
              <div className="text-white text-xl font-medium font-['DicSans'] leading-normal tracking-wide">
                <a href="#about-section">About</a>
              </div>
            </div>
            <div className="px-2 py-3 flex items-center gap-2">
              <div className="text-white text-xl font-medium font-['DicSans'] leading-normal tracking-wide">
                <a href="#how-section">How it works</a>
              </div>
            </div>
            <div className="px-2 py-3 flex items-center gap-2">
              <div className="text-white text-xl font-medium font-['DicSans'] leading-normal tracking-wide">
                <a href="#how-section">FAQ</a>
              </div>
            </div>
          </div>
        </div>
        <div className="button hidden lg:inline-block">
          <button
            onClick={() => {
              alert("Nice!");
            }}
            className="w-32 h-12 p-3 bg-green-600 rounded-lg justify-center items-center inline-flex hover:opacity-80"
          >
            <div className="px-4 justify-center items-center flex">
              <span className="text-white text-base font-medium font-['DicSans'] leading-normal tracking-wide">
                Join Now
              </span>
            </div>
          </button>
        </div>
      </div>
      {expanded && (
        <div className="lg:hidden text-white text-xl bg-black text-center rounded-b-2xl py-4 -mt-4">
          <div className="px-6 p-2">
            <a href="#about-section" className="block py-2">
              About
            </a>
            <a href="#how-section" className="block py-2">
              How it works
            </a>
            <a href="#faq-section" className="block py-2">
              FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
