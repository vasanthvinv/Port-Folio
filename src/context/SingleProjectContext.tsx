import { useState, createContext, ReactNode, Dispatch, SetStateAction, JSX } from 'react';
import { SingleProjectData, singleProjectData as singleProjectDataJson } from '../data/singleProjectData';


interface SingleProjectContextType {
  singleProjectData: SingleProjectData;
  setSingleProjectData: Dispatch<SetStateAction<SingleProjectData>>;
}

const SingleProjectContext = createContext<SingleProjectContextType | undefined>(undefined);

interface SingleProjectProviderProps {
  children: ReactNode;
}

export const SingleProjectProvider = ({ children }: SingleProjectProviderProps): JSX.Element => {
  const [singleProjectData, setSingleProjectData] = useState<SingleProjectData>(singleProjectDataJson);

  return (
    <SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
