import about_img from "../../assets/images/about_img.jpg";

function About() {
  return (
    <div className="about">
      <img className="about__image" src={about_img} alt="about the author" />
      <div className="about__info">
        <h2 className="about__info-header">About the author</h2>
        <p className="about__info-content">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>

        <p className="about__info-content">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
