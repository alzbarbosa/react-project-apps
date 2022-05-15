import {useState,useEffect} from 'react'

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState()


  const fetchCountries = async (url) => {
      setIsLoading(true)
    try {
      const response = await fetch(url)

      if (!response.ok) {
       throw new Error(response.status);
  }
      const data = await response.json()
      if (!data || !data.length) {
    throw new Error("Invalid data received.");
  }
  
      setData(data)
      setIsLoading(false)
      setError(false)
  
     } catch(error) {
       console.log(`There has been a problem with your fetch operation: ${error}`)
       setError(error)
       setIsLoading(false)
     }
    
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountries(url);
  }, [url]);
  
  return { isLoading, data, error };
}
 
export default useFetch;
