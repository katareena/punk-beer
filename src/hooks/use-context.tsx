import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect
} from 'react';
import { toCamelCase } from '../utils/to-camel-case';
import { CatalogBeer } from '../types/beer';
import { SearchTitle, SearchUrl } from '../constants/constants';
import ImgNotAvalebl from '../assets/no-image-available.jpg';

type AppProviderProps = {
  children: JSX.Element,
};

type ContextProps = {
  searchTerm: string, 
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  beers: CatalogBeer[] | [], 
  setBeers: React.Dispatch<React.SetStateAction<CatalogBeer[] | []>>
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,   
  resultTitle: string, 
  setResultTitle: React.Dispatch<React.SetStateAction<string>>,
  isSearchActive: boolean,
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
};

const AppContext = createContext<ContextProps | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [ beers, setBeers ] = useState<CatalogBeer[] | []>([]);    
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isSearchActive, setIsSearchActive ] = useState<boolean>(false);
  const [ resultTitle, setResultTitle ] = useState<string>('');
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ inputValue, setInputValue ] = useState<string>('');

  const normalazeDescription = (description: string): string => {
    if(description.length === 0) {
      return 'No Description';
    }

    if(description.length > 140) {
      return description.substring(0, 140).trim() + '...';
    }

    return description;
  }

  const fetchData = useCallback(async() => {
    setIsLoading(true);

    try {
      const response = await fetch(`${SearchUrl.ByName}${searchTerm}`);
      const data = await response.json();

      if (data) {
        const newBeers: CatalogBeer[] = toCamelCase(data).map((beer: CatalogBeer) => {
          const {id, name, imageUrl, description} = beer;

          return {
            id: id,
            name: name,
            imageUrl: imageUrl ? imageUrl : ImgNotAvalebl, 
            description: normalazeDescription(description),
          }
        });

        setBeers(newBeers);

        if(data.length > 0){
          setResultTitle(SearchTitle.Results);
        } else {
          setResultTitle(SearchTitle.NoFound);
        }
      } else {
        setBeers([]);
        setResultTitle(SearchTitle.NoFound);
      }

      setIsLoading(false);
      
    } catch(error) {
      console.log(error);
      setIsLoading(false);
      setResultTitle(SearchTitle.Error);
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
      setIsSearchActive,
      currentPage,
      setCurrentPage,
      inputValue,
      setInputValue,
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
