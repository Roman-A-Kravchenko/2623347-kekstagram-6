// js/api.js

const SERVER_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';

/**
 * Загружает массив фотографий с сервера
 * @returns {Promise<Array>} — массив объектов фото
 */
const loadPhotos = () => {
  return fetch(`${SERVER_URL}/data`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось загрузить данные с сервера');
      }
      return response.json();
    });
};

/**
 * Отправляет новую фотографию на сервер
 * @param {FormData} formData — данные формы с изображением и метаданными
 * @returns {Promise<void>}
 */
const uploadPhoto = (formData) => {
  return fetch(SERVER_URL, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Не удалось отправить фотографию на сервер');
    }
  });
};

export { loadPhotos, uploadPhoto };
