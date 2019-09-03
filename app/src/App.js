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
        <div style={{marginTop:'50px'}} className="picture">
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
          <p className="des"> Software Engineering student, passionate about tech and excited about machine learning</p>
        </div>
        
       <div className="cen"> 
          <div className="block">
            <div className ="columns">
              <div className="column">
                <div className="box">
                  <i className="fa fa-wrench" id="wr"></i>   <span className="t1">Experience</span>
                  <p className="t2">Software Developer</p>
                  <i className="fa fa-building" id="t3"></i> <span id="t33">Zhy Interactive -Royaltymine</span><br/>
                  <i className="fa fa-globe" id="t3"></i> <span id="t33">Toronto, Ontario</span><br/>
                  <i className="fa fa-calendar" id="t3"></i> <span id="t33">June 2019 - September 2019</span>
                  <p className="t4">
                    Royaltymine is an investment platform made to help the struggling artist. Artists are able to sell a portion of their songs for money, and investors will earn royalties for the portion they buy.
                    I worked with the fullstack team using the MERN stack I implemented new features, creating endpoints, front-end components, and deployment to GCP! 
                  </p>

                  <p className="t2">Software Developer</p>
                  <i className="fa fa-building" id="t3"></i> <span id="t33">Oakridge</span><br/>
                  <i className="fa fa-globe" id="t3"></i> <span id="t33">Hannon, Ontario</span><br/>
                  <i className="fa fa-calendar" id="t3"></i> <span id="t33">June 2018 - September 2018</span>
                  <p className="t4">
                    A landscape Contracting company that helps design your vision. Recruited to help integrate 3rd party software into new acounting software. 
                    Created programs that automated data transfer from various contracting softwares using C. 
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
                  <p className="t4">Enrolled in the Software Engineering program at the University of Guelph with a minor in mathematics. Expected graduation date is May 2021</p>
                  <i className="fa fa-list-ol" id="wr"></i>  <span className="t1">Technical Skills</span><br/>
                  <span className="t2">Languages</span> <br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Java</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">C</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">JavaScript</span><br/>
                  <span className="t2">Web</span> <br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Node.js</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">HTML5</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">CSS</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Bootstrap</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">Express</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">React</span><br/>
                  <i className="fa fa-angle-double-right" id="t3"></i> <span id="t33">PostgreSQL</span><br/><br/><br/>
                  <i className="fa fa-star" id="wr"></i> <span className="t1">Hobbies</span><br/>
                  <span id="t33">Soccer is my favourite sport, although I have stopped watching soccer games,
                  I still enjoy playing. My preferred position is center mid-field.
                  </span><br/><br/>
                  <span id="t33">If I have spare time I enjoy playing League of Legends. It is my Favourite video game
                  and I have achieved top 0.3% of players. Currently I play for the University team, and hope to win the upcoming season.
                  </span><br/><br/>
                  <span id="t33">My next goal is to become proficient in machine learning. I am currently reading Hands-On Machine Learning
                  with Scikit-Learn and TensorFlow, and messing around with datasets. Recently, I used support vector machines to predict 
                  who would survive on the Titanic, with the help of the Titanic dataset.
                  </span>
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
