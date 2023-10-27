function notFoundError(req, res, next) {
    res.send({
        statusCode: 404,
        message: 'Not Found'
    })
}
function internalServerError(err, req, res, next) {
    const status = err?.status ?? err?.statusCode ?? 500
    res.send({
        statusCode: status,
        message: err?.message ?? 'internalServerError'
    })
}

module.exports = {
    notFoundError,
     internalServerError
}