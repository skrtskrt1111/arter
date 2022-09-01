const BASE_URL = 'https://test-front.framework.team/';

export const ALL_PAINTINGS = BASE_URL + 'paintings';

export const searchByPaint = (name) => ALL_PAINTINGS + '/name/' + name;

