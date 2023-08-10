import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.LamaDevUsers || mongoose.model("LamaDevUsers", userSchema);

// export default mongoose.model("LamaDevUsers", userSchema);
