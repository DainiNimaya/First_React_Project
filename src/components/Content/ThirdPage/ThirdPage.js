import React,{Component} from 'react';
import Post from '../../Post/Post';
import aixos from 'axios';
import ReactTimeout from 'react-timeout'


class ThirdPage extends Component{

    state={
        list:[]
    }

    componentDidMount(){
        aixos.get("https://hg96tb08l6.execute-api.us-east-2.amazonaws.com/prod/devicelocation/getalldevices")
            .then(response=>{
                this.setState({
                    list:response.data
                });
            })
            .catch(err =>{
                console.log("error")
            });       
        setInterval( () => this.componentDidMount(), 5000 );
        console.log("bottom")
    }

    showAlert=(id)=>{
        alert(id)
    }

    render(){
        const post=this.state.list.map (posts =>{
            return <div className="col-12 col-sm-6 col-md-3">
                       <Post name={posts.name} num={posts.count}  clicked={(event)=>this.showAlert(posts.count)} />
                   </div>
        })
        return(
            <div>
                <h2>Title</h2>
                <div className="row">
                    {post}
                </div>
            </div>
        );


    }




}

export default ThirdPage;