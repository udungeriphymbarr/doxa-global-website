import "./PastorSection.css";

import pastorImage from "../../../assets/images/pastor/pastor.jpg";

function PastorSection() {
  return (
    <section className="pastor-section">
      <div className="pastor-container">
        <div className="pastor-image">
          <img src={pastorImage} alt="Senior Pastor" />
        </div>

        <div className="pastor-content">
          <p className="pastor-label">Meet Our Pastor</p>

          <h2>
            Senior Pastor
            <br />
            <span>(Pastor)</span>
          </h2>

          <h3>Apostolic Voice. Visionary Leader.</h3>

          <p>
            The Senior Pastor of Kingdom Community Church is a passionate
            servant of God committed to teaching the uncompromised Word of God
            and raising believers who reflect the character of Christ in every
            area of life. With a heart for discipleship, leadership development,
            and community transformation, the ministry is dedicated to equipping
            people to grow in their faith, discover their God-given purpose, and
            make a lasting impact in their families, workplaces, and
            communities.
          </p>

          <p>
            Through biblical teaching, prayer, and practical leadership, the
            church continues to build a Christ-centered community where lives
            are transformed, leaders are developed, and people are empowered to
            serve God with excellence.
          </p>

          <p>
            <strong>Note:</strong> This biography is placeholder content for this website
            demonstration. It will be replaced with the official profile of your
            church's pastor during customization.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PastorSection;
