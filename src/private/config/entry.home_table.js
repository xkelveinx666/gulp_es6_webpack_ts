import '../styles/test.css';
import '../../public/styles/reset.css';
(function() {
    let word = "hello";
    console.log(word + "world")
})()
if (module.hot) {
    module.hot.accept();
}