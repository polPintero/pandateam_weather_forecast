export default function (list) {
  console.log(list);
  let nextDay = getNextDay();
  console.log(nextDay);
  const result = [];
  let nextForecast = [];
  list.forEach((item) => {
    if (item.dt < nextDay / 1000) {
      nextForecast.push(item);
      return;
    }
    result.push([...nextForecast]);
    nextForecast = [];
    nextDay = getNextDay(new Date(item.dt * 1000));
  });
  return result;
}

function getNextDay(day = new Date()) {
  day.setDate(day.getDate() + 1);
  day.setHours(0, 0, 0, 0);
  return day.getTime();
}
