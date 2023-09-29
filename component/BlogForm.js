// 'use client'
// import React, { useState } from 'react';

// const BlogForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     subheading: [''], // Start with an empty subheading array
//     description: [''], // Start with an empty description array
//     image: '',
//   });

//   const handleImageChange = (e) => {
//     const imageFile = e.target.files[0];
//     setFormData({
//       ...formData,
//       image: imageFile, // Store the selected file in the formData
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubheadingChange = (index, value) => {
//     const updatedSubheadings = [...formData.subheading];
//     updatedSubheadings[index] = value;
//     setFormData({
//       ...formData,
//       subheading: updatedSubheadings,
//     });
//   };

//   const handleDescriptionChange = (index, value) => {
//     const updatedDescriptions = [...formData.description];
//     updatedDescriptions[index] = value;
//     setFormData({
//       ...formData,
//       description: updatedDescriptions,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log('creading blog')

//     try {
//       const response = await fetch('https://register-bpwp.onrender.com/blog/new', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const message = await response.json();

//       console.log(message);

//       if (message.status == 201) {
//         // The request was successful, you can handle the response here if needed
//         console.log('Blog post created successfully');
//         // Optionally, you can redirect the user to a success page or perform other actions
//       } else {
//         // Handle errors here
//         console.error('Error creating blog post:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error creating blog post:', error);
//     }
//   };

//   const addSubheadingField = () => {
//     setFormData({
//       ...formData,
//       subheading: [...formData.subheading, ''],
//     });
//   };

//   const addDescriptionField = () => {
//     setFormData({
//       ...formData,
//       description: [...formData.description, ''],
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
//           Title:
//         </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded py-2 px-3"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2">Subheadings:</label>
//         {formData.subheading.map((subheading, index) => (
//           <input
//             type="text"
//             key={index}
//             value={subheading}
//             onChange={(e) => handleSubheadingChange(index, e.target.value)}
//             required
//             className="w-full border border-gray-300 rounded py-2 px-3 mb-2"
//           />
//         ))}
//         <button type="button" onClick={addSubheadingField} className="text-blue-500 hover:text-blue-700">
//           Add Subheading
//         </button>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2">Descriptions:</label>
//         {formData.description.map((description, index) => (
//           <textarea
//             key={index}
//             value={description}
//             onChange={(e) => handleDescriptionChange(index, e.target.value)}
//             required
//             className="w-full border border-gray-300 rounded py-2 px-3 mb-2"
//           />
//         ))}
//         <button type="button" onClick={addDescriptionField} className="text-blue-500 hover:text-blue-700">
//           Add Description
//         </button>
//       </div>
//       {/* <div className="mb-4">
//         <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
//           Image Upload:
//         </label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={handleImageChange}
//           accept="image/*" // Accept only image files
//           required
//           className="border border-gray-300 py-2 px-3 rounded"
//         />
//       </div> */}

// <div className="mb-4">
//     <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
//       Image Upload:
//     </label>
//     <input
//       type="file"
//       id="image"
//       name="image"
//       onChange={handleImageChange}
//       accept="image/*"
//       required
//       className="border border-gray-300 py-2 px-3 rounded"
//     />
//   </div>
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Create Blog
//       </button>
//     </form>
//   );
// };

// export default BlogForm;

"use client";
import React, { useEffect, useState } from "react";
import { BsTypeH1 } from "react-icons/bs";

const BlogForm = () => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const info = localStorage.getItem("userInfo");
    console.log(info);
    if (info?.name == "dhruvmehta382@gmail.com") {
      setFlag(true);
    }
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    subheading: [""], // Start with an empty subheading array
    description: [""], // Start with an empty description array
    image: "",
  });

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile, // Store the selected file in the formData
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubheadingChange = (index, value) => {
    const updatedSubheadings = [...formData.subheading];
    updatedSubheadings[index] = value;
    setFormData({
      ...formData,
      subheading: updatedSubheadings,
    });
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...formData.description];
    updatedDescriptions[index] = value;
    setFormData({
      ...formData,
      description: updatedDescriptions,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("creading blog");

    try {
      // const response = await fetch('http://localhost:4000/blog/new', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const message = await response.json();

      // console.log(message);

      const formdataa = new FormData();

      formdataa.append("title", formData.title);

      formdataa.append("description", formData.description);
      formdataa.append("image", formData.image);
      formdataa.append("subheading", formData.subheading);
      const response = await fetch(
        "https://register-bpwp.onrender.com/blog/new",
        {
          method: "POST",

          body: formdataa, // Use the FormData object as the request body
        }
      );
      const message = await response.json();

      console.log(message);
      if (message.success == true) {
        // The request was successful, you can handle the response here if needed
        console.log("Blog post created successfully");
        window.alert("created");
        // Optionally, you can redirect the user to a success page or perform other actions
      } else {
        // Handle errors here
        console.error("Error creating blog post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  const addSubheadingField = () => {
    setFormData({
      ...formData,
      subheading: [...formData.subheading, ""],
    });
  };

  const addDescriptionField = () => {
    setFormData({
      ...formData,
      description: [...formData.description, ""],
    });
  };

  return (
    flag ? <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
    
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Descriptions:
        </label>
        {formData.description.map((description, index) => (
          <textarea
            key={index}
            value={description}
            onChange={(e) => handleDescriptionChange(index, e.target.value)}
            required
            className="w-full border border-gray-300 rounded py-2 px-3 mb-2"
          />
        ))}
        <button
          type="button"
          onClick={addDescriptionField}
          className="text-blue-500 hover:text-blue-700"
        >
          Add Description
        </button> 
      </div>
      {/* <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Image Upload:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          accept="image/*" // Accept only image files
          required
          className="border border-gray-300 py-2 px-3 rounded"
        />
      </div> */}

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Image Upload:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          required
          className="border border-gray-300 py-2 px-3 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Blog
      </button>
    </form> : <h1>404</h1>
  );
};

export default BlogForm;
