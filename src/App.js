import React from 'react';
import logo from './bitmoji.png';
import './App.css';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography'
import SubjectIcon from '@material-ui/icons/Subject';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import GetAppIcon from '@material-ui/icons/GetApp';
import Divider from '@material-ui/core/Divider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

export default function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
        <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
    </Router>
  );
}

function Footer() {
  return(
    <div>
      <footer className="App-footer">
        Built with HTML5, CSS3, Material UI and React
      </footer>
    </div>
  )
}

function Home() {
  return(
    <div className="App">
      <header>
      </header>
      <body className="App-body">
        <Grid>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
          <Typography style={{padding:"20px", color:"white"}}variant="h4">My Name is Christian Lanzer</Typography>
          <Button startIcon={<SubjectIcon/>} style={{margin:"10px"}}variant="contained" color="default" component={Link} to={"/Resume"}>Resume</Button>
          <Button startIcon={<LinkedInIcon/>} style={{margin:"10px"}}variant="contained" color="default" className={"App-link"} onClick={() => {window.open("https://www.linkedin.com/in/christian-lanzer-5415a092/")}}>LinkedIn</Button>
      </body>
      <Footer>
      </Footer>  
    </div>
  )
}

function Resume() {
  const resumeBackColor = "#2a3439"
  return (
    <div className="app">
      <header>
        <Grid container style={{backgroundColor:resumeBackColor}}>
          <Grid item xs={6}>
            <Button startIcon={<ArrowBackIosIcon/>} style={{color:"white", padding:"10px"}} component={Link} to={"/"}>Back</Button>
          </Grid>
          <Grid item xs={6}>
          <Button startIcon={<GetAppIcon/>} style={{color:"white", padding:"10px"}} component={Link} target="_blank" to={"/ChristianLanzerResume.pdf"}>Download Resume</Button>
          </Grid>
        </Grid>
      </header>
      <body className="app">
        <Grid container style={{backgroundColor:resumeBackColor}}>
          <Typography style={{padding:"10px", color:"white"}}variant="h6">Christian Lanzer - calanzer@gmail.com</Typography>
        </Grid>
        <Grid container style={{backgroundColor:resumeBackColor}}>
          <Typography style={{padding:"10px", color:"white"}}variant="body1">My name is Christian Lanzer, I am a software developer with 3 years of experience in writing application performance tests, QA automation tests and frontend code like this website. I've worked on Linux and Windows systems and worked on projects in AWS and Google Cloud. I'm currently looking for work so reach out to me at calanzer@gmail.com to connect.</Typography>
        </Grid>
        {/* Programming Languages */}
        <Grid container style={{backgroundColor:resumeBackColor}}>
          <Grid item xs={12}>
          <Paper style={{margin:"10px"}}>
          <Typography style={{padding:"10px", color:"black"}}variant="h5">Programming Languages</Typography>
            <Grid container xs={12} style={{margin:"10px"}}>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Python</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Javascript</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Bash/Shell</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Scala</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">HTML</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">CSS</Typography>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
          {/* Technologies */}
          <Grid item xs={12}>
          <Paper style={{margin:"10px"}}>
          <Typography style={{padding:"10px", color:"black"}}variant="h5">Technologies</Typography>
            <Grid container xs={12} style={{margin:"10px"}}>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Gatling.io</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Selenium</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">CI/CD</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Jenkins</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Agile</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Atlassian</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">AWS</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Firebase</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">React</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Material UI</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">DynamoDb</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">Spirent Avalanche</Typography>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
          {/* Education */}
          <Grid item xs={12}>
          <Paper style={{margin:"10px"}}>
          <Typography style={{padding:"10px", color:"black"}}variant="h5">Education</Typography>
            <Grid container xs={12} style={{margin:"10px"}}>
              <Grid item xs={12} sm={12}>
                <Typography style={{padding:"5px", color:"black"}}variant="h6">Loyola University Chicago - Graduated 2017</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; B.S. Software Engineering</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; B.A. Economics</Typography>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
          {/* Experience */}
          <Grid item xs={12}>
          <Paper style={{margin:"10px"}}>
          <Typography style={{padding:"10px", color:"black"}}variant="h5">Experience</Typography>
            <Grid container xs={12} style={{margin:"10px"}}>
              <Grid item xs={12} sm={12}>
                {/* Forcepoint */}
                <Typography style={{padding:"5px", color:"black"}}variant="h6">Forcepoint - Software Performance Engineer (2017 - 2020)</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Worked as an engineer on an enterprise cyber security product hosted in the cloud.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Led, designed and wrote performance test initiatives for cloud security features including; network proxies, firewalls, API endpoint using the Gatling load generator in AWS.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Taught global teams how to execute and analyze performance tests.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Wrote Python and Bash scripts to deploy, upgrade and clean up performance testing infrastructure in AWS.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Wrote frontend and backend QA automation tests in Python and Javascript using the Cypress framework.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Planned, wrote and executed application scalability tests in AWS.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Tested on-premise web security products using Spirent load generators.</Typography>
                {/* Loyola Intern */}
                <Divider style={{padding:"10px"}}/>
                <Typography style={{padding:"5px", color:"black"}}variant="h6">Loyola University Chicago - System Administrator Intern (2016 - 2017)</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Prototyped a database for university computer inventory using SQL and Visual Studio</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Wrote silent install scripts for university applications.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Performaned hardwasre and software support such as imaging test machines, installing printer release stations, and other hardware replacements.</Typography>
                {/* OBO Admin Assistant */}
                <Divider style={{padding:"10px"}}/>
                <Typography style={{padding:"5px", color:"black"}}variant="h6">Overseas Building Operations - Administrative Assistant (Summer 2016)</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Created visual representation of folder and file structures using Visual Basic and Excel.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Read U.S. Embassy blueprints to take inventory for a variety of materials.</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Participated in daily site quality assurance inspections with architects and engineers.</Typography>
                {/* US Embassy Jakarta */}
                <Divider style={{padding:"10px"}}/>
                <Typography style={{padding:"5px", color:"black"}}variant="h6">U.S. Embassy Jakarta, Indonesia - Information Management Intern (Summer 2015)</Typography>
                <Typography style={{padding:"5px", color:"black"}}variant="body1">&nbsp;&nbsp;&nbsp;&nbsp; - Helped create and deploy digital signage systems. Wrote and distributed documentation for use.</Typography>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
        </Grid>
      </body>
      <Footer>
      </Footer>
    </div>
  )
}
