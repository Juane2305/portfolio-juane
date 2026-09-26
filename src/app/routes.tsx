import { redirect, type RouteObject } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "@/features/home/HomePage";
import { ProjectPage } from "@/features/projects/ProjectPage";
import { getProject } from "@/features/projects/projects.data";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "proyectos/:slug",
        element: <ProjectPage />,
        loader: ({ params }) =>
          getProject(params.slug) ? null : redirect("/"),
      },
      {
        path: "*",
        loader: () => redirect("/"),
        element: null,
      },
    ],
  },
];
