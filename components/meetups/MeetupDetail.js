import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";
const MeetupDetail = () => {
  return (
    <section className={classes.detail}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/420px-PNG_transparency_demonstration_1.png"
        alt="다이스그림"
      />
      <h1>gf</h1>
      <address>경기도</address>
      <p>description</p>
    </section>
  );
};

export default MeetupDetail;
