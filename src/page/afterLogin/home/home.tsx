import {Outlet} from "react-router-dom";
import AfterLoginLayout from "../../../components/afterLoginLayout";

const Home = () => {
  return (
    <AfterLoginLayout>
      <Outlet />
    </AfterLoginLayout>
  );
};
export default Home;
