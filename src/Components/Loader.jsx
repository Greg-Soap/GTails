import React from "react";
import { Bars } from "react-loader-spinner";
import "../styles/main.scss";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="Loader">
        <Bars color="green" height={200} width={200} />
      </div>
    </React.Fragment>
  );
};

export default Loader;
