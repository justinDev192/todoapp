import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { IoSearch } from 'react-icons/io5'
import { FaPlus, FaRegFolder } from 'react-icons/fa6'

import Authentication from "~/components/Authentication/Authentication";

const TodoApp: NextPage = () => {
  const { data: session } = useSession()

  return (
    <Authentication>
      <div className="h-screen w-screen bg-[#121215]">
        <div className="flex size-full flex-col items-center justify-center space-y-14 px-44 py-20">
          <div className="flex w-full items-end justify-between">
            <Image
              src="/assets/todo-logo.png"
              alt=""
              width={258}
              height={122}
              className="h-auto w-[258px]"
            />
            <div className="flex flex-col items-start justify-end space-y-2">
              <div className="flex flex-col items-start justify-start">
                <span className="text-sm font-medium text-[#83839E]">
                  {session?.user.name}
                </span>
                <span className="text-sm font-medium text-[#83839E]">
                  {session?.user.email}
                </span>
              </div>
              <span
                className="cursor-pointer text-sm font-medium text-[#83839E] hover:underline"
                onClick={() => void signOut()}
              >
                Sign Out
              </span>
            </div>
          </div>
          <div className="flex size-full items-stretch justify-between space-x-14">
            <div className="h-full min-w-[400px] rounded-3xl bg-[#19191E] p-6 shadow-[0px_0px_30px_2px_rgba(17,17,20,1)]">
              <div className="relative">
                <IoSearch className="absolute left-3 top-3.5 size-7 text-[#84849D]" />
                <input
                  type="text"
                  placeholder="Search for a Task"
                  className="w-full rounded-xl bg-[#121215] py-4 pl-14 text-[#84849D] placeholder:text-[#84849D]/50 focus:outline-none" />

                <div className="overflow-indicator mt-10 flex h-full flex-col space-y-1 overflow-scroll pb-20">
                  <div className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-[#19191E] px-4 py-2 text-[#83839E] hover:border-[#2F2D36]">
                    <div className="flex w-full items-center justify-start space-x-2">
                      <FaRegFolder className="-mt-0.5 size-4" />
                      <h2 className="text-base font-medium">For Dev Meeting</h2>
                    </div>
                    <span className="w-[75px] text-right">2 / 10</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 flex w-full items-center justify-center">
                  <button className="rounded-full bg-gradient-to-br from-[#8B6BF6] to-[#6F44F7] px-14 py-3 text-[#FFFFFF] transition-all duration-300 ease-in-out hover:scale-110">
                    <span className="flex items-center justify-center space-x-2">
                      <FaPlus />
                      <span className="-mb-0.5">New List</span>
                    </span>
                  </button>
                </div>

              </div>
            </div>
            <div className="h-full w-2/3 rounded-3xl bg-[#19191E] p-6 shadow-[0px_0px_30px_2px_rgba(17,17,20,1)]">

            </div>
          </div>
        </div>
      </div>
    </Authentication>
  )
}

export default TodoApp