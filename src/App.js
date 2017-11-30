import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {

    handleClick(id,e){
        console.log('id', id, e);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Main />
        <button onClick={this.handleClick.bind(this,25)}>
        Click me
        </button>
      </div>
    );
  }
}

export default App;

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/>
      </Switch>
    </main>
  )

const Schedule = () => (
    <div className="Left-align">
      <ul>
        <li>6/5 @ Evergreens</li>
        <li>6/8 vs Kickers</li>
        <li>6/14 @ United</li>
      </ul>
    </div>
  )
  const Home = () => (
    <div>
      <h1>This is the homepage!</h1>
    </div>
  )

  const Roster = () => (
    <div>
      <h2>This is a roster page!</h2>
    </div>
  )

  const Header = () => (
    <header>
      <nav className="Left-align">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/roster'>Roster</Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
        </ul>
      </nav>
    </header>
  )

