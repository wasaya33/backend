import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema (
    {
       videofile:{
        type:String,
        requried:true
       },
       thumbnail:{
        requried:true,
        type: String
       },
       title:{
        requried:true,
        type: String
       },
       description:{
        requried:true,
        type: String
       },
  
       duration:{
        requried:true,
        type: Number
       },
       views:{
        type:Number,
        default:0
       },
       isPublished:{
        type:Boolean,
        default: true
       },
       owner:{
        type:Schema.Types.ObjectId,
        ref:"user"
       }
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video" , videoSchema)