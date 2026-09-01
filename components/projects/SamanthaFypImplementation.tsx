"use client";

import { useEffect, useState } from "react";

const stories = [
  {
    number: "01",
    eyebrow: "PATIENT EXPERIENCE",
    title: "Health information in one place.",
    description:
      "The patient dashboard acts as the starting point for TeleCardio, bringing together appointments, medication reminders and daily health guidance before users move into monitoring and cardiovascular risk assessment.",
    screens: [
      {
        title: "Patient Dashboard",
        image: "/projects/fyp/telecardio/patient-dashboard.png",
      },
      {
        title: "Risk Assessment",
        image: "/projects/fyp/telecardio/risk-profile.png",
      },
      {
        title: "Health Monitoring",
        image: "/projects/fyp/telecardio/health-report.png",
      },
    ],
  },

  {
    number: "02",
    eyebrow: "CLINICAL CARE",
    title: "Connecting patients and doctors.",
    description:
      "The consultation workflow connects appointment booking with the doctor's clinical workspace and remote video consultation, supporting both face-to-face and telemedicine care.",
    screens: [
      {
        title: "Doctor Dashboard",
        image: "/projects/fyp/telecardio/doctor-dashboard.png",
      },
      {
        title: "Book Appointment",
        image: "/projects/fyp/telecardio/book-appointment.png",
      },
      {
        title: "Video Consultation",
        image: "/projects/fyp/telecardio/video-consultation.png",
      },
    ],
  },

  {
    number: "03",
    eyebrow: "MEDICATION & ACCESS",
    title: "Care continues after consultation.",
    description:
      "Medication management extends the care journey with medicine tracking, prescription support, drug-interaction guidance and pharmacy discovery.",
    screens: [
      {
        title: "Medication Management",
        image: "/projects/fyp/telecardio/medication-management.png",
      },
      {
        title: "eRx Prescription",
        image: "/projects/fyp/telecardio/create-erx.png",
      },
      {
        title: "Pharmacy Locator",
        image: "/projects/fyp/telecardio/pharmacy-locator.png",
      },
    ],
  },
];

export default function SamanthaFypImplementation() {
  const [activeScreens, setActiveScreens] = useState([0, 0, 0]);

  const [lightbox, setLightbox] = useState<{
    storyIndex: number;
    screenIndex: number;
  } | null>(null);

  const selectScreen = (
    storyIndex: number,
    screenIndex: number
  ) => {
    setActiveScreens((current) => {
      const next = [...current];
      next[storyIndex] = screenIndex;
      return next;
    });
  };

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  return (
    <>
      <section
        className="samFypImplementation"
        aria-labelledby="sam-fyp-implementation-title"
      >
        <header className="samFypImplHeader">
          <div>
            <small>PRODUCT WALKTHROUGH</small>

            <h4 id="sam-fyp-implementation-title">
              Inside TeleCardio.
            </h4>

            <p>
              A closer look at the patient, clinical and
              continuing-care experiences implemented across
              the application.
            </p>
          </div>
        </header>

        <div className="samFypStories">
          {stories.map((story, storyIndex) => {
            const activeIndex = activeScreens[storyIndex];
            const active = story.screens[activeIndex];

            const secondaryScreens = story.screens
              .map((screen, index) => ({
                ...screen,
                index,
              }))
              .filter(
                (screen) => screen.index !== activeIndex
              );

            return (
              <article
                key={story.number}
                className={
                  storyIndex % 2 === 1
                    ? "samFypStory isReverse"
                    : "samFypStory"
                }
              >
                <div className="samFypStoryCopy">
                  <span className="samFypStoryNumber">
                    {story.number}
                  </span>

                  <small>{story.eyebrow}</small>

                  <h5>{story.title}</h5>

                  <p>{story.description}</p>

                  <div className="samFypStoryIndex">
                    <span>01</span>
                    <i />
                    <span>03</span>
                  </div>
                </div>

                <div className="samFypScreenComposition">
                  {/* BIG / ACTIVE SCREEN */}
                  <figure className="samFypPrimaryScreen">
                    <button
                      type="button"
                      className="samFypPrimaryImage"
                      onClick={() =>
                        setLightbox({
                          storyIndex,
                          screenIndex: activeIndex,
                        })
                      }
                      aria-label={`View ${active.title} full size`}
                    >
                      <img
                        src={active.image}
                        alt={`${active.title} implementation screen`}
                      />

                      <span className="samFypViewImage">
                        View image ↗
                      </span>
                    </button>

                    <figcaption>
                      <span>
                        {String(activeIndex + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <strong>{active.title}</strong>

                      <small>ACTIVE VIEW</small>
                    </figcaption>
                  </figure>

                  {/* TWO SMALL SCREENS */}
                  <div className="samFypSecondaryScreens">
                    {secondaryScreens.map((screen) => (
                      <figure
                        key={screen.title}
                        className="samFypSecondaryScreen"
                      >
                        <button
                          type="button"
                          className="samFypSecondaryImage"
                          onClick={() =>
                            selectScreen(
                              storyIndex,
                              screen.index
                            )
                          }
                          aria-label={`Show ${screen.title} as main image`}
                        >
                          <img
                            src={screen.image}
                            alt={`${screen.title} implementation screen`}
                          />

                          <span className="samFypSwapHint">
                            View →
                          </span>
                        </button>

                        <figcaption>
                          <span>
                            {String(
                              screen.index + 1
                            ).padStart(2, "0")}
                          </span>

                          <strong>{screen.title}</strong>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* FULL IMAGE VIEWER */}
      {lightbox && (
        <div
          className="samFypLightbox"
          role="dialog"
          aria-modal="true"
          aria-label="TeleCardio screenshot viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setLightbox(null);
            }
          }}
        >
          <div className="samFypLightboxPanel">
            <div className="samFypLightboxTop">
              <div>
                <small>
                  {
                    stories[lightbox.storyIndex]
                      .eyebrow
                  }
                </small>

                <strong>
                  {
                    stories[lightbox.storyIndex]
                      .screens[lightbox.screenIndex]
                      .title
                  }
                </strong>
              </div>

              <button
                type="button"
                onClick={() => setLightbox(null)}
              >
                Close ×
              </button>
            </div>

            <div className="samFypLightboxImage">
              <img
                src={
                  stories[lightbox.storyIndex]
                    .screens[lightbox.screenIndex]
                    .image
                }
                alt={
                  stories[lightbox.storyIndex]
                    .screens[lightbox.screenIndex]
                    .title
                }
              />
            </div>

            <div className="samFypLightboxBottom">
              <span>
                Press Esc to close
              </span>

              <span>
                TeleCardio / Final Year Project
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}