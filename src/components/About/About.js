import about_img from "../../assets/images/about_img.jpg";

function About() {
  return (
    <div className="about">
      <img className="about__image" src={about_img} alt="about the author" />
      <div className="about__info">
        <h2 className="about__info-header">About the author</h2>
        <p className="about__info-content">
          Hi, My name is Shimrit Breef Ziskand, I am developing my final project
          for my Fullstack web development bootcamp with Practicum100 by Yandex.
        </p>

        <p className="about__info-content">
          I'm excited to show you the knowledge ive gain in this program through
          this frontend and backend project. enjoy and Thank you!
        </p>
      </div>
    </div>
  );
}

export default About;
