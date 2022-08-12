import React from "react";

const Themecard = (props) => {
  const { themeTitle, themeImage, themeDesc } = props;
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img
            class="rounded-t-lg"
            src={themeImage}
            alt=""
            width={384}
            height={260}
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{themeTitle}</h5>
          <p class="text-gray-700 text-base mb-4">{themeDesc}</p>
          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Themecard;
