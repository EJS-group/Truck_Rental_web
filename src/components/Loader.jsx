
import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: 9999,
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/Delivery Truck animation.gif`}
        alt="Loading..."
        style={{ maxWidth: "220px", width: "80%", height: "auto" }}
      />
    </div>
  );
}