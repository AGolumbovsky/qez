export const request = (url, config) => {
    const defaultUrl = "https://opentdb.com/api.php";
    return fetch(`${ defaultUrl }${ url }`, config)
}

