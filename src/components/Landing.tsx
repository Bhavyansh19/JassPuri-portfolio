import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              JASS
              <br />
              <span>PURI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Business</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Development</div>
              <div className="landing-h2-2">Associate</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Associate</div>
              <div className="landing-h2-info-1">Development</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
