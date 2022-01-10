import React from 'react';
import Post from './Post.js'
// import './src/index.css'
import { Link} from 'react-router-dom';


class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  

            <div>
                <Post Title={"Project Intro"} Description = {"This is  Introductary Post to my Portfolio Redesing"} />
                
               <Link to ="/First_Sprint"> <Post Title={"First Sprint Panning Session "} Description={"These are the notes my First Sprinyt Planning Session"} /></Link>
               <Link to ="/Second_Sprint"><Post Title={"Second Sprint Panning Session "} Description={"These are the notes my First Sprinyt Planning Session"} /></Link>
               <Link to ="/Retro_1"><Post Title={"First Retro"} Description = {"These are notes  for First retrospective of this project "}/></Link>
              
                
               <Link to ="/Third_Sprint"> <Post Title={"Third Sprint Panning Session "} Description={"These are the notes my First Sprinyt Planning Session"} /></Link>
               <Link to ="/Fourth_Sprint"><Post Title={"Fourth Sprint Panning Session "} Description={"These are the notes my First Sprinyt Planning Session"} /></Link>
               <Link to ="/Retro_2"><Post Title={"Second Retro"} Description = {"These are notes  for First retrospective of this project "}/></Link>
              
                
            </div>
        );
    }
}
 
export default PostList;