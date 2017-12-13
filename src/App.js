import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './components/Navbar';
import Roster from './components/Roster';

class App extends Component {

  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <Navbar />
       
        <Header />
        <p className="App-intro">
            Could it be any more (React)ive ?
        </p>
        <Main />

      </div>
      </MuiThemeProvider>
    );
  }
}
/*
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>

 <FlatButton label="Home" style={{color: 'white'}} />
                <FlatButton label="Schedule" style={{color: 'white'}} />
                <FlatButton label="Roster" style={{color: 'white',marginRight: '20px'}} />
 */
export default App;

// const NavButton = withRouter(({ history }) => (
//        <FlatButton label="{props.label}" onClick={() => {
//           history.push(props.to)
//         }}/>
//   ))

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
     
    </div>
  )

//   const Roster = () => (
//     <div>
//       <h2>This is a roster page!</h2>
//     </div>
//   )

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

