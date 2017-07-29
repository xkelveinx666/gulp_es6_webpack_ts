if (module.hot) {
    module.hot.accept();
}

import ajax from '../../../public/scripts/ajax';

(function() {
    const url = "/index.html";
    console.log(ajax(url));
})();