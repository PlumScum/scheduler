import React from "react";
import DayListItem from "./DayListItem";

const DayList = ({ days, selectedDay, setDay }) => {
  return (
    <div>
      <h2>Select a Day</h2>
      <ul>
        {days.map((day, index) => (
          <li
            key={index}
            onClick={() => setDay(day)}
            className={selectedDay === day ? 'selected' : ''}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayList;
