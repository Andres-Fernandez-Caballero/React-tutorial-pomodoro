import './App.css';
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Timer from "./pomodoro/timer.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Timer/>
      <Footer/>
    </div>
  );
}

export default App;
