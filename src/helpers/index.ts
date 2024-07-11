 

/**
 * Retrieve the value in params id.
 * 
 * @returns {number} the value of the param ID in the url
 * @throws {Error} if the param id is not present in the url
 */
export function getUrlId() {
    const urlparams = new URLSearchParams(window.location.search);
    const urlId = urlparams.get("id");
    if (!urlId) { 
        throw new Error("utilisateur inconnue")
    }
    return parseInt(urlId);
}

