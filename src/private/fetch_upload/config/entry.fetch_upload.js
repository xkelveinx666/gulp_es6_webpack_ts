if (module.hot) {
    module.hot.accept();
}

<<
<< << < HEAD
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
            }) ===
            === =
            import ajax from '../../../public/scripts/ajax';

        (function() {
            const url = "/index.html";
            console.log(ajax(url)); >>>
            >>> > 21821569 c37e4fb5992ad76c9dabc1a018deb0a7
        })();