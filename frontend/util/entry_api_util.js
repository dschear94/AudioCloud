export const processEntryStep = user => (
    $.ajax({
        method: 'GET',
        url: '/api/entry',
        data: { user }
    })
);