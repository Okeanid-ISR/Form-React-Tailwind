export const setItemStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};
export const getItemStorage = (key, defaultValue) => {
    const value = window.localStorage.getItem(key);
    try {
        return value !== null ? JSON.parse(value) : defaultValue;
    } catch (error) {
        console.error(`Failed to parse value for key "${key}" from localStorage.`, error);
        return defaultValue;
    }
};