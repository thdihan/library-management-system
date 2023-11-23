export function formatDateAndTime(dateString) {
    // let newDateString;
    // if (typeof dateString === "string") {
    //   newDateString = dateString.replace(/\.\d+Z$/, ".000+06:00");
    // } else {
    //   console.log("DATAAAA: ", dateString);
    //   newDateString = dateString.toISOString().replace(/\.\d+Z$/, ".000+06:00");
    // }

    const date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are 0-based, so we add 1
    let year = date.getFullYear();

    let hours = date.getHours();
    if (hours < 0) {
        hours += 24;
    }
    let minutes = date.getMinutes();
    console.log(date);

    // Determine AM or PM
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    if (hours > 12) {
        hours -= 12;
    }

    // Add leading zeros to day, month, hours, and minutes if needed
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // Create the formatted date and time string
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes} ${amOrPm}`;

    return { date: formattedDate, time: formattedTime };
}

export function convertDateToTime(dateString) {
    const date = new Date(dateString);
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}
