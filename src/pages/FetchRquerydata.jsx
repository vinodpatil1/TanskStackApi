
import { NavLink } from 'react-router-dom'
import { fetchPosts } from '../api/Api'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const FetchRquerydata = () => {

// pagination state
const [pageNumber, setPageNumber] = useState(0)


 const {data, isLoading, error} =  useQuery({
    queryKey: ['posts', pageNumber],
    queryFn : () => fetchPosts(pageNumber),
    placeholderData : keepPreviousData,
  })


 if(isLoading){
   return <h2>Loading....</h2>
 }


  if(error){
   return <h2>Error : {error.message || "Something went wrong"}</h2>
 }




 

  return (
  <section className='fetching py-10'>
      <div className="container">
        <div className="row">
           <h2 className='text-2xl py-2'>FetchRquerydata Fetching</h2>
           <div className="wrapper w-full">
             <ol>
              {data?.map((curElem)=>{
                const {id, title, body} = curElem;
                return <li className='list w-full p-5 bg-gray-700 text-white mb-2' key={curElem.id}>
                  <NavLink to={`/fetchRquerydata/${id}`}>
                     <p className='pb-2'>{id}</p>
                     <p className='pb-2'>{title}</p>
                    <p>{body}</p>
                    </NavLink>
                </li>
          
              })}
              </ol>
           </div>
           <div className="pagination flex justify-center items-center">
              <button className='py-2 px-3 bg-amber-700 text-white' disabled={pageNumber <= 0? true : false} onClick={()=> setPageNumber((preval)=> preval - 3 )}>Prev</button>
                 <h1 className='py-2 px-3 text-3xl text-gray-800 m-2'>{(pageNumber / 3 ) + 1}</h1>
              <button className='py-2 px-3 bg-amber-700 text-white' onClick={()=> setPageNumber((preval)=> preval + 3 )}>Next</button>
           </div>
        </div>
      </div>
    </section>
  )
}

export default FetchRquerydata