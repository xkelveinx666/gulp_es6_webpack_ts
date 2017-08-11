import ajax from '../../../public/scripts/ajax';

const getExamInfo = () => {
    const url = "/new_seat/getExamAllInformation.do";
    const method = "GET";
    const className = "15级软件工程2班";
    console.log(url);
    ajax({
        "url": url,
        "method": method,
        "parameter": {
            "className": className,
        },
    });
}

export default getExamInfo;