"use client";
import { ReactNode, Context } from "react";
import { Provider } from "react-redux";
import { store, RootState, AppDispatch } from "./store"; // Make sure to adjust the import path for RootState and AppDispatch

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
