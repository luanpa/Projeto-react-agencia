import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TakeAction from "./components/TakeAction";
import Roda from "./components/Roda";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="bg-[#151515]">{/* deixa Nav preta */}
      {/* navbar */}
       <Navbar/>
      {/* Hero */ }
        <Hero/>
      {/* take action */}
        <TakeAction/>
      {/* Feedback */}
        <Feedback/>
      <Roda/>
    </div>
  );
}

export default App;
