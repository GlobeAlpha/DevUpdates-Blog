import React from 'react';
import Post from './Post.js'
import '../index.css';
import { Link} from 'react-router-dom';


class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  

            <div>

               

                <header class="blog-header" >
                <h1 class="blog-title">Dev Updates Blog by Maciek Bajda</h1>
                    <p class="blog-description">Welcome to Dev Updates, Journaling exploits of a Front End Dev Maciek Bajda</p>
                </header>
                
                <br />
<br />

<br />
                <br />
            <section class ="Post-list">
                <article class="Post-link">
                <h1 class="Project-title">Portfolio Redesign</h1>
                <h2  class= "Post-category">Phase 1 : Vanilla </h2>
               
                <Link to="/Project_Intro">
                <Post Title={"Project : Portfolio Redesign"} Description = {"This is  Introductary Post to my Portfolio Redesign"} />
               </Link> 


                         <Link to ="/First_Sprint"> 
               <Post Title={"Vanilla : First Sprint Planning Session "} Description={"These are the notes for  my First Sprint Planning Session"} />
               </Link>
              
               <Link to ="/Second_Sprint">
               <Post Title={"Vanilla : Second Sprint Planning Session "} Description={"These are the notes for my Second Sprint Planning Session"} />
               </Link>
              
                    </article>
                </section>

                <section class ="Post-ComingSoon">
                <h3 class ="title">Upcoming Posts </h3>
               
               
               
               
               {/* <Link to ="/Retro_1"> */}
               <Post Title={"Vanilla : First Retro"} Description = {"These are notes  for First Retrospective of this Phase "}/>
               {/* </Link> */}
              
                
                {/* <Link to="/Third_Sprint"> */}
                <Post Title={"Vanilla :Third Sprint Planning Session "} Description={"These are the notes for  my Third Sprint Planning Session"} />
                {/* </Link> */}
                
                {/* <Link to="/Fourth_Sprint"> */}
                    <Post Title={"Vanilla: Fourth Sprint Planning Session "} Description={"These are the notes  for my Fourth Sprint Planning Session"} />
                {/* </Link> */}
               
                {/* <Link to="/Retro_2"> */}
                    <Post Title={"Vanilla: Second Retro"} Description={"These are notes  for Second Retrospective of this Phase "} />
                {/* </Link> */}


                <h2 class="Post-category">Phase 2 : React</h2>   
                <Post Title={"React: First Sprint Planning Session"} Description={"This post commences start  of Phase 2 of  Portfolio Redesign"} />
              

                <Post Title={"React : Second Sprint Planning Session "} Description={"These are the notes my First Sprint Planning Session"} />
               {/* </Link> */}
               
               {/* <Link to ="/Retro_1"> */}
               <Post Title={"React : First Retro"} Description = {"These are notes  for First Retrospective of this Phase "}/>
               {/* </Link> */}
              
                
                {/* <Link to="/Third_Sprint"> */}
                <Post Title={"React :Third Sprint Planning Session "} Description={"These are the notes my Third Sprint Planning Session"} />
                {/* </Link> */}
                
                {/* <Link to="/Fourth_Sprint"> */}
                    <Post Title={" React : Fourth Sprint Planning Session "} Description={"These are the notes my Fourth Sprinyt Planning Session"} />
                {/* </Link> */}
               
                {/* <Link to="/Retro_2"> */}
                    <Post Title={"React :Second Retro"} Description={"These are notes  for Second Retrospective of this project "} />
                {/* </Link> */}
</section>

                
                {/* 
               <Link to ="/First_Sprint"> 
               <Post Title={"First Sprint Panning Session "} Description={"These are the notes my First Sprinyt Planning Session"} />
               </Link>
               
               <Link to ="/Second_Sprint">
               <Post Title={"Second Sprint Panning Session "} Description={"These are the notes my First Sprinyt Planning Session"} />
               </Link>
               
               <Link to ="/Retro_1">
               <Post Title={"First Retro"} Description = {"These are notes  for First retrospective of this project "}/>
               </Link>
              
                
               <Link to ="/Third_Sprint"> <Post Title={"Third Sprint Panning Session "} Description={"These are the notes my First Sprinyt Planning Session"} /></Link>
               <Link to ="/Fourth_Sprint"><Post Title={"Fourth Sprint Panning Session "} Description={"These are the notes my First Sprinyt Planning Session"} /></Link>
               <Link to ="/Retro_2"><Post Title={"Second Retro"} Description = {"These are notes  for First retrospective of this project "}/></Link>
              
                 */}
            </div>
        );
    }
}
 
export default PostList;