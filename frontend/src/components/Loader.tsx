import "./loader.scss";
import React from "react";
import ReactLoading from "react-loading";

const Loader = () => (
  <ReactLoading className='center' type={"bars"} color={"#283593"} height={300} width={150} />
);

export default Loader;
