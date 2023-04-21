import React from 'react';
import { Link} from 'react-router-dom';


export default class ProjectIntro  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

    
        
        return (
            <div>
                <p> <Link to="/">Go Back to Home</Link></p>
            {/* <header class="blog-header">Dev Updates Blog by Maciek Bajda</header> */}
                <br />
                <br />
                <br />
<span>21st of January 2022</span>
            <div class="Post-body">                    
                        <header class="Post-body_header">
                            <h1 class="Post-body_Title">Project : Portfolio Redesign</h1>
                             <p>This project is meant to demonstrate my ability to writer clean and maintainable front end code using best practises  and SOLID software design principles.</p>
                        <p>During dev process I will be updating you guys on progress of the development, to that end I am going to use Sprint Planning sessions and Monthly Retrospectives.</p>
                        
                    </header>
                    
            <article class="Post-body_content">
                        

       <h2 class ="Post-body_Subtitle">Plan</h2>
           
                <p> As I am a React Dev and at time of writing this post  I didn't have that many React projects to my name, it would help if I had React-based Portfolio.</p>
                <p> To that end this project will be split into 2 phases : Vanilla and React. </p>
                <p> Vanilla Phase I will implement my new designs using vanilla js which also includes writing html and css.</p>
                <p> React Phase I will be  taking all that I've written in vanilla  js and turning into React components written keeping  React best practises  in mind.   </p>

                        <br />
                        <br />
    <h3 class ="Post-body_Subtitle"> Project Schedule </h3>
        
            <p>My plan going forward is to post an update with notes for each Sprint Planning session fortnightly.</p>
            <p>After 2 Sprints, I will review how much progress i have made on my Portfolio Redesign.</p>
            <p>Ultimately I don't anticipate this project taking more 1-2 months. </p>
            <p>However to paraphrase Forrest Gump, ‘Life is a box of chocolates'</p>

        </article>
        </div>

       </div>
            );
    };

}



       {/* <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body ={SprintSession4Data} /> */}

         {/* Second  Retro */}

      {/* <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body={Retro2} /> */}