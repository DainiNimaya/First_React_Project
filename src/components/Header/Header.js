import React, {Component} from 'react';
import classes from './Header.css';

class Header extends Component{

    componentDidMount(){
        console.log("property value "+this.props.property)
    }


    render(){
        return (
            <div>
                <header className="headerr">
                    <h2>Header</h2>
                </header>    
            </div>    
        );
    }
}

export default Header;