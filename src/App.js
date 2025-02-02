import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import React, { Suspense, lazy } from "react";
import Blogs from "./components/Blogs";

const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Packages = lazy(() => import("./components/Packages"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const CollagePackages = lazy(() => import("./components/CollagePackages"));
const CorparatePackages = lazy(() => import("./components/CorparatePackages"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const SchoolPackage = lazy(() => import("./components/SchoolPackage"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const ChoseNewPassword = lazy(() => import("./components/ChoseNewPassword"));
const ResetComplete = lazy(() => import("./components/ResetComplete"));
const VerifyEmail = lazy(() => import("./components/VerifyEmail"));
const EducationalTour = lazy(() => import("./pages/EducationalTour"));
const Itinery = lazy(() => import("./pages/Itinery"));

function Main() {
  const location = useLocation();
  const noFooterRoutes = ["/login", "/register", "/reset-password"];
  return (
    <div>
      <Navbar />
      <Outlet />
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<div>Loading About Us...</div>}>
            <AboutUs />
          </Suspense>
        )
      },
      {
        path: "/school-packages",
        element: (
          <Suspense fallback={<div>Loading School Packages...</div>}>
            <SchoolPackage />
          </Suspense>
        )
      },
      {
        path: "/collage-packages",
        element: (
          <Suspense fallback={<div>Loading Collage Packages...</div>}>
            <CollagePackages />
          </Suspense>
        )
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={<div>Loading Blogs...</div>}>
            <Blogs />
          </Suspense>
        )
      },
      {
        path: "/corporate-packages",
        element: (
          <Suspense fallback={<div>Loading Corporate Packages...</div>}>
            <CorparatePackages />
          </Suspense>
        )
      },
      {
        path: "/contactus",
        element: (
          <Suspense fallback={<div>Loading Contact Us...</div>}>
            <ContactUs />
          </Suspense>
        )
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading Login...</div>}>
            <Login />
          </Suspense>
        )
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<div>Loading Register...</div>}>
            <Register />
          </Suspense>
        )
      },
      {
        path: "/reset-password",
        element: (
          <Suspense fallback={<div>Loading Reset Password...</div>}>
            <ResetPassword />
          </Suspense>
        )
      },
      {
        path: "/choosenew-password",
        element: (
          <Suspense fallback={<div>Loading Choose New Password...</div>}>
            <ChoseNewPassword />
          </Suspense>
        )
      },
      {
        path: "/reset-complete",
        element: (
          <Suspense fallback={<div>Loading Reset Complete...</div>}>
            <ResetComplete />
          </Suspense>
        )
      },
      {
        path: "/verify-email",
        element: (
          <Suspense fallback={<div>Loading Verify Email...</div>}>
            <VerifyEmail />
          </Suspense>
        )
      },
      {
        path: "/educational-tour",
        element: (
          <Suspense fallback={<div>Loading Educational Tour...</div>}>
            <EducationalTour />
          </Suspense>
        )
      },
      {
        path: "/itinery",
        element: (
          <Suspense fallback={<div>Loading Itinerary...</div>}>
            <Itinery />
          </Suspense>
        )
      }
    ],
    errorElement: <Error />
  }
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
