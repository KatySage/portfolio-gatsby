import React from 'react';
import img from './images/topper3.png';
import './App.css';
import Devicon from './components/Devicon';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import salon from './images/salon-screenshot.png';
import memory from './images/memory-screenshot.png';
import quiz from './images/quiz-screenshot.png';
import StickyWrap from './components/StickyWrap'

const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      [theme.breakpoints.between('xs', 'sm')]: {
        flexDirection: 'column-reverse',
        textAlign: 'center',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        textAlign: 'center',
      },
    },
    doot: {      flexGrow: 1,
      textAlign: 'center',
      [theme.breakpoints.between('xs', 'sm')]: {
        flexDirection: 'column',
        textAlign: 'center',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        textAlign: 'center',
      },},
      soot: {      flexGrow: 1,
        [theme.breakpoints.between('xs', 'sm')]: {
          flexDirection: 'column',
          textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          textAlign: 'left',
        },},
      loot: {      flexGrow: 1,
        textAlign: 'center',

      },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: '#497f73',
      elevation: 5,
    },
  }));
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} alt="help" />
        <h1>Katy Sage
            </h1>
            <StickyWrap />
        </header>
  <h3>About Katy</h3>
    <div className="featured">
        <Grid 
        container
        className={classes.soot}
        spacing={3}>
              <Grid item xs={11} sm={8} md={7}>
                <p className="about">
              &nbsp; &nbsp; &nbsp; &nbsp; After graduating from the University of Notre Dame (Go Irish!), Katy went into the veterinary medicine field for several years before a career transition to software engineering. When she's not writing about herself in the third person, Katy can be found playing disc golf, hiking with her partner and their dog, or infuriating her friends by being more involved with the storyline than the combat in videogames. She has a passion for helping others and for problem-solving. </p>
        </Grid>
        </Grid>
        </div>
  <h3>Languages and Frameworks</h3>
    <div className={classes.loot}>
      <Grid container spacing={1}>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="amazonwebservices" logoStyle="original" size="4em" color="#c3e1d8"/>
              aws
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="bootstrap" logoStyle="plain" size="4em" color="#c3e1d8"/>
              bootstrap
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="css3" logoStyle="plain" size="4em" color="#c3e1d8"/>
              css3
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="django" logoStyle="plain" size="4em" color="#c3e1d8"/>
              django
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="express" logoStyle="original" size="4em" color="#c3e1d8"/>
              express
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="gimp" logoStyle="plain" size="4em" color="#c3e1d8"/>
              gimp
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="git" logoStyle="plain" size="4em" color="#c3e1d8"/>
              git
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="github" logoStyle="plain" size="4em" color="#c3e1d8"/>
              github
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="html5" logoStyle="plain" size="4em" color="#c3e1d8"/>
              html5
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="javascript" logoStyle="plain" size="4em" color="#c3e1d8"/>
              javascript
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="jquery" logoStyle="plain" size="4em" color="#c3e1d8"/>
              jquery
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="nginx"logoStyle="plain" size="4em" color="#c3e1d8"/>
              nginx
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="nodejs" logoStyle="plain" size="4em" color="#c3e1d8"/>
              nodejs
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="postgresql" logoStyle="plain" size="4em" color="#c3e1d8"/>
              postgresql
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="python" logoStyle="plain" size="4em" color="#c3e1d8"/>
              python
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="react" logoStyle="plain" size="4em" color="#c3e1d8"/>
              react
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="ubuntu" logoStyle="plain" size="4em" color="#c3e1d8"/>
              ubuntu
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="visualstudio" logoStyle="plain" size="4em" color="#c3e1d8"/>
              visualstudio
          </div>
          </Paper>
        </Grid>
        </Grid>
        </div>
  <h3>Featured Works</h3>
    <div className="featured">
        <Grid 
        container
        className={classes.root}
        justify="center"
        alignItems="center"
        spacing={3}>
              <Grid item xs={11} sm={8} md={4}>
                  <h4>Salon</h4>
                  <hr></hr>
                <div className="feat-content">
                  Salon is an app that will let a user browse through artistic pieces and start a conversation virtually. Users can search through The Art Institute of Chicago's extensive collection to learn more about each piece. Each user can create an account that lets them leave reviews of individual artwork, favorite artwork they love, and also comment on others' reviews. This is a fullstack project that was completed as part of a four person team remotely. <br /><br></br>
                  Built with Node.js, Express, & PostgreSQL.
                </div>
                <br></br>
                  <a className="button" href='https://salon-talk.com/' target="_blank" rel="noopener noreferrer">L<span className="cap1">IVE DEMO</span></a>
                <br></br>
                <br></br>
                  <a className="button" href='https://github.com/KatySage/Salon' target="_blank" rel="noopener noreferrer">G<span className="cap1">ITHUB</span></a>
                </Grid>
                <Grid item xs={11} sm={9} md={6}>
                  <img className="image" src={salon} alt=""></img>
                </Grid>
              </Grid>
              </div>
    <div className="featured1">
      <Grid 
        container
        className={classes.doot}
        justify="center"
        alignItems="center"
        spacing={2}>
              <Grid item xs={11} sm={9} md={6}>
                <img className="image" src={quiz} alt=""></img>
                </Grid>
                <Grid item xs={11} sm={8} md={4}>
                <h4>Quiz Yo'self</h4>
              <hr></hr>
              <div className="feat-content">
              This game was created through the use of a RESTful trivia API to populate the selection screen and the questions with unique content for each play. The game needed to be responsive in all sizes and work well on both desktop and mobile screens. Our 4-person team wanted to highlight a strong understanding of both UI/UX design and interactive Javascript.<br /><br></br>
              Built with JavaScript ES6, HTML5, a RESTful API, & CSS3.
              </div>
              <br></br>
                <a className="button" href='https://www.quiz-yoself.com/' target="_blank" rel="noopener noreferrer">L<span className="cap1">IVE DEMO</span></a>
              <br></br>
              <br></br>
                <a className="button" href='https://github.com/KatySage/Quiz-Yoself' target="_blank" rel="noopener noreferrer">G<span className="cap1">ITHUB</span></a>
                </Grid>
              </Grid>
            </div>
    <div className="featured2">
      <Grid 
        container
        className={classes.root}
        justify="center"
        alignItems="center"
        spacing={2}>
              <Grid item xs={11} sm={8} md={4}>
              <h4>Memory Game</h4>
              <hr></hr>
              <div className="feat-content">
              This is a simple card-based memory game. If two of the same cards are selected, they will stay flipped. If the symbols on the cards are not a match, they will flip over after a specific timeout.This game was built primarily to show an understanding of React and deployment on AWS Amplify.<br /><br></br>
              Built with React & AWS.
              </div>
              <br></br>
                <a className="button" href='https://master.dli501o8hqbxr.amplifyapp.com/' target="_blank" rel="noopener noreferrer">L<span className="cap1">IVE DEMO</span></a>
              <br></br>
              <br></br>
                <a className="button" href='https://github.com/KatySage/memory-game' target="_blank" rel="noopener noreferrer">G<span className="cap1">ITHUB</span></a>
              <br></br>
                </Grid>
                <Grid item xs={11} sm={9} md={6}>
                  <img className="image" src={memory} alt=""></img>
                </Grid>
              </Grid>
        </div>
    <footer>
    <br></br>
      <a className="button2" href="mailto: katysage1@gmail.com" target="_blank" rel="noopener noreferrer"><span className="big-cap">L</span><span className="cap">ET'S GET IN TOUCH.</span></a>
      {/* <p>
      <a href="https://www.linkedin.com/in/katy-sage-86502718b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo"></img>
      </a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/katysage" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo"></img>
      </a></p> */}
      <p>© katysage.com. 2020.
Image: <a href="https://unsplash.com/@paulearlephotography" className="credit" target="_blank" rel="noopener noreferrer">Paul Earle Photography</a> at Unsplash</p>
              <br></br>
  </footer></div>
  );
}

export default App;
