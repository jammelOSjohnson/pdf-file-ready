import ActProvider from "../Context/RoadTrafficActContext";
import Logo from "./Logo";
import TrafficAct from "./TrafficAct";

function App() {
  return (
    <>
      <Logo />
      <TrafficAct />
    </>
  );
}

export default function () {
  return (
    <ActProvider>
      <App />
    </ActProvider>
  );
}
