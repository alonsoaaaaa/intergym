import MainBlock from "@/components/main-block";
import InstalationsBlock from "../components/instalations-block";
import EnviromentBlock from "../components/enviroment-block";
import PromotionsBlock from "../components/promotions-block";
import NavBar from "@/components/nav-bar";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-0 py-0 bg-gray-950">
      <NavBar />
      <div className="flex flex-col">
        <MainBlock />
        <InstalationsBlock />
        <EnviromentBlock />
        <PromotionsBlock />
      </div>
    </div>
  );
};

export default LandingPage;
