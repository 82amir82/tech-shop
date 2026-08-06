import React, { createContext, useContext } from "react";
import { useReducer } from "react";
//-------------------------------------
import { func_total } from "../service/myfunctions";
import { func_countall } from "../service/myfunctions";
import { func_plus } from "../service/myfunctions";
import { func_minus } from "../service/myfunctions";
import { func_delete } from "../service/myfunctions";

const Basket = createContext();

const initialbasket = {
  listbasket: [],
  countall: 0,
  total: 0,
  statebasket: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (
        !state.listbasket.find(
          (item) => item.ProductID == action.payload.ProductID,
        )
      ) {
        state.listbasket.push({ ...action.payload, count: 1 });
      }
      return {
        listbasket: [...state.listbasket],
        statebasket: false,
        total: func_total(state.listbasket),
        countall: func_countall(state.listbasket),
      };
    case "plus":
      const x = func_plus(state.listbasket, action.payload);
      return {
        listbasket: x,
        statebasket: false,
        total: func_total(state.listbasket),
        countall: func_countall(state.listbasket),
      };
    case "minus":
      const y = func_minus(state.listbasket, action.payload);
      return {
        listbasket: y,
        statebasket: false,
        total: func_total(state.listbasket),
        countall: func_countall(state.listbasket),
      };
    case "delete":
      const z = func_delete(state.listbasket, action.payload);
      return {
        listbasket: z,
        statebasket: false,
        total: func_total(state.listbasket),
        countall: func_countall(state.listbasket),
      };
  }
};

const Basketcondex = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialbasket);

  return (
    <Basket.Provider value={{ state, dispatch }}>{children}</Basket.Provider>
  );
};

const useBasket = () => {
  const { state, dispatch } = useContext(Basket);
  return [state, dispatch];
};
export { useBasket };

export default Basketcondex;
