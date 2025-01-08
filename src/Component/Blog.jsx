import React from "react";

const blogs = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/ae/3a/2a/ae3a2a7d506c02c52e6ebe22d77f4344.jpg",
    category: "Travel",
    title: "Discover Hidden Gems Around the World",
    description:
      "Explore some of the most stunning and lesser-known destinations to make your travel experiences unforgettable.",
  },
  {
    id: 2,
    image: "https://content.jdmagicbox.com/comp/def_content/motorcycle-dealers/shutterstock-263968865-motorcycle-dealers-15-hq380.jpg",
    category: "Lifestyle",
    title: "5 Tips for a Healthier and Happier Life",
    description:
      "Learn how to improve your daily habits and find balance in your lifestyle for better overall well-being.",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/64/a7/ff/64a7ff325d07cd25fea25f3083d0ca0a.jpg",
    category: "Technology",
    title: "The Future of AI in Everyday Life",
    description:
      "Discover how artificial intelligence is transforming industries and changing the way we live and work.",
  }
];

const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-black rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="h-72 w-full object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <span className="text-yellow-400 text-sm font-semibold mb-2">
              {blog.category}
            </span>
            <h2 className="text-white text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
            <a
              href="#"
              className="text-yellow-400 text-sm font-semibold flex items-center hover:underline"
            >
              Read More <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
