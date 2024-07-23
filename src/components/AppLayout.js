import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="mt-1.1">
      <Outlet />
    </div>
  );
};

export default AppLayout;
