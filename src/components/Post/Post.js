import React, {Component} from 'react';
import { Card } from 'antd';
import {Row,Col} from 'antd';
import axios from 'axios';

class Post extends Component{
    render(){
        return(
        <div>
            <div onClick={this.props.clicked}>
                <Card style={{ width: 250 }}>
                    <p>{this.props.name}</p>
                    <br/>
                    <p>{this.props.num}</p>
                </Card>
            </div>
        </div>

        );
    }
}

export default Post;