import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDetailsPosts } from '../api/Api';

const FetchRquerydataPage = () => {
    const {id} = useParams()

    const navig =  useNavigate()

    const handleBack = () =>{
        navig(-1)
    }


 const {data, isLoading, error} =  useQuery({
    queryKey: ['posts', id],
    queryFn : ()=> fetchDetailsPosts(id)

 })    

 if(isLoading){
   return <h2>Loading....</h2>
 }


  if(error){
   return <h2>Error : {error.message || "Something went wrong"}</h2>
 }
 


  return (
    <>
    <section className='fetching py-10'>
      <div className="container">
        <div className="row">
          <div className="btngroup">
             <button className='px-3 py-2 cursor-pointer bg-amber-950 text-white' onClick={handleBack}>Go Back</button>
          </div>
           <h2 className='text-2xl py-2'>Post ID Number {id} page</h2>
           <div className="wrapper w-full">
              <ol>
               <li className='list w-full p-5 bg-gray-700 text-white mb-2'>
                  <p>{data.id}</p>
                  <p>{data.title}</p>
                  <p>{data.body}</p>
               </li>
              </ol>
           </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FetchRquerydataPage;