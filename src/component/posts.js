import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addpost ,deletepost,updatepost} from '../redux/posteSlice';
function Posts() {
    const [title, setTitle ]=useState("");
    const [description, setdescription ]=useState("");
    const [updatedTitle, setUpdatedTitle ]=useState("");
    const [updatedDescription, setUpdateddescription ]=useState("");

    const [isedit, setIsedit]=useState(false);
    const [id ,setId]=useState(null);
    const posts=useSelector((state)=> state.posts.items)
    const dispatch=useDispatch()
  return (
    <div>
    <h2> CURD App Redux ToolKit</h2>
    <div className='form'>
        <input type='text' value={title}
        placeholder='Enter post Title'
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input type='text' value={description}
        placeholder='Enter post Desc'
        onChange={(e)=>setdescription(e.target.value)}
        />
        <button onClick={()=>{
          if(title =="" && description==""){
            setTitle("");
            setdescription("");

          }else {
            dispatch(addpost({id:posts.length + 1,title,description}))
            setTitle("");
            setdescription("");
        }}}>Add Post</button>
    </div>
    <div className='posts'>
        {posts.length > 0 ? posts.map(post =><div key={post.id} className='post'>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <button onClick={()=>{
          setIsedit(true);
          setId(post.id);
        }}>Edit</button>
        <button onClick={()=> dispatch(deletepost(post.id))}>Delete</button>
        <br/>
        {isedit && id == post.id && (
          <>
          <input type='text'
          placeholder='updated Title'
          onChange={(e)=> setUpdatedTitle(e.target.value)}
          />
          <input type='text' 
          placeholder='updated Desc'
          onChange={(e)=> setUpdateddescription(e.target.value)}
          />
          <button onClick={()=> {
            if(updatedTitle=="" && updatedDescription==""){
              setUpdatedTitle("");
              setUpdateddescription("");

            }else{
              dispatch(updatepost({id:post.id, title:updatedTitle, description:updatedDescription}))
        setIsedit(false)
        }}}>Updated</button>
          </>
        )

        }

    </div>): 'There is no post'}
    </div>
    </div>
  )
}

export default Posts
