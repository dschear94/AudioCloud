export const relativeTime = (timeStamp) => {
    const d = new Date( timeStamp * 1000 );
    const now = new Date(),
        secondsPast = (now.getTime() - d.getTime()) / 1000;
    if (secondsPast < 60) {
        return ' 1 minute ago';
    }
    if (secondsPast < 3600) {
        return ' ' + parseInt(secondsPast / 60) + ' minutes ago';
    }
    if (secondsPast <= 86400) {
        return ' ' + parseInt(secondsPast / 3600) + ' hours ago';
    }
    if (secondsPast <= 2628000) {
        return ' ' + parseInt(secondsPast / 86400) + ' days ago';
    }
    if (secondsPast <= 31556952) {
        return ' ' + parseInt(secondsPast / 2628000) + ' months ago';
    } else {
        return ' ' + parseInt(secondsPast / 31556952) + ' years ago';
    }
}