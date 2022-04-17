import SecondPage from "../pages/secondPage";
import Index from "../pages";
import FirstPage from "../pages/firstPage";

export const Routing = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/first-page",
    element: <FirstPage />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
];
