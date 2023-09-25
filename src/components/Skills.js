import skills from "../assets/img/skills.png";
import skills1 from "../assets/img/skills1.png";
import skills2 from "../assets/img/skills2.png";
import skills3 from "../assets/img/skills3.png";
import skills4 from "../assets/img/skills4.png";
import skills5 from "../assets/img/skills5.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Currently employed as a Software Developer at Kernel Solution,
                <br />I have had the privilege of contributing my skills and expertise to the development of innovative software solutions. <br />
                My journey began as a Jr. Software Engineer at SolutionArt Ltd,
                <br />where I had the opportunity to hone my programming skills and immerse myself in the world of web development.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={skills} alt="Image" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={skills2} alt="Image" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={skills1} alt="Image" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={skills3} alt="Image" />
                  <h5>ASP.NET</h5>
                </div>
                <div className="item">
                  <img src={skills4} alt="Image" />
                  <h5>MS SQL Server</h5>
                </div>
                <div className="item">
                  <img src={skills5} alt="Image" />
                  <h5>Version Control (GIT)</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
