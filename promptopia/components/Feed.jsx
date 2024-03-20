'use client';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((posts => (
        <PromptCard
        key={posts._id}
        post={posts}
        handleTagClick={handleTagClick}
        />
      )))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] =useState([])
  const handleSearchChange = (e) => {
    //get searchText 
    // setSearchText(e.target.value)

    // posts.map((item) => {
      
    //   const num = item.tag.indexOf(searchText)
      
    //   if(searchText === item.tag[num]){
    //     // return console.log(item)
    //     const PromptCardList = () => {
    //       return(
    //         <PromptCardList
    //         data={item}
    //         handleTagClick={() => {}}
    //         />
    //         )
    //       }
          
    //     }
    //   });
    //find a post that includes userInput 
    //display posts with userInput 
    
  }
 

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
  }

  fetchPosts();
  }, []);
  

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type="text" 
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange} 
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed