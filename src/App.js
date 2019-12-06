import React from 'react';

// import './components/Nav/nav.css';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import 'tachyons';
import TagList from './components/TagList/TagList';
import AddTag from './components/AddTag/AddTag';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "dashboard"
    }
  }
  onRouteChange = (link) => {
    this.setState({
      page: link
    });
  }
  render() {
    const page = this.state.page;
    if (page === "dashboard") {
      return (
        <div className="App">
          <Nav page={page} onRouteChange={this.onRouteChange} />
          <div className="right-div"><Dashboard /></div>

        </div>
      );
    }
    else if (page === "add") {
      return (
        <div className="App">
          <Nav page={page} onRouteChange={this.onRouteChange} />
          <div className="right-div"><AddTag /></div>
        </div>
      );
    }
    else if (page === "list") {
      return (
        <div className="App">
          <Nav page={page} onRouteChange={this.onRouteChange} />
          <div className="right-div"><TagList /></div>
        </div>
      );
    }


    return (
      <div className="App">
        <Nav />
        <Dashboard />
      </div>
    );
  }

}


export default App;
