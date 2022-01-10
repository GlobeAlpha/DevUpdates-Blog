import React from 'react';
import '../index.css';


export   default class Post extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {}
   
    }

    
    render() { 
        return ( 
            //  add post data 
            <div className="Post"> 
            <p> {this.props.Title}</p>   
           
                <p>{this.props.Description}</p>
                <p>{this.props.body}</p>
                
            </div>

         );
    }
}
 
