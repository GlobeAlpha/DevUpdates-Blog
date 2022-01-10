import React from 'react';
import Post   from "./component/Post.js";

export default class ProjectIntro  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const ProjectIntroData =
        <div>
            <h1>First Paragraph</h1>
           <h2>Second Paragraph</h2>
            <h3> Third Paragraph</h3>
            <h4>Fourth Paragraph</h4>
            </div>
        
        return (
            <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body={ProjectIntroData} />
        );
    };

}



       {/* <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body ={SprintSession4Data} /> */}

         {/* Second  Retro */}

      {/* <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body={Retro2} /> */}