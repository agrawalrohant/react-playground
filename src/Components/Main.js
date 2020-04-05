import React,{Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component{
    render(){
      return <div>
           <Title titleText={"TODO List"}/>
         <List tasks={["Leave your current job","Look out for a new one"]}/>        
         <List tasks={["Stay hungry, stay foolish","Keep learning, never stop!"]}/>
      </div>
    }
  }

  export default Main