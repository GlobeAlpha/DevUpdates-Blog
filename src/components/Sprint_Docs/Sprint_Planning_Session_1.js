import React from 'react';
import { Link} from 'react-router-dom';
// import Post   from "../Post.js";

export default class FirstSprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>
          {' '}
          <Link to="/">Go Back to Home</Link>
        </p>
        {/* <header class="blog-header">Dev Updates Blog by Maciek Bajda</header> */}
        <br />
        <br />
        <br />
        <span>15th of February 2022</span>
        <div class="Post-body">
          <header class="Post-body_header">
            <h1 class="Post-body_Title">
              First Sprint Planning Meeting Notes{' '}
            </h1>
            <p>
              This project is meant to demonstrate my ability to writer clean
              and maintainable front end code using best practises and SOLID
              software design principles.
            </p>
            <p>
              During dev process I will be updating you guys on progress of the
              development, to that end I am going to use Sprint Planning
              sessions and Monthly Retrospectives.
            </p>
          </header>

          <article class="Post-body_content">
            <h2 class="Post-body_Subtitle">Intro</h2>

            <p>
              As promised this post will document 1st Sprint for Portoflio
              Redesign.
            </p>
            <p>
              Purpose of this Sprint meeting with myself is to demonstrate I can
              follow agile ceremonies on my own.
            </p>
            <p>
              As well as demonstrate my work ethic and to stop me jumping into
              coding straight away.{' '}
            </p>
            <br />
            <br />
            <h3 class="Post-body_Subtitle"> First Sprint Notes </h3>

            <h4> What have i done so far ?</h4>
            <p> - I have finished designs.</p>
            <p> - Currently I have not got a front end dev plan. </p>

            <h4>What do will I do during this sprint ?</h4>
            <p>
              {' '}
              - In order to start this project of i will need to do algorithm
              design and test plan as these will diredt most of the initial
              coding{' '}
            </p>
            <p>
              {' '}
              - If I don't complete this prior to startinf dev work it will slow
              down dev work and create very messy html and css structure which
              will make future updates that much difficult.
            </p>

            <h4>Algorithm design</h4>
            <p>
              This part will include converting my designs into pseudo code and
              using BEM to create css structure for all of the pages.
            </p>
            <p>
              Each page contains Header,Body and Footer as major blocks so
              creating classes for each will be easy.
            </p>
            <p>
              As I I only need to rotate button on mobile using click event
              either I will use checkbox or create an event handler.
            </p>

            <h4>Test Plan</h4>
            <p>
              Once I got Algorithm design creating a test plan will be easy and
              since html and css are domininant tech used in this phase it will
              not be neccessary to use SOLID design principles as of now maybe
              during Phase 2.
            </p>
            <p>
              If time permits I will create skeleton for each page with all
              blocks,elements etc in and class names as well as placeholder
              content to be replaced with actual content.{' '}
            </p>

            <h4>Any possible obstacles ? </h4>
            <p>
              Currently I am busy with a lot of stuff so it is questionable if I
              can put in more than 1 hour daily into this project.
            </p>
            <p>
              This may mean that this sprint will a slow run rather than a
              sprint.
            </p>
          </article>

          <h4>Second Sprint Planning notes </h4>
          <p>When will next Sprint Planning meeting be ?</p>
          <p>If time permits 2 weeks from date of publication of this post.</p>
        </div>
      </div>
    );
  }
}
