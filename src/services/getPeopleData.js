import {
 HTTPS, HTTP, SWAPI_ROOT, SWAPI_PEOPLE,
 GUID_IMG_EXTENSTION, URL_IMG_PERSON
} from "@constants/api";

const getId = (url, category) => {
 const id = url
     // .replace(HTTP+SWAPI_ROOT+category, '')
     .replace(HTTPS+SWAPI_ROOT+category, '')
     .replace(/\//g, '')
 // console.log(id);
 return id;
}


//-----------------------------------------------
// Проверка протокола: HTTP или HTTPS
//-----------------------------------------------
// const checkProtocol = url => {
//  if (url.indexOf(HTTPS) !== -1) {
//   return HTTPS;
//  }
//
//  return HTTP;
// }

//-----------------------------------------------
// Получить ID персонажа по URL
//-----------------------------------------------
// const getId = (url, category) => {
//  const protocol = checkProtocol(url);
//
//  const id = url
//      .replace(protocol+SWAPI_ROOT+category, '')
//      .replace(/\//g, '')
//
//  return id;
// }

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUID_IMG_EXTENSTION}`;