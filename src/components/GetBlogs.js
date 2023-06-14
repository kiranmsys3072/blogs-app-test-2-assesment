import React,{useEffect,useState} from 'react'

const GetBlogs = () => {
  const [posts,setPosts]=useState([])
  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json()).then((data)=>{
      setPosts([
        ...posts,data
      ])
    })

  },[])

  return (
  
    <div>
      {
        posts.map((post) => {
          return <div>
            <h1 key={post.id}>{post.title}</h1>
          </div>

        })
      }
    </div>
  )
}

export default GetBlogs