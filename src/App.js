import "./App.css";
import Checking from "./Components/Checking/Checking";
import Menu from "./Components/Menu/Menu";
import Message from "./Components/Message/Message";
import Method from "./Components/Method/Method";
import PaymentMethod from "./Components/PaymentMethod/PaymentMethod";

const tg = window.Telegram.WebApp;

tg.expand();  

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      {/* <PaymentMethod/> */}
      {/* <Method/> */}
      <Message/>
      {/* <Checking/> */}
    </div>
  );
}

export default App;
