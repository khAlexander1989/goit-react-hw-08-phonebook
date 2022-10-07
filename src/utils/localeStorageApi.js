export function serializeData(data) {
  return JSON.stringify(data);
}

export function deserializeData(serializedData) {
  let deserializedData;
  try {
    deserializedData = JSON.parse(serializedData);
  } catch (error) {
    console.log('ERROR: ', error);
    console.log('ERROR MESSAGE: ', error.message);
  }
  return deserializedData;
}

export function addDataToLocalStorage(key, data) {
  localStorage.setItem(key, data);
}

export function getDataFromLocalStorage(key) {
  return localStorage.getItem(key);
}
