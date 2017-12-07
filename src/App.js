import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link, withRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import Roster from './Roster';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
      }
    handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
      <div>
      <AppBar className="navbar" style={{textAlign:'left',backgroundColor: '#424242'}} zDepth={3}
            title={'React App'}
            iconElementRight={
                <Logged />
            }
            onLeftIconButtonClick={this.handleToggle}
            children={
                <img src={logo} className="App-logo" alt="logo" style={{position: 'absolute',left: '50%'}}/>
            }
        />
    
        <Drawer open={this.state.open} containerStyle={{marginTop: '64px', zIndex:'10'}}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        </div>
       
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
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

  const Logged = (props) => (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton iconStyle={{color:'white'}}><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
     <MenuItem primaryText="Refresh" />
     <MenuItem primaryText="Send feedback" />
     <MenuItem primaryText="Settings" />
     <MenuItem primaryText="Help" />
     <MenuItem primaryText="Sign out" />
    </IconMenu>
  );

  const Home = () => (
    <div>
      <h1>This is the homepage!</h1>
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

