"use client";

import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" flex h-full flex-col items-center justify-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-blue-200 to-slate-400">
      <div className=" space-y-6 text-center">
        <h1 className=" text-6xl  font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className=" text-white text-lg">Authentication Service</p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
