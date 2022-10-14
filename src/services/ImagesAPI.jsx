export const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '28801959-c80fb9d6110e7835101e93207',
  SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });