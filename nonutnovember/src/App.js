import Countdown, { zeroPad } from 'react-countdown';
import './App.css';

function App() {

  var date1 = new Date("2021-12-01T00:00:00");
  var date2 = new Date();
  var difference_In_Time = date1.getTime() - date2.getTime();

  

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Countdown date={Date.now() + difference_In_Time} renderer={renderer}/>
      </header>
    </div>
  );
}

export default App;

function Navbar(){
  return <>Nav</>
}

function renderer ({ days, hours, minutes, seconds, completed }){
  const Completionist = () => <span>You are NNN Champion!</span>;
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <>
    <p><span className="timer">{zeroPad(days)}D {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span></p>
    </>
    ;
  }
};