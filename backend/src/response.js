module.exports = function response(res, status = 200, { message = "", data = {} }) {
    res.status(status).json({
        message,
        data: data
    })
}