if (module.hot) {
    module.hot.accept();
}

(function() {
    if ("fetch" in window) {
        alert("has fetch");
    } else {
        alert("no fetch");
    }
})();