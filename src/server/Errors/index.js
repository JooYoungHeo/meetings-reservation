/* 로직 실행 불가 에러 */
export class UnprocessableError extends Error {
    constructor() {
        super();
        this.code = 422;
        this.message = 'Unprocessable Error';
    }
};

/* parameter validation 에러 */
export class BadRequestError extends Error {
    constructor() {
        super();
        this.code = 400;
        this.message = 'BadReqeust Error';
    }
}