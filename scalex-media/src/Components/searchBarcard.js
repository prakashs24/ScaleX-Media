import React from 'react'
import SearchBar from './searchBar'
import SearchBarjson from './SearchBarjson'
import abc from './abc'
function searchBarcard() {
  console.log(val.title)
  let name="prakashs"
  return (
<div className='work-container'>
    <div className='project-container'>
    {abc.map((val,id)=>{
        return(
            <SearchBar
            key={id}
            imgsrc={val.imageLink}
            title={val.title}
            publishedYear={val.year}
            author={val.author}
            />
        )
    })}
    </div>
    </div>
  )
 
}

export default searchBarcard
