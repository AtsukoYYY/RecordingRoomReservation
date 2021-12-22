import "./styles.css";
import { Calendar } from "./conpornents/Calendar";
import { ButtonAppBar } from "./conpornents/AppBar";

export default function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Calendar />
    </div>
  );
}
