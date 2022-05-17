export function getMaxDate() {
  var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear() - 18;

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  const maxDate = [year, month, day].join('-');
  return maxDate;
}

export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

export function getAge(date) {
  var birthdate = new Date(date);
  var cur = new Date();
  var diff = cur - birthdate; // This is the difference in milliseconds
  var age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25
  return age;
}
