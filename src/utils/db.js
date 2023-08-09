const { mongoose } = require("mongoose");

// mongoose.connect("mongodb://username:password@host:port/database?options...");

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
	} catch (error) {
		throw new Error("Failed to connect to the database");
	}
};

export default connect;
