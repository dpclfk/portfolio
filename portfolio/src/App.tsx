import "./App.css";
import Info from "./Component/Info";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Skill from "./Component/Skill";

const App = (): JSX.Element => {
  return (
    <div className="min-w-[60rem]">
      <div className="w-full min-h-screen bg-infocolor">
        <Info></Info>
      </div>
      <div className="w-full">
        <Portfolio></Portfolio>
      </div>
      <div className="w-full min-h-screen bg-bgcolor ">
        <Skill></Skill>
      </div>
      <div className="w-full py-12 bg-contactcolor">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
