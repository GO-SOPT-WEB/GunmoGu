import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import WeatherForm from "../components/WeatherForm";

const Home = () => {
  return (
    <PageLayout>
      <WeatherForm></WeatherForm>
      <Outlet></Outlet>
    </PageLayout>
  );
};

export default Home;
