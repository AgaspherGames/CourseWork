
function setItem(key, value) {
  if (typeof window === "undefined") return;

  if (typeof value == "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}
function removeItem(key) {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
}
function getItem(key) {
  if (typeof window === "undefined") return "";

  const item = localStorage.getItem(key);
  
  try {
    return JSON.parse(item || "");
  } catch (error) {
    return (item || "");
  }
}

export default {
  setItem,
  getItem,
  removeItem,
};