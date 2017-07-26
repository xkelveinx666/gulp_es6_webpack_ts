import $ from "jquery";
(function() {
    console.log($("p"));
    console.log("hahahah123123");
})();

if (module.hot) {
    module.hot.accept();
}