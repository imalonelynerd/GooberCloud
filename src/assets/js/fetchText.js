import fetchLinks from "@/assets/json/fetchLinks.json";

export async function fetchText(param) {
    let res;
    try {
        /*let url = fetchLinks.files.url.endsWith('/') ?
            fetchLinks.files.url.slice(0, -1)
            : fetchLinks.files.url;*/
        res = await fetch(`${fetchLinks.files.url}${param}.md`);
    } catch {
        return false;
    }

    if (res === null ||
        res === undefined ||
        !res.ok) {
        return false;
    }
    return await res.text();
}

export async function fetchCSS(param) {
    let res;
    try {
        res = await fetch(`${fetchLinks.stylesheets.url}${param}.css`);
    } catch {
        return false;
    }

    if (res === null ||
        res === undefined ||
        !res.ok) {
        return false;
    }
    return await res.text();
}