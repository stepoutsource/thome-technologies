export function saveToSessionStorage(key, obj) {
    sessionStorage.setItem(key, JSON.stringify(obj));
}

export function getFromSessionStorage(key) {
    let retrievedObject = sessionStorage.getItem(key);
    return JSON.parse(retrievedObject);
}

export function resetSessionStorage(key) {
    sessionStorage.removeItem(key)
}

export function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

export function getFromLocalStorage(key) {
    let retrievedObject = localStorage.getItem(key);
    return JSON.parse(retrievedObject);
}

export function resetLocalStorage(key) {
    localStorage.removeItem(key)
}
