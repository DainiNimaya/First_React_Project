import React, {Component} from 'react';
import classes from './FirstPage.css';
import Second from './../../Second/Second';

import Aux from '../../../hoc/Aux';
import SecondPage from './../SecondPage/SecondPage';
// import {Button} from 'react-bootstrap';


class FirstPage extends Component{
    state = {
        type: '',
        pages:'first'
    }

    handleChange = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    moveNext=(event)=>{
        this.setState({
           pages:'second'
        })
    }

    render(){
        let showPages = null

        if(this.state.pages === "first"){
            showPages = <div className="area">
                            <input type="text" placeholder="type" onChange={(event)=>this.handleChange(event)}/>
                            <h1>{this.state.type}</h1>
                            {/* <Button bsStyle="success" onClick={(event)=>this.moveNext(event)}>Click Here</Button> */}
                            <Button type="primary">Primary</Button>
                        </div> 
        }else if(this.state.pages === "second"){
            showPages = <SecondPage/>
        }
        return (
            <div>
                {showPages}
            </div>    
        );
    }
}


export default FirstPage;