import express from "express"

const router = express.Router()

// Index
router.get("/", (req, res) => {
    res.json({
        data: "Qui leggo tutti i file"
    })
})

// Show
router.get("/:id", (req, res) => {
    const postId = req.params.id
    res.json({
        data: `Qui leggo il post con id ${postId}`
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