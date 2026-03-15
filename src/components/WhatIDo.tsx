import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
  <h3>BUSINESS DEVELOPMENT</h3>
  <h4>Accelerating Business Growth</h4>
  <p>
    {/* Building strong client relationships and identifying new revenue opportunities
    across diverse markets. Focused on understanding customer needs, resolving
    challenges, and delivering tailored solutions that create long-term partnerships
    and sustainable business growth. */}
  </p>
  <h5>Core Expertise</h5>
  <div className="what-content-flex">
    <div className="what-tags">Client Relationship Management</div>
    <div className="what-tags">Revenue Growth</div>
    <div className="what-tags">Strategic Partnerships</div>
    <div className="what-tags">Solution Selling</div>
    <div className="what-tags">Negotiation</div>
    <div className="what-tags">Pipeline Development</div>
  </div>
  <div className="what-arrow"></div>
</div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
  <h3>GROWTH PROFFESIONAL</h3>
  <h4>Data-Driven Performance Strategy</h4>
  <p>
    {/* Managing CRM systems, sales reporting, and forecasting to support strategic
    decision-making. Experienced in order processing, pricing strategies, margin
    awareness, and preparing accurate takeoffs, scope reviews, estimates, and
    quotations that streamline the sales cycle and improve conversions. */}
  </p>
  <h5>Skillset & Tools</h5>
  <div className="what-content-flex">
    <div className="what-tags">CRM Management</div>
    <div className="what-tags">Sales Forecasting/Reporting</div>
    <div className="what-tags">Order Processing</div>
    <div className="what-tags">Pricing Strategy</div>
    <div className="what-tags">Takeoffs & Estimates</div>
    <div className="what-tags">Scope Reviews</div>
  </div>
  <div className="what-arrow"></div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
