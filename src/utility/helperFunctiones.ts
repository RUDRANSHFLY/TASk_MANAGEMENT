export function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Add leading zero if month/day is single digit
    if (month < 10) {
      month = parseInt(`0${month.toString()}`);
    }
    if (day < 10) {
      day = parseInt(`0${day.toString()}`);
    }

    return `${year}-${month}-${day}`;
  }