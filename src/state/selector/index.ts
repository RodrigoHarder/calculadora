import { selector } from "recoil";
import { displayState } from "../atom";


export const resultSelector = selector({
  key: "resultSelector",
  get: ({ get }) => {
    const displayValue = get(displayState);
    try {
      return eval(displayValue).toString();
    } catch {
      return "Error";
    }
  }
});