 

/**
 * 
 * @returns 
 */
export function getUrlId() {
    const urlparams = new URLSearchParams(window.location.search);
    const urlId = urlparams.get("id");
    if (!urlId) { 
        throw new Error("utilisateur inconnue")
    }
    return parseInt(urlId);
}

