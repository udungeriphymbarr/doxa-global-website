import "./Welcome.css";
import church from "../../../data/church";
import pastorImage from "../../../assets/images/pastor/pastor.jpg";
import Button from "../../common/Button";

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-container">
        <div className="welcome-image">
          <img
            src={pastorImage}
            alt={`Pastor ${church.pastor}`}
          />
        </div>

        <div className="welcome-content">
          <p className="section-tag">
            Welcome to {church.name}
          </p>

          <h2>
            Equipping Believers. Transforming Nations.
          </h2>

          <p>
            At KINGDOM COMMUNITY CHURCH, we are passionate about revealing Jesus Christ,
            raising disciples, and transforming lives through the power of
            God's Word. Whether you are visiting for the first time or
            searching for a church family, we warmly welcome you.
          </p>

          <p>
            Under the leadership of <strong>{church.pastor}</strong>,
            our mission is to help people grow spiritually, discover their
            purpose, and experience the reality of God's glory.
          </p>

          <Button
            to="/about"
            variant="primary"
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;