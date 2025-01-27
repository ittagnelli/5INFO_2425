export const rm_string = (s, r) => {
    const index = s.indexOf(r);

    if (index == -1) {
        return s;
    }

    let prima = s.slice(0, index).trimEnd()
    let dopo = s.slice(index + r.length).trimStart()

    if (prima && dopo) {
        return prima + " " + dopo
    } else if (prima) {
        return prima
    } else {
        return dopo
    }
};