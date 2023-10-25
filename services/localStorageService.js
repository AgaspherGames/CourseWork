import AsyncStorage from '@react-native-async-storage/async-storage';

function setItem(key, value) {
  if (typeof window === "undefined") return;

  if (typeof value == "object") {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } else {
    AsyncStorage.setItem(key, value);
  }
}
function removeItem(key) {
  if (typeof window === "undefined") return;
  AsyncStorage.removeItem(key);
}
async function getItem(key) {
  const item = await AsyncStorage.getItem(key);
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