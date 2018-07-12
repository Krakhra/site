import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="test"
          params={{
            particles: {
              number:{
                value:12,
                density:{
                  enable:true,
                  value_area:1000
                }
              } , 
              
              color:{
                value:"#e2c300"
              },
              line_linked:{
                enable:true,
                distance:150,
                color:"#e2c300",
                opacity:0.2,
                width:1
              }
              
            }
          }}
        />
        <div className="picture">
        </div>

        <div className="nameC">
          <p className="name">Kirat Rakhra (middle)</p> 
        </div>
        
        <div className="block">
          <nav className="nav">
            <div className="nav-center">
              <a href="https://github.com/Krakhra" className="nav-item">
                <span className="icon">
                  <i className="fa fa-github" id="lin">/Krakhra</i>
                </span>
              </a>
            </div>
          </nav>
        </div>
        
        <div className = "desc">
          <p className="des"> Software Engineering student, passionate about front-end and excited about machine learning</p>
        </div>
        
       <div className="cen"> 
          <div className="block">
            <div className ="columns">
              <div className="column">
                <div className="box">
                  <i className="fa fa-wrench" id="wr"></i>   <span className="t1">Experience</span>
                  <p className="t2">Intern</p>
                  <i className="fa fa-building" id="t3"></i> <span id="t33">Oakridge</span><br/>
                  <i className="fa fa-globe" id="t3"></i> <span id="t33">Hannon, Ontario</span><br/>
                  <i className="fa fa-calendar" id="t3"></i> <span id="t33">June 2018 - September 2018</span>
                  <p className="t4">
                    A landscape Contracting company that helps design your vision. Recruited to help move 
                    accounting system over to QuickBooks. Created programs that convert workbook reports from various 3rd party softwares to 
                    a Quickbooks file type using C. 
                  </p>
                  <i className="fa fa-code" id="wr"></i> <span className="t1">Projects</span><br/>
                  <i class="fa fa-bitcoin" id="t3"></i><span id="t33">Cryptocurrency Article Trends</span>
                  <p className ="t4">
                    First full-stack application back when Bitcoin was a trending topic. 
                    Used NewsAPI.org to pull articles on Bitcoin and stored them into a PostgreSQL table.
                    The articles were categorized as positive negative or neutral based on how they matched with a set of words.
                  </p>

                  <i class="fa fa-ambulance" id="t3"></i><span id="t33">Canada Crime Stats</span><br/>
                  <p className="t4">
                    Pulled surveys from CANSIM and stats Canada, parsed the data with perl into crime categories.
                    Created a basic interface that allows users to make an infinite combinations of inquiries based on location and crime types.
                  </p>
                </div>
              </div> 

              <div className="column" id="c2">
                <div className="box">
                  <i className="fa fa-graduation-cap" id="wr"></i> <span className="t1">School</span>
                  <p className="t4">Enrolled in the Software Engineering program at the University of Guelph with a minor in mathematics. Expected graduation date is May 2020</p>
                  <i className="fa fa-list-ol" id="wr"></i>  <span className="t1">Technical Skills</span><br/>
                  <span className="t2">Languages</span> <br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Java</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">C</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">JavaScript</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Perl</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Python</span><br/>
                  <span className="t2">Web</span> <br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Node.js</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">HTML5</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">CSS and SASS</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Bootstrap</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Express</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">React</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">PostgreSQL</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">mySQL</span><br/>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
