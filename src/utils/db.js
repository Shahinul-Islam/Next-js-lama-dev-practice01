const { default: mongoose } = require("mongoose");

const connection = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://lama-dev:qCEmDdXLxOwp3kdx@cluster0.kdwgcoc.mongodb.net/lama-dev?retryWrites=true&w=majority"
		);
		console.log("successfully connected to the database");
	} catch (error) {
		throw new Error("Connection Failed");
	}
};
connection();

export default connection;
