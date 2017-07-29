const ajax = (url, header, callback) => {
    fetch(url)
        .then((response) => {
            if (fetch.ok) {
                console.log(response);
            } else {
                console.log('fail fetch ' + url);
            }
        }).catch((error) => {
            console.log(error);
        });
}

export default ajax;