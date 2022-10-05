const ApiError = require("../exceptions/api-error");
const RateDto = require("../dtos/rate-dto");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

class RateService {

    async getRate(currency) {
        const response = await fetch(`https://api.coincap.io/v2/rates/${currency}`);
        const data = await response.json();
        if (data.data === undefined) {
            throw ApiError.Error(`Cryptocurrency ${currency} not found!`, 404);
        }
        return new RateDto(data)
    }
}

module.exports = new RateService();
