module.exports = class RateDto {
    usd;

    constructor(model) {
        this.usd = model.data.rateUsd;
    }
}
