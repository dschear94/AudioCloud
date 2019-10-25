export const relativeTime = (timeStamp) => {
    const d = new Date( timeStamp * 1000 );
    const now = new Date(),
        secondsPast = (now.getTime() - d.getTime()) / 1000;
        debugger
    if (secondsPast < 60) {
        return parseInt(secondsPast) + 's';
    }
    if (secondsPast < 3600) {
        return parseInt(secondsPast / 60) + 'm';
    }
    if (secondsPast <= 86400) {
        return parseInt(secondsPast / 3600) + 'h';
    }
    if (secondsPast > 86400) {
        const day = d.getDate();
        const month = d.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
        const year = d.getFullYear() == now.getFullYear() ? "" : " " + d.getFullYear();
        return day + " " + month + year;
    }
}