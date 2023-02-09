import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "../styles/main.scss";

// Loader component to display while fetching data
export default function Loader() {
  return (
    <div className="Loader">
      {/* InfinitySpin component from react-loader-spinner library */}
      <InfinitySpin width="200" color="#87a2fc" />
    </div>
  );
}
