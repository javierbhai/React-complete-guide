import React, {Component} from 'react';


/*const person = (props) =>{
    return(
        <p>I'm a {props.name}!! I am {props.age} years old </p>
    );
}*/

class Person extends Component {
    render(){
        return(
            <div>
                <p>I'm a {this.props.name}!! I am {this.props.age} years old {this.props.children}</p>
            </div>
        );
    }
};

export default Person;