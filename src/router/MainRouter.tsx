import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/common/LayOut";
import ProfileHistoryPage from "../pages/ProfileHistoryPage";
import EditProfilePage from "../pages/EditProfilePage";
import ViewProfilePage from "../pages/ViewProfilePage";
import HomePage from "../pages/HomePage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        index: true,
        path: "/edit-profile",
        element: <EditProfilePage />,
      },
      {
        index: true,
        path: "/profile",
        element: <ViewProfilePage />,
      },
      {
        index: true,
        path: "/history",
        element: <ProfileHistoryPage />,
      },
    ],
  },
]);
