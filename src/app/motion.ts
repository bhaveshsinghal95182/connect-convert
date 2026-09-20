import { createContext, useContext } from "react";
export const MotionPreferenceContext = createContext(false);
export const useReducedMotion = () => useContext(MotionPreferenceContext);
