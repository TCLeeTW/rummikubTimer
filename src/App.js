import React,{useState} from "react";
import CountDown from "./sections/CountDown";
import Header from "./sections/Header";
import SetTime from "./sections/SetTime";

function App() {
  const [time, setTime] = useState(120);

  function handleTimeChange(newTime) {
    setTime(newTime);
  }
  return (
    <div className="background">
      <Header/>
      <SetTime 
      onTimeChange={handleTimeChange}/>
      <CountDown 
      time={time}/>
    </div>
  );
}

export default App;
