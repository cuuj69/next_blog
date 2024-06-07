// src/pages/blogs.tsx
// src/pages/blogs.tsx
import { useQuery } from "react-query";

const dummyPosts = [
  {
    id: 1,
    title: "From Garage to Unicorn: The Journey of Startup X",
    content:
      "Startup X was born in a small garage with a big dream. This is the story of how two college friends turned their passion into a billion-dollar company, defying odds and overcoming countless challenges along the way.",
    author: "John Doe",
    date: "May 15, 2023",
  },
  {
    id: 2,
    title: "Disrupting the Fashion Industry: The Rise of Sustainable Apparel",
    content:
      "In a world where fast fashion was the norm, Startup Y dared to challenge the status quo. Driven by a commitment to sustainability and ethical practices, they built a thriving apparel brand that has become a beacon for conscious consumers worldwide.",
    author: "Jane Smith",
    date: "April 20, 2023",
  },
  {
    id: 3,
    title: "Revolutionizing Agriculture: The Innovative Farming Techniques of Startup Z",
    content:
      "Startup Z saw the need for more efficient and eco-friendly farming methods. Through cutting-edge technology and a deep understanding of sustainable practices, they pioneered innovative techniques that have transformed the agriculture industry.",
    author: "Alex Johnson",
    date: "March 10, 2023",
  },
  {
    id: 4,
    title: "From Local Bakery to National Brand: The Sweet Success of Startup A",
    content:
      "What started as a small family-owned bakery quickly became a beloved national brand. Startup A's story is one of passion, perseverance, and a commitment to quality that has won the hearts (and taste buds) of millions across the country.",
    author: "Emily Davis",
    date: "February 25, 2023",
  },
  {
    id: 5,
    title: "Reimagining Healthcare: Startup B's Innovative Approach to Wellness",
    content:
      "Startup B recognized the need for a more holistic and personalized approach to healthcare. Through their groundbreaking wellness platform and a team of dedicated experts, they are transforming the way we think about our health and well-being.",
    author: "Michael Brown",
    date: "January 18, 2023",
  },
];

const Blogs = () => {
  const { data: posts, isLoading } = useQuery("posts", () => {
    return Promise.resolve(dummyPosts);
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-10 min-h-screen">
      <h1 className="text-4xl font-bold my-8 text-center text-orange-600">
        Startup Triumphs
      </h1>
      <div className="grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-orange-600 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-2">
              By <span className="font-semibold">{post.author}</span> on{" "}
              {post.date}
            </p>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
