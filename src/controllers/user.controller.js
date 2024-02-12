import {asyncHandler} from "../utils/asynsHandler.js"


const registerUser = asyncHandler( async (req , res) => {
     res.status(200).json({
        message: "congratulations"
    })
})

export {
    registerUser,
}