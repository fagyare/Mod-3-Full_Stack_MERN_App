const jwt = require('jsonwebtoken')
const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

async function authorize(req, res, next) {

    try {
        // 1. Check if the request has a token
        let token = req.header("Authorization") // ->  "Bearer adshjh0249384la;sf"
console.log("Authorize")
        if (!token) { 
            throw new Error('No token provided')
        }

        token = token.replace("Bearer ", "") // -> "adshjh0249384la;sf"

        // 2. Check that the token is valid and not expired

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        console.log('\nhunt for department')
        console.log(payload)
        if (payload.error) {
            throw new Error(payload.error)
        }

        // 3. Attach the payload from the token to the request object (req)

        req.id = payload.id
        req.user = payload.user

        // 4. Move on to the requested route (next)

        next()

    } catch(err) {
        console.log(err)
        res.status(403).json({ error: err.message })
    }
}

async function confirmUserAccess(req, res, next) {
    console.log("User Access confirm")
    try {
        let document;
        if (req.baseUrl.includes('post')) { 
            console.log(req.params.id, req.user)
            document = await Post.findOne({ _id: req.params.id })
        } else {
            document = await Comment.findOne({ _id: req.params.id})
        }
        console.log(document)
        if (!document) {
            throw new Error('User did not create this document')
        }
        next()
    } catch(err) {
        res.status(403).json({ error: err.message })
    }
}

module.exports = {
    authorize,
    confirmUserAccess
}