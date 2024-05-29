function extractRole(input) {
    const parts = input.split("_");
    return parts[1].toLowerCase() + "s";
}
export default extractRole;