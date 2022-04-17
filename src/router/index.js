import SecondPage from "../pages/secondPage";
import Index from "../pages";
import FirstPage from "../pages/firstPage";

export const Nav = {
  home: "/",
  firstPage: "/first-page",
  secondPage: "/second-page",
};

export const Routing = [
  {
    path: Nav.home,
    element: <Index />,
  },
  {
    path: Nav.firstPage,
    element: <FirstPage />,
  },
  {
    path: Nav.secondPage,
    element: <SecondPage />,
  },
];
