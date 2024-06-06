// src/pages/blogs.tsx
import { useQuery } from "react-query";

const dummyPosts = [
  { id: 1, title: "Post 1", content: "Content for post 1" },
  { id: 2, title: "Post 2", content: "Content for post 2" },
  { id: 3, title: "Post 3", content: "Content for post 3" },
  { id: 4, title: "Post 4", content: "Content for post 4" },
];

const Blogs = () => {
  const { data: posts, isLoading } = useQuery("posts", () => {
    return Promise.resolve(dummyPosts);
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold my-8 text-center">Blogs</h1>
      <div className="grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
