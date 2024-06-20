import { ReactNode } from "react";
import Navbar from "./_components/Navbar";

function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-blue-200 to-slate-400">
      <Navbar />
      {children}
    </div>
  );
}

export default ProtectedLayout;
