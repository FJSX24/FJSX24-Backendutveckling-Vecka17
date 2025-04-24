// en global fel/error hanterare som ska gånga valideringsfel m.m.

const errorHandler = (err, req, res, next) =>{
// Denna ifall vi får ett valideringsfel från Joi
    if (err.isJoi) {
    return res.status(400).json({error: err.details[0].message});
}

// om felet inte är om validering från Joi (så alla andra errors)
console.error(err.stack);

res.status(500).json({error: "något gick dåligt på server"});

}

export default errorHandler;