import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useNavigate,createSearchParams } from 'react-router-dom'
import { callApi } from '../utils/CallApi';
const Search = () => {
  const[suggestion,setsuggestion] =useState(null);
  const[searchterm,setsearchterm]=useState("")
  const[category,setcategory]=useState("All");
  const navigate=useNavigate();
  const getsuggestion = () => { 
    callApi('data/suggestions.json')
    .then((suggestionResults)=>{
      setsuggestion(suggestionResults);
    })
   }
   const onhandlesubmit = (e) => { 
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchterm: `${searchterm}`,
      })}`,
    });

    setsearchterm("");
    setcategory("All");
    }
  useEffect(()=>{
       getsuggestion();
  },[]);
  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select className='p-2 bg-gray-300 text-black border text-xs xl:text-sm' onChange={(e)=>setcategory(e.target.value)}>
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
            </select>
        <input  className="flex grow items-center h-[100%] rounded-l text-black"
          type="text" value={searchterm} onChange={(e)=>setsearchterm(e.target.value)}/>
          <button className='w-[45px]' onClick={onhandlesubmit}>
            <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'/>
          </button>
          </div>
          {suggestion && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestion
            .filter((suggestions) => {
              const currentSearchTerm = searchterm.toLowerCase();
              const title = suggestions.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestions) => (
              <div
                key={suggestions.id}
                onClick={() => setsearchterm(suggestions.title)}
              >
                {suggestions.title}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Search