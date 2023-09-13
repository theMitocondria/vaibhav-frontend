'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
// import BlogPost from '../../components/BlogPost';

const BlogPost = ({ title, subheading, description, image }) => {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-2">{subheading}</p>
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />
      {description.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
};


const BlogPage = () => {
  const router = useRouter();
//   const { slug } = router.query;

  // Replace this with your actual data fetching logic
  const blogData = {
    title: 'Sample Blog Post',
    subheading: 'This is a sample subheading',
    description: ['This is the first paragraph of the blog post.', 'This is the second paragraph.'],
    image: 'https://placekitten.com/800/600', // Replace with your image URL
  };

  return <BlogPost {...blogData} />;
};

export default BlogPage;
