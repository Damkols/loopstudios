import "./App.scss";
import { Navbar, Landing, VrPage, Creation, Footer } from "./components";
import gsap from "gsap";

function App() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      <Navbar />
      <Landing timeline={timeline} />
      <VrPage timeline={timeline} />
      <Creation />
      <Footer />
    </div>
  );
}

export default App;
