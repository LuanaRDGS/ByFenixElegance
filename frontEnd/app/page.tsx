'use client'

import { signIn } from "next-auth/react";

export default function Home() {

  return (
    <main className="flex justify-center items-center h-screen">
      <button className="btn btn-primary text-white" onClick={() => signIn ('google', {callbackUrl: "/dashboard"})}>Login</button>
    </main>
  );
}
