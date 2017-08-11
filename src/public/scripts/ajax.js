const ajax = ({ url, method, parameter, acceptFunction }) => {
    if (!url) {
        console.log("url is null");
        return;
    }
    console.log(parameter);
    const requestBody = {
        "method": method,
        "header": new Headers(),
    };
    const request = new Request(url, requestBody);
    fetch(request)
        .then((response) => {
            if (response.ok) {
                console.log(response);
                return response.text();
            } else {
                console.log('fail fetch ' + url);
            }
        }).then((text) => {
            if (acceptFunction) {
                acceptFunction(text);
            }
            console.log(text);
        }).catch((error) => {
            console.log(error);
        });
};

export default ajax;