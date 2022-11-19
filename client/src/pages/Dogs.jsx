import React from "react";
import DogCards from "./comp/DogCards";

function Dogs() {
  return (
    <div className="h-100 " style={{ padding: "5% " }}>
      <div
        className="h-100 bg-secondary bg-opacity-50 overflow-auto m-5 pt-2"
        style={{
          border: "5px solid",
          "borderStyle": "double",
        }}
      >
        <DogCards />
      </div>
    </div>
  );
}

export default Dogs;
