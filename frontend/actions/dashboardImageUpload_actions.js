export const AVATAR = 'AVATAR';
export const CLEAR_AVATAR = 'CLEAR_AVATAR';
export const HEADER_IMAGE = 'HEADER_IMAGE';
export const CLEAR_HEADER_IMAGE = 'CLEAR_HEADER_IMAGE';

export const sendAvatar = avatar => {
    return {
        type: AVATAR,
        avatar
    };
};

export const clearAvatar = () => {
    return {
        type: CLEAR_AVATAR
    };
};
export const sendHeaderImage = headerImage => {
    return {
        type: HEADER_IMAGE,
        headerImage
    };
};

export const clearHeaderImage = () => {
    return {
        type: CLEAR_HEADER_IMAGE
    };
};