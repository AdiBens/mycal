"use strict";

const calendarElement = document.querySelector("#calendar");

const todo = localStorage.getItem("tasks");
console.log(todo);

const calOptions = {
  initialView: "dayGridMonth",
  events: [
    {
      id: "ggg",
      title: "New Meting",
      start: "2022-12-21 18:00",
      end: "2022-12-21 20:00",
    },
  ],
  dateClick: (info) => console.log(info.date),
};
const calendar = new FullCalendar.Calendar(calendarElement, calOptions);

calendar.render();

const myDate = new Date();
const anotherDate = new Date("03/30/1996");

let users = [
  {
    title: "adi",
    due: "20-12-2022",
  },
  {
    title: "tom",
    due: "20-11-2022",
  },
];

const events = [];
for (const user of users) {
  let newUser = {
    id: "ggg",
    title: user.title,
    start: "2022-12-21 18:00",
    end: "2022-12-21 20:00",
  };
}
