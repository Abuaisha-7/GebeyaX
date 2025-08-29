import React from "react";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import EditProductForm from "../../components/Admin/EditProductForm/EditProductForm";
// Import the useAuth hook
import { useAuth } from "../../context/AuthContext";
import Login from "../Login";

const EditProduct = () => {
  // Destructure the auth hook to get user and token
  const { user, isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      // User is logged in and is an admin, allow access to the page
      return (
        <div>
          <div className="w-full px-4 py-8 admin-pages my-20">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 lg:w-1/4 admin-left-side">
                <AdminMenu />
              </div>
              <div className="w-full md:w-3/4 lg:w-3/4 admin-right-side">
                <EditProductForm />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
        return (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold text-red-600">You are not authorized to access this page</h1>
        </div>
      );
    }
  } else {
   return (
      <div>
        <Login />
      </div>
    );
  }
};

export default EditProduct;
