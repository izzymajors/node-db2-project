var vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  if (req.params.id === true) {
    next()
  } else {
    res.send(`message: "car with id ${id} is not found"`)
  }
  // DO YOUR MAGIC
}

const checkCarPayload = (req, res, next) => {
  if (!req.body.payload || req.body.payload.trim()) {
    res.status(404).json({
      message: ` ${make} is missing`
    })
   next()
  }
  // DO YOUR MAGIC
}


const checkVinNumberValid = (req, res, next) => {
  if (!req.body.vinValidator) {
    res.status(404).json({
      message: `{ message: "vin ${vinValidator} number> is invalid" }`
    })
  } 

  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {

  // DO YOUR MAGIC
}
