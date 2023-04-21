import React from 'react';
// import Post from '../Post.js';
import { Link} from 'react-router-dom';
const DevUpdate_Logo = require("../assets/DevUpdates.png");
export default class SecondSprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
   

    return (
      <div>
      <p>      
        <Link to="/">Go Back to Home</Link>
      </p>
      {/* <header class="blog-header">Dev Updates Blog by Maciek Bajda</header> */}
      <br />
      <br />
      <br />
      <span>9nd of March 2022</span>
      <div className="Post-body">
        <header className="Post-body_header">
          <h1 className="Post-body_Title"> Second  Sprint Planning Meeting Notes</h1>
          
        </header>

        <img src ={DevUpdate_Logo}  alt ="lightbulb_cog" />
        <article className="Post-body_content">
          <h2 className="Post-body_Subtitle">Intro</h2>
          <p>I apologise for being late posting, not only did I forget but I ended spend bit more more on my  other tasks  </p>
          <p>Next time I will need to set an alarm day before so I don't forget to keep you guys up to date .</p>
           

          <br />

            <h4 className="Post-body_Subtitle"> <u>What have I done so far ? </u></h4>
            <p>- I have create a Algorithm design for html and css.</p>
            <p>- Based on on that I am using BEM at this stage I will not need to use SOLID design principles maybe later ;) </p>
            <p>- Furthermore based on this data I decided setting up testing framework  is op. </p>
            <p>- This lead me to decide to write assertions  to test if correct BEM conventions are being used . </p>
                              
          <h4 className="Post-body_Subtitle"><u>What do will I do during this sprint ?</u></h4>
          <p>-  Next sprint I will focus on writing the  homepage </p>
          <p> - If everything goes to plan I should have set up the placeholder homepage by end of this week.</p>
          <p>- In that is the case I will proceed to replacing  placeholders with assets.</p>

          <h6>Card Rotation</h6>
          <p>  Later I will work on rotating the card as there might be an issue with hover on mobiles so I might need to write function triggered on mobile.</p>
          <p>  Finally I will be ready to do some manual testing and write the assertions needed to  test my use of BEM.</p>


          <h4 className="Post-body_Subtitle"><u>Any possible obstacles ?</u> </h4>
          <p>Currently I am busy with a lot of stuff so it is questionable if I can put in more than 1 hour daily into this project.</p>
          <p>This may mean that this sprint will a slow run rather than a sprint.</p>
        </article>

        <br />
        
        <h4 className="Post-body_Subtitle"><u>Second Sprint Planning notes</u> </h4>
        <p>What's next  ?</p>
        <p>I am going to set a reminder for day before actual post is due  so I don't forget again. </p>
        <p>As a rule of thumb I will hold a Retro after 2 sprint to assess my postion which is likely to be be on 23rd of Marchy or after if i get swammped.</p>
      </div>
    </div>
    );
  }
}

{
  /* <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body ={SprintSession4Data} /> */
}

{
  /* Second  Retro */
}

{
  /* <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body={Retro2} /> */
}
