import Navbar from "@/components/Navbar/page";
import SideBar from "@/components/SideBar/page";
import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* SideBar */}
      <SideBar />
      <main className="flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
