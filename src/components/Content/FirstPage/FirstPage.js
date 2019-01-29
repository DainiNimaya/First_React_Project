import React, {Component} from 'react';

class FirstPage extends Component{


    state={
        type:" ",
        condition:true

    }

    displayText = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    render(){
        return(
            <div>
            <input type="text" placeholder="type" onChange={(event)=>this.displayText(event)}/>
            <h1>{this.state.type}</h1>
        </div>     
        );
    }
}

export default FirstPage;