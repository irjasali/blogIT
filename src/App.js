import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ListOfPost from './components/ListOfPost';
import getAllPosts from './resources/posts';
import FeaturedPost from './components/FeaturedPost';
import CreatePost from './components/CreatePost'


function App() {

  const [isCV, setIsCV] = useState(false)
  const [allPost, setAllPost] =useState(getAllPosts())

  const handleOnGuardar = post =>{
    setAllPost([...allPost, post])
    setIsCV(false)
  }

  return (
    <div className="App">
      <NavBar onPress={() => {
        setIsCV(true)
      }}

      />
      {
        isCV ? <CreatePost
          onPress={() => setIsCV(false)}
          onGuardar={handleOnGuardar}
        /> :
          <>
            <FeaturedPost updatedAt={"May 13 2021"} height={500} width={500} title={"The Internet of Medical Things: The Healthcare Revolution"}
              content={"Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."}
              image={"https://itjuana.com/wp-content/uploads/2021/05/IoMT-The-Health-Revolution-image.png"} />

            <ListOfPost posts={allPost} />

          </>
      }



    </div>
  );
}

export default App;
