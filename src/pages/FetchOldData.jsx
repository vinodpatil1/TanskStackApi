import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/Api'

const FetchOldData = () => {

 const [myData, setMydata] = useState([]) 
 const [loading, setLoading] = useState(true);
 const [isError, setIserror] = useState(false);
 
 const getPostData = async() =>{
    try {
    let response = await fetchPosts()
       
      response.status === 200? setMydata(response.data) : [];
      setLoading(false)
      return response; 

    } catch (error) {
       console.log(error);
       setLoading(true)
       setIserror(true)
        
    }
 }

 useEffect(() => {
   getPostData()
 }, [])
 


 if(loading){
   return <h2>Loading....</h2>
 }

 if(isError){
   return <h2>Something went wrong</h2>
 }

  return (
  <section className='fetching py-10'>
      <div className="container">
        <div className="row">
           <h2 className='text-2xl py-5'>FetchOldData Fetching</h2>
           <div className="wrapper w-full">
             <ol>
              {myData?.map((curElem)=>{
                const {title, body} = curElem;
                return <li className='list w-full p-5 bg-gray-700 text-white mb-2' key={curElem.id}>
                    <p>{title}</p>
                    <p>{body}</p>
                </li>
              })}
              </ol>
           </div>
        </div>
      </div>
    </section>
  )
}

export default FetchOldData