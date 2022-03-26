import React, {useState, useEffect} from "react";
import "../blog.css";

const Post = ({post}) => {

  const [isDisabled, setIsDisable] = useState(false)
  const [isSelected, setIsSelected] = useState({
    selected: false,
    count:0,
  });
  


  useEffect(()=>{
    if (isSelected.count === 3)
     setIsDisable(true)
  },[isSelected])

 return (
   <div className="blog-post">
     <div className="blog-post-image">
      <img src={post.imageUrl} alt="img"
      width="250" height = "250"
      />
     </div>
     <div className="blog-post-details">
        <p>{post.updatedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <a href={post.blogLink}>READ MORE</a>
     </div>

     <button 
     disable={isDisabled}
     
     onClick={()=> {
      setIsSelected({
        selected: !isSelected.selected,
        count:isSelected +1,
      })

     }}
     style={{height:40, borderRadius:6, backgroundColor: 'orange'}}>
     {
       isSelected ? 'selected' : 'select'
     }
     
    

     </button>
   </div>
 )
}

export default Post;