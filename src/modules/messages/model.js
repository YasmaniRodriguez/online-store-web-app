const normalize = require("../../services/normalizr").getNormalizedData;
const schema = require("../../services/normalizr/schemas/messages");
const config = require("../../config");
const { getDataHandler } = require("../../utils/function");
const dataHandler = getDataHandler();

module.exports = {
	async getMessages(filters) {
		const data = await dataHandler.getMessages(filters);
		return config.NORMALIZATION ? normalize(data, schema) : data;
	},

	async addMessages(message) {
		const keywords = ["administrador"];
		const findKeywords = keywords.some((word) =>
			message.message.includes(word)
		);
		if (findKeywords) {
			const smsService = new service();
			smsService.SendMessage(
				config.TWILIO_ACCOUNT_NUMBER,
				config.ADMIN_PHONE_NUMBER,
				`User ${message.author.email} say: ${message.message}`
			);
			return dataHandler.addMessages(message);
		} else {
			return dataHandler.addMessages(message);
		}
	},

	async updateMessages(record, fields) {
		return dataHandler.updateMessages(record, fields);
	},

	async deleteMessages(message) {
		return dataHandler.deleteMessages(message);
	},
};
