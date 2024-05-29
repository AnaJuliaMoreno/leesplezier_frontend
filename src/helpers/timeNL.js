function timeNl(timeString) {
    const [hours, minutes] = timeString.split(":");
    return `${hours} uur ${minutes}`;
}
export default timeNl;