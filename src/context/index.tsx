/* eslint-disable @typescript-eslint/no-explicit-any */
import  {createContext, useRef} from "react";


export const contextApi = createContext({} as any);
const ContextApp = ({children}:any) => {

  const skills = useRef<HTMLElement | null>(null)
  const information = useRef<HTMLElement | null>(null)
  const company = useRef<HTMLElement | null>(null)
  const contactUs = useRef<HTMLElement | null>(null)

  const value = {
    skills,
    information,
    company,
    contactUs,
  };
  return (
    <contextApi.Provider value={value}>
      {children}
    </contextApi.Provider>
  );
};
export default ContextApp;
