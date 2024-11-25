import { atom } from "recoil";

export const displayState = atom<string>({
    key: "displayState",
    default: "0",
});

export const historicoState = atom<string[]>({
    key: "historicoState",
    default: [],
  });

export const mostrarHistorico = atom<boolean>({
    key:"mostrarHistorico",
    default: false
})

export const temaState = atom({
    key: 'temaState', 
    default: 'light'
  });