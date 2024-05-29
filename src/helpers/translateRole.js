function translateRole(role) {
    switch (role) {
        case 'ROLE_PARENT':
            return 'ouder';
        case 'ROLE_VOLUNTEER':
            return 'vrijwilliger';
        default:
            return 'onbekend'; // just in case
    }
}
export default translateRole;