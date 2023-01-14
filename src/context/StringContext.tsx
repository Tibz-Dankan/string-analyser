import { createContext, useContext, useState } from "react";

const StringContext = createContext<string | undefined>(undefined);
const UpdateStringContext = createContext<(str: string | undefined) => void>(
  () => {}
);

export const useString = () => {
  return useContext<string | undefined>(StringContext);
};

export const useUpdateString = (str: string | undefined) => {
  return useContext<(str: string | undefined) => void>(UpdateStringContext);
};

interface ProviderProps {
  children: JSX.Element;
}

export const StringProvider: React.FC<ProviderProps> = (props): JSX.Element => {
  const [str, setStr] = useState<string | undefined>(undefined);

  const updateString = (str: string | undefined): void => {
    setStr(str);
  };

  return (
    <StringContext.Provider value={str}>
      <UpdateStringContext.Provider value={updateString}>
        {props.children}
      </UpdateStringContext.Provider>
    </StringContext.Provider>
  );
};
