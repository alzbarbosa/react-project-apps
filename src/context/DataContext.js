import { createContext, useState, useEffect} from "react";
import useFetch from "../hooks/useFetch";

let url = "https://restcountries.com/v2/all"

const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [searchName, setSearchName] = useState('all')
    url = searchName === "all"? "https://restcountries.com/v2/all" : `https://restcountries.com/v2/${searchName}`
    const {isLoading, data: countries, error} = useFetch(url)


    return (
        <DataContext.Provider value={{
            isLoading, countries, searchName, setSearchName, error
        }}>
            {children}
        </DataContext.Provider>
    )
}


export { DataContext, DataProvider }

