import MasterLayout from "../components/layouts/MasterLayout";
import Home from "../components/pages/home/Home";

export const publicRoutes = [
  {
    path: "*",
    element: <MasterLayout child={<Home />} />,
  },
  {
    path: "/",
    element: <MasterLayout child={<Home />} />,
  },
];

export const privateRoutes = [
  {
    path: "*",
    element: <MasterLayout child={<Home />} />,
  },
  {
    path: "/",
    element: <MasterLayout child={<Home />} />,
  },
];
