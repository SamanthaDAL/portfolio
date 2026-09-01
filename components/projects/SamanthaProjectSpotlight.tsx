"use client";

import { useMemo, useState } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";
import {
  categoryLabels,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

import SamanthaFypImplementation from "./SamanthaFypImplementation";

const order: ProjectCategory[] = [
  "personal-portfolio",
  "internship",
  "fyp",
  "university",
];

const icons: Record<ProjectCategory, IconName> = {
  "personal-portfolio": "code",
  internship: "briefcase",
  fyp: "graduation",
  university: "book",
};

function wrap(index: number, length: number) {
  if (!length) return 0;
  return (index + length) % length;
}

export default function SamanthaProjectSpotlight({
  allProjects,
}: {
  allProjects: Project[];
}) {
  const groups = useMemo(
    () =>
      order.map((category) => ({
        category,
        label: categoryLabels[category],
        projects: allProjects.filter((project) => project.category === category),
      })),
    [allProjects]
  );

  const [category, setCategory] =
    useState<ProjectCategory>("personal-portfolio");

  const [indexes, setIndexes] = useState<Record<ProjectCategory, number>>({
    "personal-portfolio": 0,
    internship: 0,
    fyp: 0,
    university: 0,
  });

  const group = groups.find((item) => item.category === category)!;
  const items = group.projects;
  const currentIndex = wrap(indexes[category] ?? 0, items.length);
  const current = items[currentIndex];
  const previous = items[wrap(currentIndex - 1, items.length)];
  const next = items[wrap(currentIndex + 1, items.length)];

  const choose = (index: number) => {
    setIndexes((old) => ({ ...old, [category]: wrap(index, items.length) }));
  };

  const move = (direction: -1 | 1) => {
    if (items.length <= 1) return;
    choose(currentIndex + direction);
  };

  if (!current) return null;

  return (
    <div className="samSpotlight">
      <div className="samSpotlightTabs" role="tablist" aria-label="Project categories">
        {groups.map((item) => (
          <button
            key={item.category}
            type="button"
            role="tab"
            aria-selected={category === item.category}
            className={category === item.category ? "active" : ""}
            onClick={() => setCategory(item.category)}
          >
            <Icon name={icons[item.category]} size={17} />
            <span>{item.label}</span>
            <small>{item.projects.length}</small>
          </button>
        ))}
      </div>

      <div className={`samSpotlightStage ${items.length === 1 ? "single" : ""}`}>
        {items.length > 1 && (
          <button
            type="button"
            className="samSpotlightSide samSpotlightPrevious"
            onClick={() => move(-1)}
            aria-label={`Previous project: ${previous.title}`}
          >
            <small>PREVIOUS</small>
            <strong>{previous.title}</strong>
            <p>{previous.summary}</p>
            <span>
              Open previous <Icon name="arrow" size={14} />
            </span>
          </button>
        )}

        <article
          className={`samSpotlightCurrent ${current.category === "fyp"
              ? "samSpotlightCurrentFyp"
              : ""
            }`}
        >
          {current.category !== "fyp" && (
            <div className="samSpotlightVisual">
              <div className="samSpotlightWindow">
                <div className="samSpotlightWindowBar">
                  <i />
                  <i />
                  <i />
                  <span>PROJECT PREVIEW</span>
                </div>

                <div className="samSpotlightWindowBody">
                  <div className="samSpotlightSidebar">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="samSpotlightMain">
                    <b />
                    <b />

                    <div>
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="samSpotlightCopy">
            <div className="samSpotlightMeta">
              <span>{group.label}</span>

              <small>
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </small>
            </div>

            <h3>{current.title}</h3>

            <p>{current.summary}</p>

            <div className="samTags">
              {current.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          {current.category === "fyp" && (
            <SamanthaFypImplementation />
          )}

          {current.category !== "fyp" && (
            <div className="samSpotlightFooter">
              <span>
                Case study, screenshots and links will be added later.
              </span>
            </div>
          )}
        </article>

        {items.length > 1 && (
          <button
            type="button"
            className="samSpotlightSide samSpotlightNext"
            onClick={() => move(1)}
            aria-label={`Next project: ${next.title}`}
          >
            <small>NEXT</small>
            <strong>{next.title}</strong>
            <p>{next.summary}</p>
            <span>
              Open next <Icon name="arrow" size={14} />
            </span>
          </button>
        )}
      </div>

      {items.length > 1 && (
        <div className="samSpotlightDots" aria-label="Project selector">
          {items.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={index === currentIndex ? "active" : ""}
              onClick={() => choose(index)}
              aria-label={`View ${project.title}`}
            >
              <span />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
