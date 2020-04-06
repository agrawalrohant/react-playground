import React,{Component} from 'react';

class Photo extends Component{
    render(){
        return <figure className="figure">
            {this.props.post.id}
        </figure>
    }
}

export default Photo