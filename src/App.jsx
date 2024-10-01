import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const App = () => {
  // utillity functions
  const addJobSubmit = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  const deleteJob = async (jobId) => {
    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete job");
      }

      console.log(`Job with ID ${jobId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> loader={jobLoader}
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJobSubmit} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
