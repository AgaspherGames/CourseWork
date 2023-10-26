import { url } from "./http/http";

function getFileLink(fileName) {
    return url+"/Files/"+fileName
}

export default {
    getFileLink
}