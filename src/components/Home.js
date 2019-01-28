import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component{
   state={
       data:''
   }
   componentDidMount(){
       this.getHomepage()
   }
    getHomepage=()=>{
        axios.get('http://localhost:2019/')
        .then((res)=>{
            console.log(res.data)
            this.setState({data:res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return (<div>
            <center><h1>{this.state.data}</h1></center>
        </div>)
    }
}

export default Home;