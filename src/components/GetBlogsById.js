import React,{useEffect,useState} from 'react'

const GetBlogsById = () => {
  const [posts,setPost]=useState([])
  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json()).then((data)=>{
     setPost(data)
    })

  },[])

  return (
  
    <div>
      {
        posts.map((post) => {
          return <div>
           <h1>{post.title}</h1>
          </div>

        })
      }
    </div>
  )
}

export default GetBlogsById