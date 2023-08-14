import React from 'react';
import DayListItem from './DayListItem';

const DayList = ({ days, selectedDay, setDay }) => {
  return (
    <div>
      <h2>Select a Day</h2>
      <ul>
        {days.map((day, index) => (
          <DayListItem
            key={index}
            name={day.name}
            spots={day.spots}
            selected={selectedDay === day.name}
            setDay={setDay}
          />
        ))}
      </ul>
    </div>
  );
};

export default DayList;