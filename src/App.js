// import logo from './logo.svg';
import './App.css';
import React from 'react';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import RoutesPage from './components/RoutesPage';

/**
 * Here LandingPage is a default export and not a named export
 *  as it is export default from landing page
 */
function App() {
  return (
  <React.Fragment>
  <Router>
    <NavigationBar />
    
    {/* <Trial /> */}
    {/* <LandingPage /> */}
    <RoutesPage />
  </Router>
  {/* <Switch>
          <Route path="/pdf" component={PdfOperations} />
        </Switch> */}
</React.Fragment>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //     </header>
  //   </div>
  // );
}

export default App;
