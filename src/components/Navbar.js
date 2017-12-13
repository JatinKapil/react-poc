import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import FlatButton from 'material-ui/FlatButton';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <AppBar className="navbar" style={{ textAlign: 'left', backgroundColor: '#424242' }} zDepth={3}
                    title={'React App'}
                    iconElementRight={
                        <Logged />
                    }
                    onLeftIconButtonClick={this.handleToggle}
                    children={
                        <div>
                            <div style={{ position: 'absolute', left: '12%',top:'5px' }}>
                                <img src={logo} className="App-logo" alt="logo" />
                            </div>
                            <div style={{ position: 'absolute', left: '50%',top:'5px' }}>
                            <AuthButton label="Home" path='/' />
                                <FlatButton label="Schedule" style={{color: 'white'}} />
                                <FlatButton label="Roster" style={{color: 'white'}} />
                            </div>
                        </div>
                    }
                />

                <Drawer open={this.state.open} containerStyle={{ marginTop: '64px', zIndex: '10' }}>
                <List>
                    <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} innerDivStyle={listItemInnerStyle} />
                    <ListItem primaryText="Starred" leftIcon={<ActionGrade />} innerDivStyle={listItemInnerStyle} />
                    <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} innerDivStyle={listItemInnerStyle} />
                    <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} innerDivStyle={listItemInnerStyle} />
                </List>
                </Drawer>
            </div>
        )
    }
}

const AuthButton = withRouter(({ history }) => (
    <FlatButton label={label} style={{color: 'white'}} onClick={() => history.push({path}) }/>
  ));

export default Navbar;

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

const listItemInnerStyle = {padding: '16px 16px 16px 16px'};