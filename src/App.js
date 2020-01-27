import React from 'react';
import RequestLog from './components/RequestLog/RequestLog'

// import './components/Nav/nav.css';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import 'tachyons';
import TagList from './components/TagList/TagList';
import AddTag from './components/AddTag/AddTag';
import './App.css';
import { Switch, Route } from 'react-router-dom';

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
    // const page = this.state.page;
    // if (page === "dashboard") {
    //   return (
    //     <div className="App">
    //       <Nav page={page} onRouteChange={this.onRouteChange} />
    //       <div className="right-div"><Dashboard /></div>

    //     </div>
    //   );
    // }
    // else if (page === "add") {
    //   return (
    //     <div className="App">
    //       <Nav page={page} onRouteChange={this.onRouteChange} />
    //       <div className="right-div"><AddTag /></div>
    //     </div>
    //   );
    // }
    // else if (page === "list") {
    //   return (
    //     <div className="App">
    //       <Nav page={page} onRouteChange={this.onRouteChange} />
    //       <div className="right-div"><TagList /></div>
    //     </div>
    //   );
    // }

    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add" component={AddTag} />
          <Route exact path="/list" component={TagList} />
          <Route exact path="/requestLog" component={RequestLog} />
          {/* <Route exact path="/shop" component={Shop} /> */}
          {/* <Route exact path="/checkout" component={Checkout} /> */}
          {/* <Route path="/shop/:category" component={Category} /> */}
          {/* <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/dashboard' />) : (<LoginRegister />)} /> */}
        </Switch>
      </div>
    );
  }

}


export default App;
