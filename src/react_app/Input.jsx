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
    <div className="flex flex-col">
      <input
        className="flex h-9 w-1/2 p-4 m-4 self-center rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        value={props.value}
        onChange={props.onChange}
      />
      <Calendar usageStatistics={false} />
    </div>
  );
}
