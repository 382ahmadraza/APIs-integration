// "use client"
import Home from '@/posts';
import React, { useState } from 'react';

const PostExample = () => {
  // const [response, setResponse] = useState(null);
  // const [data, setData] = useState({
  //   title: '',
  //   body: '',
  //   userId: 1,
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
        
  //   });
  //   console.log(data);

  //     const jsonResponse = await res.json();
  //     setResponse(jsonResponse);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div><Home initialTodos={[]}/></div>
    // <div>
    //   <h1>Post Data Example</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Title</label>
    //       <input
    //         type="text"
    //         name="title"
    //         value={data.title}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Body</label>
    //       <textarea
    //         name="body"
    //         value={data.body}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>

    //   {response && (
    //     <div>
    //       <h2>Response from API:</h2>
    //       <pre>{JSON.stringify(response, null, 2)}</pre>
    //     </div>
    //   )}
    // </div>
  );
};

export default PostExample;
