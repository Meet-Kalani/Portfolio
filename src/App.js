import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Card from "./components/Card";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const mainStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg1.png)`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  };

  const frontEndTechnologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Angular 1.x",
    "ReactJS",
  ];
  const backEndTechnologies = ["NodeJS", "ExpressJS", "MongoDB"];

  return (
    <section style={mainStyle}>
      <Header />
      <Intro />
      <section className="row justify-content-around align-items-center">
        <div className="col-12 my-5">
          <h2 className="text-uppercase text-center mb-0">Skills</h2>
        </div>
        <div className="col-lg-3 col-12">
          <Card
            desc="I like to code things from scratch, and enjoy bringing ideas and thoughts to life."
            title="Front-end"
            technologies={frontEndTechnologies}
            key="1"
          />
        </div>
        <div className="col-lg-3 col-12">
          <Card
            desc="Back-end is just like mind in our body, So it is much needed to handle business logic."
            title="Back-end"
            technologies={backEndTechnologies}
            key="2"
          />
        </div>
      </section>
      <section
        className="w-100 h-100 row justify-content-center align-items-center"
        id="project-section"
      >
        <div className="col-12">
          <h2 className="text-uppercase text-center mb-0">Projects</h2>
        </div>
        <div className="col-10">
          <Project
            path=`${procces.env.PUBLIC_URL}/images/todo-list.png`
            alt="To-Do List"
            desc="The Project is all about To-Do List. You can create your own Different todos to your own task and it has login functionality so you can easily access it through Mobile, Desktop, Laptop or Tablet. Todos have different priorities like High, Medium and Low as well as different Status like To Do, Doing and Done. So you can easily determine your next task."
            usedTech="Angular 1.x, NodeJS, ExpressJS, MongoDB, HTML, CSS, JavaScript"
            key="1"
            link="https://task-iton.herokuapp.com"
          />
        </div>
        <div className="col-10">
          <Project
            path=`${procces.env.PUBLIC_URL}/images/corona-project.png`
            alt="Corona Tracker"
            desc="Go Corona Go Project is about showing data of Covid Cases. On this website you can search through among all contries and see their Total corona cases, Total deaths, Total Recovered and much more data related their country's corona cases"
            usedTech="NodeJS, ExpressJS, Bootstrap, HTML, CSS, JavaScript"
            key="2"
            link="http://go-corona-go-stats.herokuapp.com/"
          />
        </div>
        <div className="col-10">
          <Project
            path=`${procces.env.PUBLIC_URL}/images/youtube-downloader.png`
            alt="Youtube Downloader"
            desc="By using Blowdown--load you can easily convert YouTube videos to mp3 (audio) files and download them for free - this service works for computers, tablets and mobile devices."
            usedTech="NodeJS, ExpressJS, Bootstrap, Paticles.js, HTML, CSS, JavaScript"
            key="3"
            link="https://blowdown--load.herokuapp.com/"
          />
        </div>
        <div className="col-10">
          <Project
            path=`${procces.env.PUBLIC_URL}/images/web-dev.png`
            alt="Web Dev"
            desc="Web Dev Project is based upon a fictional Website creator firm that leads in Web Development, Web Designning, SEO and more. Web Dev is Front end only website the main focus of the website is animation."
            usedTech="HTML, CSS, JavaScript, Bootstrap, WOW.js"
            key="4"
            link="https://meetkalani.github.io/Web-Dev"
          />
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default App;
