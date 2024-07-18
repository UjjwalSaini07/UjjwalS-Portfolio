import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="mt-3.5">
      <Outlet />
    </div>
  );
};

export default AppLayout;
