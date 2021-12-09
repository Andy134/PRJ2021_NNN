import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useState } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import './App.css';
function App() {

  const [color, setColor] = useState(green['200'])

const props = {color, setColor}

  return (
    <div className="App">
      <header className="App-header">
        <Navbar {...props}/>
        <CountdownComponent {...props}/>
      </header>
    </div>
  );
}

export default App;

function Navbar(props){

  const buttons = [
    <Button style={{width: '120px', color: props.color, borderColor: props.color}} color="inherit" variant="text">NNN ?</Button>,
    <Button style={{width: '120px', color: props.color, borderColor: props.color}} color="inherit" variant="text">Colors</Button>,
    <Button style={{width: '120px', color: props.color, borderColor: props.color}} color="inherit" variant="text">Fonts</Button>,
  ];

  return <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  </>
}

function CountdownComponent(props) {

  var date1 = new Date("2021-12-01T00:00:00");
  var date2 = new Date();
  var difference_In_Time = date1.getTime() - date2.getTime();

  function renderer ({ days, hours, minutes, seconds, completed }){
    var timer = {
      fontSize: '10rem',
      color: props.color
    }
    const Completionist = () => <span>You are NNN Champion!</span>;
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <>
      <p><span style={timer} >{zeroPad(days)}D {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span></p>
      </>
      ;
    }
  };

  return <Countdown date={Date.now() + difference_In_Time} renderer={renderer}/>
}

