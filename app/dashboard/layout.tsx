import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div>dashbard navbar</div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
