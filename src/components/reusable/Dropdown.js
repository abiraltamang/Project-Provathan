import React from "react";
import "tw-elements";
import { Link, useLocation } from "react-router-dom";

const Dropdown = () => {
  const router = useLocation();
  return (
    <div className="flex justify-center">
      <div>
        <div className="dropdown relative">
          <button
            className="font-Inter flex items-center "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <p
              className={`${
                router.pathname === "/upcomingevents" ||
                router.pathname === "/ongoingevents"
                  ? "style-activelink"
                  : ""
              } `}
            >
              Events
            </p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
          <ul
            className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-5
          list-none
          text-left
          rounded-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <Link to="upcomingevents">
                <div
                  className="
                
                dropdown-item
                py-2
                px-4
                font-normal
                hover:bg-dim-dark
                block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700"
                >
                  Upcoming Events
                </div>
              </Link>
            </li>
            <li>
              <Link to="ongoingevents">
                <div
                  className="
              hover:bg-dim-dark
              dropdown-item
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700"
                >
                  Ongoing Eventss
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
