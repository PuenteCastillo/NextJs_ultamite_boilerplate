import React from "react";
import Header from "./components/Header";

export const metadata = {
  title: "Awesome Service | Open Table ",
  description: "Generated by create next app",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}