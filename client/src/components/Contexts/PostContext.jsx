import axios from 'axios';
import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react';

const PostContext = createContext();

function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/posts`)
      .then((res) => setPosts(res.data))
      .catch(console.log);
  }, []);

  const inputHandler = (e) => setInput(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BASEURL}/api/posts`, { input })
      .then((res) => setPosts((prev) => [...prev, res.data]))
      .catch(console.log);
  };
  const deleteHandler = useCallback((id) => {
    axios.delete(`${process.env.REACT_APP_BASEURL}/api/posts/${id}`)
      .then((res) => setPosts((prev) => prev.filter((el) => el.id !== id)))
      .catch(console.log);
  }, []);
  return (
    <PostContext.Provider value={{
      input,
      deleteHandler,
      submitHandler,
      inputHandler,
      posts,
    }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);

export default PostContextProvider;
