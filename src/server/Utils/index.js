import moment from 'moment';

/* 현재 날짜 기준 이번주 날짜 계산 */
export const getThisWeek = () => { 
    let day = new Date().getDay();
    let begin = new Date();
    let finish = new Date();

    if (day !== 0) begin.setDate(begin.getDate() - day);

    begin.setHours(0,0,0,0);
    finish.setDate(begin.getDate() + 7);
    finish.setHours(0,0,0,0);

    return [begin, finish];
};

/* 파라미터 date 유효성 체크 */
export const validateDate = (date) => {
    const dateFormat = 'YYYY-MM-DD HH:mm';

    if (!date) return false;
    if (!(moment(date, dateFormat, true).isValid())) return false;

    return true;
};