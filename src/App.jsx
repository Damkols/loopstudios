import "./App.scss";
import { Navbar, Landing, VrPage, Creation, Footer } from "./components";

function App() {
  // let timeline = gsap.timeline();
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <VrPage />
      <Creation />
      <Footer />
    </div>
  );
}

export default App;
