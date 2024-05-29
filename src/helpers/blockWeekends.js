function blockWeekends(event) {
    const selectedDate = new Date(event.target.value);
    if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
        event.target.setCustomValidity('Er zijn geen weekend-sessies');
    } else {
        event.target.setCustomValidity('');
    }
}
export default blockWeekends;