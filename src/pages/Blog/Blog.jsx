import React from 'react';

const Blog = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'A Reality Check: Surviving the First Year of University',
      content: 'The short film explores the challenges and emotional rollercoaster of the first year of university, highlighting the protagonist\'s journey from excitement to frustration and homesickness, ultimately finding solace in virtual connections with family.',
      link:'https://www.youtube.com/watch?v=O9uhekenxj0',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mt-10 mb-4 text-accent">Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-8 rounded border-2 border-accent p-4">
          <h2 className="text-xl font-semibold mb-2 text-secondary">{post.title}</h2>
          <p className="text-secondary">{post.content}</p>
           {/*<div className="relative max-w-full">*/}
          <a href={post.link} className="text-accent hover:underline">
                Click here to Watch the Video!
          </a>
          <iframe
            title={post.title}
            src={post.link}
            frameBorder="1"
            className="w-full h-auto my-4"
          ></iframe>
       {/*</div>*/}
        </div>
      ))}
    </div>
  );
};

export default Blog;
