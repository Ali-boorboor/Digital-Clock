const $ = document;

setInterval(() => {
  const hourElem = $.getElementById("hour-elem");
  const minuteElem = $.getElementById("minute-elem");
  const secondElem = $.getElementById("second-elem");
  const dateElem = $.getElementById("date-elem");
  const newDate = new Date();

  hourElem.innerHTML < 10
    ? (hourElem.innerHTML = `0${newDate.getHours()}`)
    : (hourElem.innerHTML = newDate.getHours());
  minuteElem.innerHTML < 10
    ? (minuteElem.innerHTML = `0${newDate.getMinutes()}`)
    : (minuteElem.innerHTML = newDate.getMinutes());
  secondElem.innerHTML < 9
    ? (secondElem.innerHTML = `0${newDate.getSeconds()}`)
    : (secondElem.innerHTML = newDate.getSeconds());
  dateElem.innerHTML = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
}, 1000);