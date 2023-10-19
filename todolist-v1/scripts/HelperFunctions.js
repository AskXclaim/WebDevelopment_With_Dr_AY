"use strict";

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getTodosDateOptions = () => {
  return {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
};

const getIndexEjsModel = (items, title = null) => {
  if (items) {
    const today = new Date();
    const dayOfTheweek = daysOfTheWeek[today.getDay()];
    const currentTime = today.toLocaleTimeString();
    return {
      title: title ?? dayOfTheweek.toUpperCase(),
      currentTime: currentTime,
      todosDate: today.toLocaleDateString(undefined, getTodosDateOptions()),
      newItems: items,
    };
  }
  throw new Error("Invalid parameters supplied");
};

module.exports = {
  daysOfTheWeek,
  getTodosDateOptions,
  getIndexEjsModel,
};
