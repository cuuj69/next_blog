// next_blog/src/app/404.tsx
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </Layout>
  );
};

export default NotFoundPage;