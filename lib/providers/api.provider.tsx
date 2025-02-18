"use client";

import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

const ApiContext = createContext(
  {} as {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
  }
);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  return (
    <ApiContext.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
