const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/api-error");
const rateService = require("../service/rate-service");

class RateController {
    async rates(req, res, next){
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Validation Error!', errors.array()))
            }
            const {currency} = req.query;
            const rateData = await rateService.getRate(currency)
            return res.json(rateData)
        } catch (e){
            next(e);
        }
    }
}

module.exports = new RateController();
