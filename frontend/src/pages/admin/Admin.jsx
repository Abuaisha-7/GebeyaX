
// Import the auth hook
import { useAuth } from "../../context/AuthContext";
// Import the Login component
import LoginForm from "../Login";
// Import the admin menu component
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
// import our services component
import AdminDashboard from '../../components/Admin/AdminDashboard/AdminDashboard';

const Admin = () => {
  // Destructure the auth hook
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <div className="w-full px-4 py-8 admin-pages">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 lg:w-1/4 admin-left-side">
                <AdminMenu />
              </div>
              <div className="w-full md:w-3/4 lg:w-3/4 admin-right-side">
                <AdminDashboard />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-red-600">You are not authorized to access this page</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
};

export default Admin;
