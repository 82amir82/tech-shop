import React, {  createContext, useContext } from 'react';
import {data} from "./data.js"

const product = createContext();
const Productcondex = ({children}) => {
  const listproduct = data;
  return (
    <product.Provider value={data}>{children}</product.Provider>
  )
}

const useProduct = ()=>{
  const listproduct = useContext(product);
  return listproduct;
}


export {useProduct};
export default Productcondex