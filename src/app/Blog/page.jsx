import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/Components/PostCard/postCard'
import { getPosts } from '@/Components/Lib/data'
// const getData = async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if (!res) {
//     throw new Error("something went wrong");
    
//     // throw Error ('something went wrong')
//   }
//   return res.json()
// }

const Blogpage = async() => {
  const posts = await getPosts()
  // console.log(posts)
  return (
    <>
      <div className={styles.container}>
        {
          posts.map((post)=>(
          <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
          </div>
          ))
        }
      </div>
    </>
  )
}

export default Blogpage