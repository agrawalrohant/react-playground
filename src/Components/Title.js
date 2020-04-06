import React,{Component} from 'react';

function Title(props){
    return <h1>
                {props.titleText}
             </h1>
}

/*class Title extends Component{
    render(){
        return <h1>
                {this.props.titleText}
             </h1>
    }
}*/

  export default Title