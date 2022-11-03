import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import heroBackground from "../../public/hero-bg.jpeg";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex min-h-[300px] min-w-[100vw] items-center justify-center overflow-hidden bg-purple-800 shadow-md sm:min-w-[80vw] sm:rounded-lg">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={heroBackground}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-[color:#fe1b7265] mix-blend-multiply" />
        <div className="relative">
          <h1 className="text-center text-4xl font-bold text-white">
            Remix Demo App
          </h1>
          <div className="mt-4 ">
            {user ? (
              <div className="">
                <div className="mb-4 text-center text-gray-50">
                  Welcome, {user.email}!
                </div>
                <Link
                  to="posts/admin"
                  className="flex items-center justify-center rounded-md bg-purple-800 px-2 py-2 font-medium text-white hover:bg-purple-600"
                >
                  Admin Panel
                </Link>
              </div>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2">
                <Link
                  to="/join"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-2 py-2 text-base font-medium text-purple-800 shadow-sm hover:bg-purple-50 sm:px-8"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-md bg-purple-800 px-2 py-2 font-medium text-white hover:bg-purple-600"
                >
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto mt-16 max-w-7xl text-center">
          <Link to="/posts" className="text-xl text-blue-600 underline">
            Blog Posts
          </Link>
        </div>
      </div>
    </main>
  );
}
