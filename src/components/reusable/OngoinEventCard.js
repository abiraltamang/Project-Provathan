import { React } from "react";
import { BiUpvote } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const OngoinEventCard = ({ author, image }) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const votes = 100;
  function handleVoteCount() {
    votes = votes + 1;
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div
        className="relative h-[300px] w-[300px]"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="absolute">
          <img
            className=" h-[300px] w-[300px] hover:brightness-50 cursor-pointer "
            src={image}
            alt=""
          />
        </div>
        {/* <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full  ">
        <BiUpvote />
    </div> */}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-[600px]   transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all m-11">
                  <div className="grid grid-cols-2">
                    <div>
                      <img src={image} alt="" />
                    </div>
                    <div className="px-5">
                      <div className="flex items-center justify-between h-20">
                        <div className="flex items-center justify-center gap-3">
                          <img
                            src="/images/profile.png"
                            className="h-10 w-10"
                            alt=""
                          />
                          <p>John Doe</p>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={closeModal}
                            cursor="pointer"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="py-5">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Assumenda repellendus dolorem officiis maiores
                          voluptate. Iure pariatur totam praesentium veniam
                          neque velit, est ullam illo earum in quae autem quasi,
                          voluptates magni, eius eveniet! Rem dicta quae nisi
                          mollitia non minima nostrum quidem suscipit dolor
                          laboriosam.
                        </p>
                      </div>
                      <p>
                        Total votes :{" "}
                        <span className="font-semibold">{votes}</span>{" "}
                      </p>

                      <button
                        className="px-3 text-sm w-36 h-8 rounded-xl bg-secondary text-white my-5"
                        onClick={handleVoteCount}
                      >
                        Vote
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default OngoinEventCard;
