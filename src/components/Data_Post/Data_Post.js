import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import axios from '../../axios';


class Data_Post extends Component{


    state={
        name:'',
        count:''
    }

    postHandler=()=>{

        const data={
            name:this.state.name,
            count:this.state.count
        }

        axios.post('/todos/',data)
            .then(responce =>{
                console.log(responce);
            }

        );

    }


    deleteHandler=()=>{
        axios.delete('')
    }

    getNameValue=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    getCount=(event)=>{
        this.setState({
            count:event.target.value
        })
    }


    render(){
        return(
            <div>
                <input type="text" placeholder="Name" onChange={(event)=>this.getNameValue(event)}/>
                <input type="text" placeholder="Count" onChange={(event)=> this.getCount(event)}/>
                <Button onClick={(event)=> this.postHandler()} >Add Data</Button>
                {/*<Button onClick={(event)=> this.deleteHandler()} >Delete Data</Button>*/}
            </div>
        );
    }
}

export default Data_Post;


// onClick={(event)=>this.postHandler(event)}