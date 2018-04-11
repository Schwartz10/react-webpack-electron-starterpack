import React, {Component} from 'react';
import { ipcRenderer } from 'electron';

// a callback function that gets called when the event listener fires
const testResponse = (event, ...args) => {
  console.log('received response from main', ...args);
};

// a function to emit an event that the main process is listening for
const emitTestEvent = () => {
  ipcRenderer.send('test', 'emitted a message from the renderer process!')
};

class SampleComponent extends Component {
  componentDidMount(){
    // register an event listener on channel 'test-reply' - will fire when main process emits an event on this channel
    ipcRenderer.on('test-reply', testResponse);
  }

  componetWillUnmount(){
    // removes a single callback function from the test-reply channel when component unmounts
    ipcRenderer.removeListener('test-reply', testResponse);
  }

  render(){
    return(
      <div>
        <h5>Sample component with event emitters and listeners!</h5>
        <button onClick={emitTestEvent}>Emit an event!</button>
      </div>
    )
  }
}

export default SampleComponent;
