if (module.hot) {
    module.hot.accept();
}

import $ from 'jquery';

(function() {
    $.ajax({
        url: '/new_seat/getExamAllInformation.do',
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            if (data.flag == 'success') {
                console.log(data);
            } else {
                alert("未成功连接服务器");
            }
        },
        error: function(result) {
            alert('读取出错,请重新刷新页面');
        }
    })
})();