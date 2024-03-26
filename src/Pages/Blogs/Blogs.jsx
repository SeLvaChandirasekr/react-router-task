import  { useEffect } from 'react'
import { useState } from 'react'
import BlogCard from '../../Components/BlogCard/BlogCard'

import {useParams} from 'react-router-dom'
import BillBoard from '../../Components/BillBoard/Billoard';

export default function Blogs() {

  const {category} =useParams();

 const [data,setData] =useState([]) 

 useEffect(() => {
    fetch('data.json').then((response)=>response.json())
    .then((result)=> {
      const blogs =result.data 
      if (category ==="all") {
    setData(blogs) 
      }else {
       setData(blogs.filter((blog) =>blog.tags.includes(category)))
      }
  
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, [category]);
  return (

   
    <div className='container'>
      <BillBoard/>
 <div className="blogs-listing-container">
 <h3 className="my-3"> Avalible Courses</h3>
        <div className="blogs-container">
        <div className="row" >
            {data.map((blog,index) =>(
              <div key={`${blog.name}-${index}`}   className="col-md-3"> 
              <BlogCard blog={blog} /> </div>  ))}
              {category}
  
    </div> 
    </div> 
    </div> 
    </div> 
 
  )
}
