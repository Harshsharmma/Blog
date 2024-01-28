import React from "react";

function Logo({ width = "10px" }) {
  return (
    <div className=" rounded-xl mt-1">
      <img className="h-10 w-20 rounded-sm" src="images.png" alt="Logo" />
    </div>
  );
}

export default Logo;
