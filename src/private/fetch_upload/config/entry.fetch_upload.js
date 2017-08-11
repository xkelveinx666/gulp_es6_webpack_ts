if (module.hot) {
    module.hot.accept();
}
require('fetch-ie8');
require('es6-promise').polyfill();
import getExamInfo from '../mock/get_exam_info';

(function() {
    getExamInfo();
})();