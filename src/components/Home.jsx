import { BiExit, BiCalendarWeek, BiStopwatch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import LivePersianDate from "./LivePersianDate";
import Watch from "./Watch";
import { ThreeScene } from "./RaspberryModel";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  toast.warn("با موس کمی به سمت عقب اسکرول کنید");
  return (
    <main>
      <header>
        <BiExit
          size={"2rem"}
          color="red"
          cursor={"pointer"}
          onClick={() => navigate("/")}
        />
        <div>
          <BiCalendarWeek size={"2rem"} color="cyan" />
          <LivePersianDate />
        </div>
        <div>
          <BiStopwatch size={"2rem"} color="cyan" />
          <Watch />
        </div>
      </header>
      <section className="content-viewer">
        <div className="model-3D">
          <ThreeScene />
        </div>
        <div className="pages-icons"></div>
      </section>
    </main>
  );
};

export default Home;
