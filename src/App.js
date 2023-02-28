import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyInput from "./components/UI/Button/Input/MyInput";
import MyButton from "./components/UI/Button/MyButton";
import './styles/App.css';



function App() {
const[posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'description'},
    {id: 2, title: 'JavaScript2', body: 'description'},
    {id: 3, title: 'JavaScript3', body: 'description'},
])

const [title, setTitle] = useState('')
const [body, setBody] = useState('')



const addNewPost = (e) => {
  e.preventDefault()
  const newPost = {
    id: Date.now(),
    title,
    body
  }
  setPosts([...posts, newPost])

}


  return (
    <div className="App"> 
    <form>

     <MyInput
     value={title}
     onChange={e => setTitle(e.target.value)}
     type="text" 
     placeholder="Название поста"
     />

     <MyInput 
     value={body}
     onChange={e => setBody(e.target.value)}
     type="text" 
     placeholder="Описание поста" />
     <MyButton onClick = {addNewPost}>Создать пост</MyButton>
    </form>
       <PostList posts={posts} title={'Посты про JS'}/>
    </div>)
}

export default App;
