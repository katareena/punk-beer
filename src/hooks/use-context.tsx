import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect
} from 'react';
import { toCamelCase } from '../utils/to-camel-case';
import { Beer } from '../types/beer';
import { URL, SearchTitle } from '../constants/constants';

type AppProviderProps = {
  children: JSX.Element,
};

type ContextProps = {
  searchTerm: string, 
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  beers: Beer[] | [], 
  setBeers: React.Dispatch<React.SetStateAction<Beer[] | []>>
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,   
  resultTitle: string, 
  setResultTitle: React.Dispatch<React.SetStateAction<string>>,
  isSearchActive: boolean,
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>,
};

const AppContext = createContext<ContextProps | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [beers, setBeers] = useState<Beer[] | []>([]);    
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [resultTitle, setResultTitle] = useState<string>('');

  console.log(beers);
  
  const fetchData = useCallback(async() => {
    setIsLoading(true);

    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();

      if (data) {
        setBeers(toCamelCase(data));

        if(data.length > 0){
          setResultTitle(SearchTitle.Results);
        } else {
          setResultTitle(SearchTitle.NoFound)
        }
      } else {
        setBeers([]);
        setResultTitle(SearchTitle.NoFound);
      }

      setIsLoading(false);
      
    } catch(error) {
      console.log(error);
      setIsLoading(false);
    }

  }, [searchTerm]);  

  useEffect(() => {
    isSearchActive && fetchData();
  }, [isSearchActive, fetchData]);

  return (
    <AppContext.Provider value = {{
      searchTerm,
      setSearchTerm,
      beers,
      setBeers,
      isLoading,
      setIsLoading,
      resultTitle,
      setResultTitle,
      isSearchActive,
      setIsSearchActive
    }}>
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('AppContext must be inside a Provider with a value');
  }
  return context;
}

export { AppContext, AppProvider };
