import React from 'react';
//import Post   from "../Post.js";
//const PreviousDesign = require("../assets/PreviousDesign.png")
//const NewDesign = require("../assets/NewDesign.png")
//const Frame1 = require("../assets/Frame1.png");
//const Frame2 = require("../assets/Frame2.png");
//const Frame4 = require("../assets/Frame4.png");
export default class Retro_1 extends React.Component
{
    //constructor(props)
    //{
    //    super(props);
    //    this.state = {}
    //}
    render() {

        return( 
            

 <div>

<h1>Intro</h1>
<p>Firstly I do apologise for a such big break since I last wrote despite my best efforts,dispute I was having my ex co-workers took a lot longer than anticpacted.</p>
<p>In addition of getting busy with other matters, I was able to  restart  the work earnest till February this year.</p>
<p>From here on,I will be going full steam ahead  same schedule as before.</p>


<h2>Progress</h2>

<p>Since restarting in February I made a substantial progress resulting in MVP of my new designs  which I will present key higlights of in next section.</p>
<p>Firstly it is important to remember this will be a long post including code snippets and screenshots.</p>
<p>This includes Changes made from last post  to new design with a shiny new card  with cool features like  card rotation, frosted glass effect.</p>
<p>Furthermore I have made it easier to filter out  Projects based on type  of projects with comemrcial as default  and  dropdown with Tech types e.g. React.</p>
<p>This future will allow user to filter my projects  based on their  needs  i.e. a recuriter looking for what react projects I have done.</p>
<p>At this moment it is pretty bare but before final release and after I am planning to add all of my projects  whihc show case filtering much more than current placeholders.</p>

<br />
<p style={{ fontWeight: 100 }}>Previous Design</p>
<section>
{/*<img src={PreviousDesign} alt="Before shot of my portfolio site"  className="BeforeAfter_Screenshots" />*/}
{/*<img src={NewDesign} alt="After shot of my portfolio site" className="BeforeAfter_Screenshots" />*/}
</section>

<h3 style={{ fontWeight:100}} >New Design</h3>

<p>As soon as I restarted  my portfolio development, I have created a frosted glass card  with ability to rotate upon hover replacing previous  static  card  with a low opacity background.</p>
<p> Below I will walk you through how I used css to create this  functionality  starting with the frosted glass  effect</p>

<br />
<h2 id="Card_Title">Card</h2>


<p><u>Frosted Glass effect</u></p>
            <pre>
                <code className="Front_snippet" >
                    {

`.ShowCaseCard--front
   {
    position: absolute;
    color: orange;
    padding: 44px;
    width: 570px;
    height: 300px;
    backdrop-filter: blur(9px);
    background: rgba(0,255,0,.4);
    backface-visibility: hidden;
   }`
                    }
                </code>
            </pre>

<p>To add frosted glass effect i have  reduced opacity of the bg along with adding a blur filter  which  makes bg frosty.</p>


            <br />
            <br />
            <br />
            <br />
            


<p><u>Card Rotation</u></p>

<p>animation</p> 
{/*<img className="Animation_Screenshots " src={Frame1} />*/}
{/*<img className="Animation_Screenshots " src={Frame2} />*/}
{/*<img className="Animation_Screenshots " src={Frame4} />*/}
<p>This animation incrementally rotates the card from 45 degress to 180 degress giving impression of Card rotation.</p>



<br />
<br />
<br />
                

<p><u>Smoothing out the rotation</u></p>
                <pre>
                    <code className="Front_snippet" >
                        {

                            `perspective:1000px;
 transform-style: preserve-3d;`
                        }
                    </code>
                </pre>
<p>As Card rotates it is acting like a 3d object therefore it requires properties that preserve the 3d effect as well as maintaing a perspective.</p>
<p>Without these properties Card would rotate in jerky 2d fashion, taking user away from the coolness of this card!</p>




<br />



<p><u>Hover</u></p>

                <pre>
                    <code className="Front_snippet" >
                        {

                            `.ShowCaseCard:hover
{
animation: CardRotation 6s forwards;
backface-visibility: hidden;
}

.ShowCaseCard--back
{
position: absolute;
top: 0px;
right: 3px;
background: green;
padding: 44px;
width: 570px;
height: 300px;
backface-visibility: hidden;
transform: rotateY(180deg);
}`
                        }
                    </code>
                </pre>



<p>All of this great but animation needs a trigger, which hover action covers perfectly.</p>
<p>As user hovers over he Card, front card & back card hide their backfaces giving illusion that card is rotated as 1 not 2 cards.</p>
<p> In order for the back card's front to be visible it needs to be rotated by same amount of degrees as the front maintaing cohesion. </p>                    
<p>When hover triggers animation,this causes front of the cards Backface to hide like it does in before hover</p>





<br />
<br />



<h3 id ="Filter_Title">Filters</h3>

<p>In the Work page, a user is likely a way of filtering what Projects they want to see.</p> 
<p>By default Commercial type projects are displayed  and with mixed tech.</p>
<p>To select Project Type other than default, user will toggle  text tab that will filter projects based on that filter.</p>
<p>To select the Tech ,  user will select tech on the dropdown which  will  narrow down their search to desired tech for instance if they are looking for a React Dev  they will see only React Projects when they select React.</p>
<p>Below I will explain how the code works to achieve this</p>



<p style={{ fontSize: 25 }}>Type</p>           



<p><u>Default Style & Toggle Filter</u></p>


                <pre>
                    <code className="Filter_snippet">
                        {
`Project_Commercial = () =>
{
    ProjectCommercial.checked = true;

    if (ProjectCommercial.checked == true)
    {
    ProjectCommercial.style.color = "yellow";
    ProjectCommercial.style.textDecoration = "underline green";

    ProjectPersonal.style.color = "black";
    ProjectPersonal.style.textDecoration = "none";

    ProjectEducation.style.color = "black";
    ProjectEducation.style.textDecoration = "none";
    }
}`
                        }
                    </code>
                </pre>



<pre>
<code className="Filter_snippet" >
 {
`Project_Type = () =>
{
ProjectPersonal.checked = true;
    if (ProjectPersonal.checked == true)
     {
    ProjectCommercial.style.color = "black";
    ProjectCommercial.style.textDecoration = "none";
    ProjectPersonal.classList.toggle('filter-active');
     }

    else
     {
    ProjectPersonal.style.color = "black";
    ProjectPersonal.style.textDecoration = "none";
     }
}`
 }
                    </code>
                </pre>



<p>As Commercial filter is activated by default,  user will need a wy of switching to other filters.</p>
<p>So when user presses another filter box is checked and if 'filter-active' is present filter becomes the toggled filter.</p>

            

<br />

            
<p><u>Remove card</u></p>             
                <pre>
                    <code className="Filter_snippet" >
                        {
`if (ProjectPersonal.classList.contains('filter-active'))
   {
     for (var i = 0; i < ProjectCard.length; i++)
      {
        if (ProjectCard[i].classList.contains("Personal"))
        {
            ProjectCard[1].style.display = "none";
            ProjectCard[2].style.display = "none";
       }

        else { console.log("Filter is inactive") }

            }
    }

        ProjectCommercial.checked = true;`
                        }
                    </code>
                </pre>

<p>To check  array of elements with same class, those elements need to be iterated through and checked if they match criteria.</p> 
<p>At this moment I manually removing these elements  but in future I want to autmatically only display filtered elements.</p>



<br/>


<p style={{ fontSize: 25 }}>Tech</p>            

            

<br />


<p><u>Intilisation</u></p>
                <pre>
                    <code className="Filter_snippet" >
                        {
                            `var ProjectCard = document.getElementsByClassName('Project--Card');
 var TechStack_Filter = document.getElementById('Stack').value;
`
                        }
                    </code>
                </pre>
<p>Similar to Type filter, all relevant elements need to be initialised by storing all elements in clasName array.</p>
<p>As well as value of selection dropdown to filter based on selected values.</p>


            <pre>
                <code className="Filter_snippet" >
                    {
`var JS = document.getElementsByClassName("JS");
 var React = document.getElementsByClassName("React");`
                    }
                </code>
            </pre>


<p><u>electing JS and React Project Cards</u>S</p> 
<p>iltering  these cards requires me to have access  to them.</p>F





                <p>Selection Filter Logic</p><u></u>           
                <p>Finding JS Cards</p>


                <pre>
                    <code className="Filter_snippet" >
                        {
`if (TechStack_Filter == "JavaScript")
 
for (var i = 0; i < ProjectCard.length; i++) 

if (ProjectCard[i].classList.contains("JS"))

for (var i = 0; i < React.length; i++)
{
React[i].style.display = "none";
}`

}
    </code>
</pre>



<p>Once a dropdown option is selected, the value of selection is if it is JavaScript.</p> 




<p>Getting all of the matching Cards</p> 
<p>Now that i hav filtering criteria selected I will iterate through every card,checking if thye contain class of JS.</p>

<p>Cards that are React are hidden , resulting only in  JS cards.</p>
<p>Level of complexity of this solution as well as code density means that Filtering logic will have to be refactored to reduce amount of reduant code as well as simplify logic. </p>
            
            
<br />
<br />



<h5>Next Steps</h5>
<p>However this approach is not going to  be scalable as going through array of 10 + elements will  reduce performance as amount of iterations  will increase per selection expsically when I Add  new selection options in future..</p>
<p>In addition using  series of nested if statements and for loops  will make code hard to read  therefore to maintain long term so I will need to shorten this using array methods</p>

<br />

<h5>Release schedule</h5>
<p>As this stage of development is finished, I can  address above issues  based on my current speed I am aiming at 16th of May release!</p>

</div>)
      
    };

}




       {/* <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body ={SprintSession4Data} /> */}

         {/* Second  Retro */}

      {/* 
 //return (
 //           <Post Title="Project Intro" Description="This is a introductary post to new Prroject " body={Retro1Data} />
 //       );
<Post Title="Project Intro" Description="This is a introductary post to new Prroject " body={Retro2} /> */}
