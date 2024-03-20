import React, {useState} from "react";
import { NavLink } from 'react-router-dom'
import SearchBarjson from './SearchBarjson'
import abc from "./abc";
import './style.css';


function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(abc.year)
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>

        
        <div className='project-card'>
        <img src={props.imgsrc} alt='image'/>
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>
        <p>{props.author}</p>
        <p>{props.publishedYear}</p>
        <div className='pro-btns'>
                    <a to="url.com" className="btn">Source</a>
                </div>
        </div>
        </div>


      </div>
    </>
  )
}

export default SearchBar;
