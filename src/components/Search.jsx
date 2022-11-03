import { useGlobalContext } from "./context"; 
import React, { useContext, useEffect, useState } from "react";

const Search = () => {
    const { search, setInput, setTags, setSort,next,setNext } = useGlobalContext();

   const nextClick =()=>{
    if(next == 50){
      setNext(0);
    }else{
setNext(Math.abs(next + 1));
    }
    
   }

     const prevClick = () => {
       if (next == 0) {
         setNext(50);
       } else {
         setNext(next - 1)
       }
       
     };

  const  inputChange = (e) =>{
   setInput(e.target.value)

  }
  const options = [ "comment"];
  const onOptionChangeHandler = (event) => {
    setTags( event.target.value);
  };
 
  const onOptionChangeHandler1 = (event) => {
    setSort(event.target.value);
  };
  return (
    <section className="container">
      <div className="search">
        <h1> Search Hacker News</h1>
        <form>
          <input type="text" placeholder="Search News" onChange={inputChange} />

          <div className="selection-boxs">
            <div>
              <label for="story1">Search </label>
              <select onChange={onOptionChangeHandler}>
                <option>story</option>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
            <div>
              <label for="story1">By </label>
              <select onChange={onOptionChangeHandler1}>
                <option value="">poplularity</option>
                <option value="_by_date">Date</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="next-prev">
        <button onClick={prevClick}>prev</button>
        <p>{Math.abs(next)} page</p>
        <button onClick={nextClick}>next</button>
      </div>

      <div className="search-content">
        {search.map((search) => {
          return (
            <div className="newsbox">
              <h2>{search.title}</h2>
              <h2>{search.story_title}</h2>
              <p style={{ wordWrap: "break-word" }}>{search.comment_text}</p>
              <div className="news-text">
                <p>{search.points} points</p>
                <p>
                  Author by <strong>{search.author}</strong>
                </p>
                <p>{search.created_at}</p>
                <p>command {search.num_comments}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
