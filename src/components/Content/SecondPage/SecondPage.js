import React, {Component} from 'react';
import classes from './SecondPage.css';
import {Button} from 'react-bootstrap';

class SecondPage extends Component{

    state={
        a:'',
        b:'',
        c:''
    }

    componentDidMount(){
        console.log(this.props.property1);
        console.log(this.props.property2);
        console.log(this.props.property3);
    }


    handleNum1=(event)=>{
        this.setState({
            a:event.target.value
        });
    }

    handleNum2=(event)=>{
        this.setState({
            b:event.target.value
        });
    }

    handleNum3=(event)=>{
        this.setState({
            c:event.target.value
        });
    }

    changeValue=()=>{
        this.props.chan(this.state.a,this.state.b,this.state.c)
    }

    changePage=()=>{
        this.props.movePg()
    }

    render(){
        return(
            <div>
                <h1>{this.props.property1}</h1>
                <h1>{this.props.property2}</h1>
                <h1>{this.props.property3}</h1>

                <Button bsStyle="success" onClick={this.props.func} >Alert</Button><br/>

                <h3>Try with three numbers..</h3><br/>

                <input type="text" onChange={(event)=>this.handleNum1(event)} placeholder="Num1"/><br/>
                <input type="text" onChange={(event)=>this.handleNum2(event)} placeholder="Num2"/><br/>
                <input type="text" onChange={(event)=>this.handleNum3(event)} placeholder="Num3"/><br/>

                <Button bsStyle="success" onClick={(event)=>this.changeValue(event)} className="button" >Change</Button><br/>

                <Button bsStyle="success" onClick={(event)=>this.changePage(event)} className="button">Next</Button><br/>

            </div>
        );
    }
}

export default SecondPage;