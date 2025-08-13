import { Tooltip } from "react-tooltip";

export default function ProfileCard({ image, id, name, dob }) {
  const elementName = `${id}-element`;
  const anchorName = `.${elementName}`;
  return (
    <div class="pfp-card">
      <div class="pfp-i">
        <div className={elementName}>
          <img src={image} alt={name} />
        </div>
        <Tooltip
          className="profile-card-tooltip"
          classNameArrow="profile-card-arrow"
          anchorSelect={anchorName}
          place="bottom"
          offset={-100}
        >
          <h1>{name}</h1>
          <p>{dob}</p>
        </Tooltip>
      </div>
    </div>
  );
}
