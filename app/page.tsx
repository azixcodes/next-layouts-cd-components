// import Profile from "@/components/Profile";
import Profile2 from "@/components/ui/profile2";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full mt-5 px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
      <div className="col-span-3">
        <Profile2 />
      </div>
    </div>
  );
};

export default HomePage;
