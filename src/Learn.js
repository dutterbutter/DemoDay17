import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
//import FontIcon from 'material-ui/FontIcon';

class Learn extends React.Component { 
    render() {
        return (
            <div className="learn row col s12">
                <a href={this.props.website} target="_blank">LEARN MORE</a>
            </div>
        )
    }
}

export default Learn;