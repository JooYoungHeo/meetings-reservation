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