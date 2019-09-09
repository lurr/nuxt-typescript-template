import express from 'express'

// Any code run here is not seen by the client, and thus
// authentication with secret keys, etc. is safe here.
// After the first fetch from the server, the result is
// cached on the client.

const app = express()

app.get('/', (_req, res) => {
    res.json({ it: 'works!' })
})

module.exports = {
    path: '/api',
    handler: app
}
