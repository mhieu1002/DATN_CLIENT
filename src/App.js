import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import News from "./pages/News";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Scroll from "./components/Scroll/Scroll";
import Article from "./pages/Article";
import Write from "./pages/Write";
import ScrollToTop from "./hooks/useScrollToTop";
import Search from "./pages/Search";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/thong-bao",
        element: <Post />,
      },
      {
        path: "/tin-tuc",
        element: <News />,
      },
      {
        path: "/:title",
        element: <Article />,
      },

      {
        path: "/write",
        element: <Write />,
      },

      {
        path: "/tim-kiem/:keyword",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Scroll />
    </div>
  );
}

export default App;
