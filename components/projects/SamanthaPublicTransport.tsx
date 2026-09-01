"use client";

import { useEffect, useState } from "react";

const features = [
  {
    number: "01",
    key: "track",
    label: "TRACK",
    title: "Live Vehicle Tracking",
    description:
      "View available public transport vehicles on the map, select a vehicle, inspect its route and follow its updated position.",
  },
  {
    number: "02",
    key: "search",
    label: "SEARCH",
    title: "Location & Route Search",
    description:
      "Search for locations and transport information so users can understand available services before planning the next part of their journey.",
  },
  {
    number: "03",
    key: "plan",
    label: "PLAN",
    title: "Journey Planner",
    description:
      "Connect a starting point and destination with route information, walking distance, stops and transfers in one continuous journey flow.",
  },
  {
    number: "04",
    key: "compare",
    label: "COMPARE",
    title: "Journey Recommendations",
    description:
      "Compare route options such as Recommended, Least Walking, Least Stops and Fastest Time based on the available transport data.",
  },
];

export default function SamanthaPublicTransport() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const active = features[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }

      if (!isExpanded) return;

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0
            ? features.length - 1
            : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === features.length - 1
            ? 0
            : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [isExpanded]);

  return (
    <>
      <section
        className="samTransport"
        aria-labelledby="sam-transport-title"
      >
        <header className="samTransportHeader">
          <div>
            <small>PRODUCT WALKTHROUGH</small>

            <h4 id="sam-transport-title">
              One connected journey.
            </h4>
          </div>

          <p>
            A public transport experience that brings
            vehicle tracking, location search, route
            planning and journey recommendations into
            one focused workflow.
          </p>
        </header>

        <div className="samTransportStage">
          <div className="samTransportImageArea">
            <div className="samTransportImageTop">
              <div>
                <span>PROJECT VIEW</span>

                <strong>
                  Public Transport Tracker & Route Planner
                </strong>
              </div>

              <button
                type="button"
                onClick={() => setIsExpanded(true)}
              >
                View image ↗
              </button>
            </div>

            <button
              type="button"
              className="samTransportImageButton"
              onClick={() => setIsExpanded(true)}
              aria-label="Open Public Transport Tracker and Route Planner screenshot"
            >
              <img
                src="/projects/internship/public-transport/dashboard.png"
                alt="Public Transport Tracker and Route Planner dashboard"
              />

              <span className="samTransportImageHint">
                Click to explore full screen
              </span>
            </button>
          </div>

          <aside className="samTransportStory">
            <div className="samTransportStoryTop">
              <span>{active.number}</span>

              <small>{active.label}</small>
            </div>

            <h5>{active.title}</h5>

            <p>{active.description}</p>

            <div className="samTransportProgress">
              <span>
                {String(activeIndex + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <div>
                <i
                  style={{
                    width: `${
                      ((activeIndex + 1) /
                        features.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              <span>
                {String(features.length).padStart(
                  2,
                  "0"
                )}
              </span>
            </div>
          </aside>
        </div>

        <div
          className="samTransportFeatures"
          aria-label="Project features"
        >
          {features.map((feature, index) => (
            <button
              key={feature.key}
              type="button"
              className={
                index === activeIndex
                  ? "isActive"
                  : ""
              }
              onClick={() => setActiveIndex(index)}
            >
              <span>{feature.number}</span>

              <div>
                <small>{feature.label}</small>

                <strong>{feature.title}</strong>
              </div>

              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>
      </section>

      {isExpanded && (
        <div
          className="samTransportLightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Public Transport Tracker and Route Planner full screenshot"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setIsExpanded(false);
            }
          }}
        >
          <div className="samTransportLightboxTop">
            <div>
              <small>
                PUBLIC TRANSPORT TRACKER
              </small>

              <strong>
                Route Planner Dashboard
              </strong>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(false)}
            >
              Close ×
            </button>
          </div>

          <div className="samTransportLightboxImage">
            <img
              src="/projects/internship/public-transport/dashboard.png"
              alt="Full Public Transport Tracker and Route Planner dashboard"
            />
          </div>

          <div className="samTransportLightboxBottom">
            <span>
              {active.number} · {active.label}
            </span>

            <p>{active.title}</p>
          </div>
        </div>
      )}
    </>
  );
}