"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

const Header = () => {
  const { user } = useUser();
  // const createClerkPasskey = async () => {
  //   try {
  //     const response = await user?.createPasskey();
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex flex-wrap justify-between items-center w-full">
        <Link
          href="/"
          className="text-2xl 
          font-bold 
        text-blue-500 
          hover:opacity-50 
          cursor-pointer 
          mx-auto 
          sm:mx-0"
        >
          VeloShop
        </Link>
        <Form
          action={"/search"}
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="
          bg-gray-100
            px-4 
            py-2 
            rounded 
            outline-none 
            ring-2
          focus:ring-blue-500
            ring-opacity-50
            border
            max-w-4xl
            w-full"
          />
        </Form>
        <div className="flex items-center space-x-4 sm:mt-0 mt-4 flex-1 md:flex-none">
          <Link
            href={"/basket"}
            className="flex-1 relative 
            flex justify-center
             sm:justify-start 
             sm:flex-none 
             items-center 
             space-x-2 
             bg-blue-500 
             hover:bg-blue-700 
             text-white px-4 
             py-2 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            {/* span count */}
            <span>My Basket</span>
          </Link>
          <ClerkLoaded>
            {user && (
              <SignedIn>
                <Link
                  href="/orders"
                  className="flex-1 relative flex justify-center 
                  sm:justify-start sm:flex-none items-center 
                  space-x-2 bg-blue-500 hover:bg-blue-700 
                  text-white font-bold py-2 px-4 rounded"
                >
                  <PackageIcon className="w-6 h-6" />
                  <span>My Orders</span>
                </Link>
              </SignedIn>
            )}
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

            {/* {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Create a passkey now
              </button>
            )} */}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
