import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const Context = React.createContext();




//http://hn.algolia.com/api/v1/?dateRange=all&page=0&prefix=true&query=&sort=byPopularity&type=story




const AppProvider = ({children}) =>{
const [search,setSearch] =useState([])
const [input,setInput] =useState('')
const[tags,setTags] =useState('')
const [sort,setSort] = useState('')
const[next,setNext] = useState(0)


// fetchapi 
    const fetchApi = async (url) => {
       

       try{
        const { data } = await axios(url);
        if(data){
            setSearch(data.hits)
            console.log(data.hits)
        }

       }catch(error){
        console.log(error)
       }
    };
   
     useEffect(() => {
        fetchApi(
          `http://hn.algolia.com/api/v1/search${sort}?query=${input}&tags=${tags}&page=${next}`
        );
     }, [input,tags,sort,next])
 
   


    return (
      <Context.Provider value={{ search, setInput, setTags,setSort ,setNext,next}}>
        {children}
      </Context.Provider>
    );
}

export const useGlobalContext = () => {
  return useContext(Context);
};

export { AppProvider, Context };