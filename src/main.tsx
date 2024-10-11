import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import Root from "./Root.tsx";
import CourseList from "./components/courseList/CourseList";
import CourseDetails from "./components/courseDetails/CourseDetails";
import LessonDetails from "./components/lessonDetails/LessonDetails";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <CourseList />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "/courses/:id/modules/:moduleIndex/lessons/:lessonIndex",
        element: <LessonDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
