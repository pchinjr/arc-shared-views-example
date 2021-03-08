let Answer = require('@architect/shared/helper')

exports.handler = async function http(req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> The Answer is </title>
      </head>
      <body>
        <p> This is the Answer: ${Answer()} </p>
      </body>
      </html>
    `
  }
}