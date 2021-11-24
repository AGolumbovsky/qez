export const request = (url, config) => {
    // const defaultUrl = "https://opentdb.com/api.php";
    const baseUrl = "http://localhost:3000/";
    return fetch(`${ baseUrl }${ url }`, config)
}