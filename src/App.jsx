import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <div className=" w-[1190px] mx-auto flex flex-col">
        <Navbar />
        <Body  />
      </div>
    </>
  );
}

export default App;
