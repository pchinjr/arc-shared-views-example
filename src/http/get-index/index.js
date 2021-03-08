let Layout = require('@architect/views/layout')

exports.handler = async function http(request) {
  try {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'text/html; charset=utf8'
      },
      body: Layout()
    }
  } catch (e) {
    console.error(e)
    return {
      headers: {
        type: 'application/json; charset=utf8',
      },
      status: 500,
      body: JSON.stringify({
        name: e.name,
        message: e.message,
        stack: e.stack
      }, null, 2)
    }
  }
}