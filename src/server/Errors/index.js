export class UnprocessableError extends Error {
    constructor() {
        super();
        this.code = 422;
        this.message = 'Unprocessable Error';
    }
};