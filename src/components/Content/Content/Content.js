import React, {Component} from 'react';
import classses from './Content.css';
import Sidebar from '../../Sidebar/Sidebar';
import SecondPage from '../../Content/SecondPage/SecondPage';
import {Button} from 'react-bootstrap';
import ThirdPage from "../ThirdPage/ThirdPage";

class Content extends Component{

    


    state={
        type: '',
        cond: 'first',
        a:'',
        b:'',
        c:'',
    
    }


    displayText = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    moveSecond = (event) => {
        this.setState({ 
            cond: 'second',
            a:'A',
            b:'B',
            c:'C'
        })
    }

    moveThird=(event)=>{
        this.setState({
            cond:'third'
        });
    }

    setCount = (value) => {
        alert("called")
    }

    setvalues= (n1,n2,n3) =>{
        this.setState({
            a:n1,
            b:n2,
            c:n3
        });
        
    }

    render(){
        let a=<Sidebar/>
    
        let showPage=null

        if (this.state.cond === "first") {
            showPage=<div>
                        <input type="text" placeholder="type" onChange={(event)=>this.displayText(event)}/>
                        <h1>{this.state.type}</h1>
                        <Button bsStyle="success" onClick={(event)=>this.moveSecond(event)}>Click Here</Button>
                    </div>
        }else if(this.state.cond === "second"){
            console.log(a);
            showPage=<SecondPage func={this.setCount} chan={this.setvalues} movePg={this.moveThird} property1={this.state.a} property2={this.state.b} property3={this.state.c}/>
        }else if(this.state.cond){
            showPage=<ThirdPage/>
        }

        return(
            <div>
                <section className="sectionPart">
                    <nav className="navtag">
                        {a}
                    </nav>
                    <article className="articleTag">
                        {showPage}
                    </article>
                </section>
            </div>
        );
    }
    
}

export default Content;