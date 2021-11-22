export const request = (url, config) => {
    // const defaultUrl = "https://opentdb.com/api.php";
    const defaultUrl = "http://localhost:3000/";
    return fetch(`${ defaultUrl }${ url }`, config)
}

