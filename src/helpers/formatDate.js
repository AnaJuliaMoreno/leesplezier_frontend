const formatDate = (dateString) => {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const date = new Date(dateString.replace(/-/g, '/')); // Replace dashes with slashes to ensure compatibility with all browsers
    return date.toLocaleDateString('nl-NL', options); // Use 'nl-NL' for Dutch locale
}

export default formatDate;