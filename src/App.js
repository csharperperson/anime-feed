import React from 'react';
import './App.css';
import AuthWrapper from './components/authwrapper/AuthWrapper'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AuthWrapper />
      </div>
    )
  }
}

export default App;
