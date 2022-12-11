import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TakeAction from "./components/TakeAction";


function App() {
  return (
    <div className="bg-[#151515]">{/* deixa Nav preta */}
      {/* navbar */}
       <Navbar/>
      {/* Hero */ }
        <Hero/>
      {/* take action */}
        <TakeAction/>
      {/* Services */}
      <div className="h-screen"></div>{/* deixa home preta */}
    </div>
  );
}

export default App;
