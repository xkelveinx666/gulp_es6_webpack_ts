const ajax = ({ url, header, callback }) => {
    if (!url) {
        console.log("url is null");
        return;
    }
    console.log(url);
    fetch(url, { "method": "POST", })
        .then((response) => {
            if (fetch.ok) {
                console.log(response);
            } else {
                console.log('fail fetch ' + url);
            }
        }).catch((error) => {
            console.log(error);
        });
};

export default ajax;