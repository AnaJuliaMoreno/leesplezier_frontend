// Function to map English day names to Dutch day names
const translateDay = (englishDay) => {
    const dayMap = {
        Monday: 'maandag',
        Tuesday: 'dinsdag',
        Wednesday: 'woensdag',
        Thursday: 'donderdag',
        Friday: 'vrijdag',
        Saturday: 'zaterdag',
        Sunday: 'zondag'
    };
    return dayMap[englishDay];
};

export default translateDay;