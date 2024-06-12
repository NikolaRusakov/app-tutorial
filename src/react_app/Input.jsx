import React from "react";
// import Calendar from 'tui-calendar'; /* ES6 */
// import "tui-calendar/dist/tui-calendar.css";

// // If you use the default popups, use this.
// import 'tui-date-picker/dist/tui-date-picker.css';
// import 'tui-time-picker/dist/tui-time-picker.css';

import Calendar from "@toast-ui/react-calendar";
// import "@toast-ui/calendar/dist/toastui-calendar.min.css";

export default function Input(props) {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} />
      <Calendar usageStatistics={false} />
    </div>
  );
}
