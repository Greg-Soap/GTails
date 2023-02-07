import React from "react";
import { Bars } from "react-loader-spinner";
import "../styles/main.scss";

export default function Loader() {
  return (
    <>
      <div className="Loader">
        <Bars color="green" height={200} width={200} />
      </div>
    </>
  );
}
