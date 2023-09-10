import { createStore } from "redux";
import reducer from "./../reduce/reduce"

export const store = createStore(reducer);
