'use client'
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation';
import { useState } from "react";

function Page(){
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const router = useRouter();

  // Handle form submission
  const handleForm = async ( event ) => {
    event.preventDefault();

    // Attempt to sign up with provided email and password
    const { result, error } = await signUp( email, password );

    if ( error ) {
      // Display and log any sign-up errors
      console.log( error );
      return;
    }

    // Sign up successful
    console.log( result );

    // Redirect to the admin page
    router.push( "/admin" );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-96 p-6">
        <h1 className="text-3xl font-bold mb-6">Registration</h1>
        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              onChange={( e ) => setEmail( e.target.value )}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full rounded px-3 py-2 text-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              onChange={( e ) => setPassword( e.target.value )}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full px-3 py-2 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;