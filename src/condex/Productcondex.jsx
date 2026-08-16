import React, { createContext, useContext, useState } from "react";
import {data} from './Data'

const product = createContext();

const Productcondex = ({ children }) => {
  const listproduct =data;
  return (
    <product.Provider value={ listproduct }>{children}</product.Provider>
  );
};

const useProduct = () => {
  const listproduct=useContext(product);

  return listproduct;
};
export {useProduct}
export default Productcondex;
