






import React,{useEffect,useState} from 'react'

const GetBlogs = () => {
  const [posts,setPosts]=useState([])
  useEffect(()=>{


    fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
		  title: new_title,
		  body: new_body,
		  userId: userid
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
	  })
	  .then(response => response.json())
	  .then(json => console.log(json))
}










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







