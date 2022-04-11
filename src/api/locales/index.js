import { merge } from "lodash";

const createObjectByPath = (path, value) => {
  const pathArr = path.split(".");
  const [key] = pathArr.slice(0, 1);
  const acc = {};

  if (pathArr.length === 1) {
    acc[key] = value;
    return acc;
  }

  acc[key] = createObjectByPath(pathArr.slice(1).join("."), value);
  return acc;
};

const getLocales = () => {
  return fetch("http://localhost:3000/locales")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
const changeTranslate = ({ lang, path, translation, messages }) => {
  return fetch("http://localhost:3000/locales", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      merge(messages, createObjectByPath(`${lang}.${path}`, translation))
    ),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export { getLocales, changeTranslate };
