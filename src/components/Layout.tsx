// next_blog/src/components/Layout.tsx
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-4 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
