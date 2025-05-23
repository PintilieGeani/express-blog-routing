import express from "express"
import posts from "../data.js"
const router = express.Router()

// Index
router.get("/", (req, res) => {
    res.json({
        data: post,
    })
})

// Show
router.get("/:id", (req, res) => {
    const postId = req.params.id
    console.log(postId)
    const postSingolo = posts.find((curPost) => curPost.id === parseInt(postId))
    res.json({
        data: postSingolo
    })
})

// Store
router.post("/", (req, res) => {
    res.json({
        data: "Qui aggingo i post"
    })
})

// Destroy
router.delete("/:id", (req, res) => {
    const postId = req.params.id
    res.json({
        data: `Qui cancello il post con id ${postId}`
    })
})

export default router