import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {

  const days = props.days;
  const dayListItems = days.map((d) =>
    <DayListItem
      key={d.id}
      name={d.name}
      spots={d.spots}
      selected={d.name === props.value}
      setDay={props.onChange}
    />
  );

  return (
    <ul>
      {dayListItems}
    </ul>
  );
}