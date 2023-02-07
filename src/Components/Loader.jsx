import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "../styles/main.scss";

export default function Loader() {
  return (
    <>
      <div className="Loader">
        <InfinitySpin width="200" color="#87a2fc" />
      </div>
    </>
  );
}
