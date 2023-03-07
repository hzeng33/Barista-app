import "./App.css";
import BaristaForm from "./Components/baristaForm";
import coffeLogo from "./assets/coffee-logo.png";

function App() {
  return (
    <div>
      <div className="title-container">
        <img className="cofee-logo" src={coffeLogo} height={100} />
        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  );
}

export default App;
