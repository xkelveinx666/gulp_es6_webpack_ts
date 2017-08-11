<<<<<<< HEAD
const ajax = ({ url, header, callback }) => {
    if (!url) {
        console.log("url is null");
        return;
    }
    console.log(url);
    fetch(url, { "method": "POST", })
=======
const ajax = (url, header, callback) => {
    fetch(url)
>>>>>>> 21821569c37e4fb5992ad76c9dabc1a018deb0a7
        .then((response) => {
            if (fetch.ok) {
                console.log(response);
            } else {
                console.log('fail fetch ' + url);
            }
        }).catch((error) => {
            console.log(error);
        });
<<<<<<< HEAD
};
=======
}
>>>>>>> 21821569c37e4fb5992ad76c9dabc1a018deb0a7

export default ajax;