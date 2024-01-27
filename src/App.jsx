import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Taskboard from "./Task/Taskboard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <Taskboard />
      </div>
      <Footer />
    </>
  );
}
