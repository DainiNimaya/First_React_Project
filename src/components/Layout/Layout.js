import React, {Component} from 'react';
import Content from '../Content/Content/Content';
import Footer from '../Footer/Footer';
import Head from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

// import classes from './Layout.css';


  class Layout extends Component{ 
      
    state={
        main:'one'
    }

    render(){
        let a=null
        return(
        <div>
            <Head property={this.state.main}/>
            <Content/>  
            <main>
                {this.props.children}
            </main>
            <Footer/>
        </div>
        );
    }
}

export default Layout;