import React from "react";

const FAQ = () => {
  const [oneOpen, setOneOpen] = React.useState(false);
  const [twoOpen, setTwoOpen] = React.useState(false);
  const [threeOpen, setThreeOpen] = React.useState(false);
  const [fourOpen, setFourOpen] = React.useState(false);
  const [fiveOpen, setFiveOpen] = React.useState(false);

  const handleOneOpen = () => {
    setOneOpen(!oneOpen);
  };

  const handleTwoOpen = () => {
    setTwoOpen(!twoOpen);
  };

  const handleThreeOpen = () => {
    setThreeOpen(!threeOpen);
  };

  const handleFourOpen = () => {
    setFourOpen(!fourOpen);
  };

  const handleFiveOpen = () => {
    setFiveOpen(!fiveOpen);
  };

  return (
    <div class="py-8 lg:mx-4 font-[DicSans]">
      <div class="max-w-7xl mx-auto lg:px-4 lg:px-6 xl:px-8">
        <div class="flex justify-center">
          <div
            id="faq-section"
            class="lg:bg-gradient-to-t from-[#F6EDFD] to-white lg:w-[1169px] w-full rounded-[20px] lg:p-8"
          >
            <h1 class="text-center text-2xl font-bold mb-8 tracking-[3.2px] leading-[40px] block">
              FAQ
            </h1>
            <div class="flex flex-col lg:mx-24 mx-4">
              <button
                onClick={handleOneOpen}
                class="rounded-[20px] p-4 mb-4 border-2 bg-white border-white shadow-md lg:ml-5"
              >
                <div class="flex items-center justify-between">
                  <h2 class="font-bold text-left text-xl px-2 lg:text-2xl lg:mt-2 lg:mb-4 leading-[28px] text-black mt-2">
                    Is Ambos safe to use?
                  </h2>
                  <img
                    src="/src/assets/img/right.svg"
                    alt="right"
                    class="w-6 lg:w-12"
                  />
                </div>
              </button>
              <button
                onClick={handleTwoOpen}
                class="rounded-[20px] p-4 mb-4 border-2 bg-white border-white shadow-md lg:ml-5"
              >
                <div class="flex items-center justify-between">
                  <h2 class="font-bold text-left text-xl px-2 lg:text-2xl lg:mt-2 lg:mb-4 leading-[28px] text-black mt-2">
                    Do I need to verify my identity?
                  </h2>
                  <img
                    src="/src/assets/img/right.svg"
                    alt="right"
                    class="w-6 lg:w-12"
                  />
                </div>
              </button>
              <button
                onClick={handleThreeOpen}
                class="rounded-[20px] p-4 mb-4 border-2 bg-white border-white shadow-md lg:ml-5"
              >
                <div class="flex items-center justify-between">
                  <h2 class="font-bold text-left text-xl px-2 lg:text-2xl lg:mt-2 lg:mb-4 leading-[28px] text-black mt-2">
                    How is borrowing against my assets different from selling?
                  </h2>
                  <img
                    src="/src/assets/img/right.svg"
                    alt="right"
                    class="w-6 lg:w-12"
                  />
                </div>
              </button>
              <button
                onClick={handleFourOpen}
                class="rounded-[20px] p-4 mb-4 border-2 bg-white border-white shadow-md lg:ml-5"
              >
                <div class="flex items-center justify-between">
                  <h2 class="font-bold text-left text-xl px-2 lg:text-2xl lg:mt-2 lg:mb-4 leading-[28px] text-black mt-2">
                    Can I convert my crypto loan to FIAT currency?
                  </h2>
                  <img
                    src="/src/assets/img/right.svg"
                    alt="right"
                    class="w-6 lg:w-12"
                  />
                </div>
              </button>
              <button
                onClick={handleFiveOpen}
                class="rounded-[20px] p-4 mb-4 border-2 bg-white border-white shadow-md lg:ml-5"
              >
                <div class="flex items-center justify-between">
                  <h2 class="font-bold text-left text-xl px-2 lg:text-2xl lg:mt-2 lg:mb-4 leading-[28px] text-black mt-2">
                    How long does it take to get a loan?
                  </h2>
                  <img
                    src="/src/assets/img/right.svg"
                    alt="right"
                    class="w-6 lg:w-12"
                  />
                </div>
              </button>
            </div>
            <button
              id="Button1"
              class="bg-green-600 flex flex-col justify-center h-16 items-center rounded-lg mb-10 mt-4 lg:mt-16 mx-auto hover:opacity-80"
            >
              <a
                class="text-2xl w-full font-medium tracking-[0.5] leading-[24px] text-white mx-6"
                href=""
              >
                More FAQs
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
