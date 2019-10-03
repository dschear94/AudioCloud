export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const signup = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/user',
        data: { user }
    })
};

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const processSignupStepOne = user => (
    $.ajax({
        method: 'GET',
        url: '/api/entry',
        data: { user }
    })
);

export const processSignupStepTwo = user => (
    $.ajax({
        method: 'GET',
        url: '/api/entry',
        data: { user }
    })
);