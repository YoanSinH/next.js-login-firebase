'use client'
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {
  // Access the user object from the authentication context
  // const { user } = useAuthContext();
  const { user } = useAuthContext(); // Use 'as' to assert the type as { user: any }
  const router = useRouter();

  useEffect( () => {
    // Redirect to the home page if the user is not logged in
    if ( user == null ) {
      router.push( "/" );
    }
    // }, [ user ] );
  }, [ user, router ] ); // Include 'router' in the dependency array to resolve eslint warning

  return (
    <>
    {/**render validation */}
    {user?
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 w-full max-w-5xl font-mono text-sm">
      <p>/app/admin/page.js</p>
      <h1 className="text-xl font-bold">Admin page</h1>
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <h1>Only logged-in users can view this page</h1>
      </div>
    </div>
  </main>
  :<p>not logged</p>}
  </>
  );
}

export default Page;
