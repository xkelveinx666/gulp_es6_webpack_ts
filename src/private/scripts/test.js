import $ from 'jquery'
import '../styles/test.css'

function component() {
    let element = document.createElement("div");
    element.innerHTML = _.join(['Hello', 'webpack'], '');
    element.classList.add('hello');
    return element;
}

(function() {
    document.body.appendChild(component());
})()

(function() {
    console.log("Hello webpack world");
})();

let test = () => {
    console.log("Hello Arrow Function");
}

let testjQuery = () => {
    let h1 = $(".test")[0];
    console.log(h1);
    setInterval(function() {
        $(h1).fadeOut(4000);
    }, 10000);
    setTimeout(function() {
        setInterval(function() {
            $(h1).fadeIn(4000);
        }, 10000);
    }, 5000);
}

testjQuery();

test();