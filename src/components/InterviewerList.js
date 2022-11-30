import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewerList.scss";

export default function InterviewerList(props) {

  const interviewers = props.interviewers;
  const interviewerListItems = interviewers.map((i) =>
    <InterviewerListItem
      key={i.id}
      id={i.id}
      name={i.name}
      avatar={i.avatar}
      selected={i.id === props.interviewer}
      setInterviewer={() => props.setInterviewer(i.id)} />
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerListItems}</ul>
    </section>
  );
}