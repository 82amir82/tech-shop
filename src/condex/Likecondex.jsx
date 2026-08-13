import React, { createContext, useContext, useState } from 'react'

const Like = createContext();
const Likecondex = ({children}) => {
    const [listlike,setListlike]=useState([]);
  return (
    <Like.Provider value={{listlike,setListlike}}>{children}</Like.Provider>
  )
};

const useLike = ()=>{
    const {listlike,setListlike}=useContext(Like);
    return [listlike,setListlike];
}

export { useLike };
export default Likecondex;