import { url } from "./http/http";

function getFileLink(fileName, small=false) {
  const link =  url + "/Files/" + fileName + (small?"/small":'');
  return link
}

var wordForm = function (num, words) {
  cases = [2, 0, 1, 1, 1, 2];
  return words[
    num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
  ];
};

import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return newValue;
}

export default {
  getFileLink,
  wordForm,
};
