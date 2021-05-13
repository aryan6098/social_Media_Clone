export function getFormBody(params){
    let formBody = [];
    for(property in params)
    {
        let encodedKey  = encodeURIComponent(property);
        let encodevalue = encodeURIComponent(params[property]);

        formBody(encodedKey + '=' + encodevalue);
    }
    return formBody.join('&');
}