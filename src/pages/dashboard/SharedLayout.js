import { Outlet } from "react-router-dom";
import { Navbar, SmallSiderbar, BigSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

function SharedLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSiderbar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayout;
