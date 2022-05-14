import s from "./Projects.module.css";
export default function Links({ pathDemo, pathGitHub }) {
  return (
    <div className={s.linksWrap}>
      <a
        target="_blank"
        rel="noreferrer"
        className={["btn", "btn-light", s.link].join(" ")}
        href={pathDemo}
      >
        Demo
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className={["btn", "btn-light", s.link].join(" ")}
        href={pathGitHub}
      >
        GitHub
      </a>
    </div>
  );
}
