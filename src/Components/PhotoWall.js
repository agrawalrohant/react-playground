import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props){
    return <div>
        <a onClick={() => {
            props.onNavigate();
        }} className='addBUtton' href="#AddPhoto"></a>
        
        <div className="photoGrid">
        {props.posts.map((post, index) => {
        return <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>
        })}
        </div>
    </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

/*class PhotoWall extends Component{
    render(){
        return <div className="photoGrid">
        {this.props.posts.map((post, index) => {
           return <Photo key={index} post={post}/>
        })}
        </div> 
    }
}*/

export default PhotoWall