import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class Roster extends Component{

    handleClick(id,e) {
        console.log('id', id, e);
    }

    render(){
        return( 
        <div>
            <h2>This is a roster page!</h2>
            <RaisedButton label="Button" onClick={this.handleClick()}/>
          </div>
          );
    }
}

export default Roster;