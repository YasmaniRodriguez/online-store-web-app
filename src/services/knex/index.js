const knex = require("knex");
const conf = require("../../config");
const logger = require("../log4js");

const db = knex(process.env.MYSQL_LOCAL_OPTIONS || conf.MYSQL_LOCAL_OPTIONS);

class mysql {
	constructor() {
		try {
			logger.info("we are connected to mysql");
		} catch (error) {
			logger.error(
				`we can't connect to mysql, more detail in: ${error.message}`
			);
		}
	}

	async Builder() {
		db.schema.hasTable("profiles").then((profiles) => {
			if (profiles) {
				return logger.info("profiles table already exists!");
			} else {
				return db.schema
					.createTable("profiles", (table) => {
						table.increments("id").primary();
						table.string("name");
						table.string("lastname");
						table.date("birthday");
						table.string("avatar");
						table.string("phone");
						table.string("email").unique();
						table.string("address");
						table.string("password");
						table.string("role");
						table.timestamps(true, true);
					})
					.then(() => {
						logger.info("profiles table was created successfully!");
					})
					.catch((error) => {
						logger.error(error.message);
					})
					.finally(() => {
						db.destroy();
					});
			}
		});

		db.schema.hasTable("products").then((products) => {
			if (products) {
				return logger.info("products table already exists!");
			} else {
				return db.schema
					.createTable("products", (table) => {
						table.increments("id").primary();
						table.string("code", 10).unique();
						table.string("name", 20);
						table.string("category", 20);
						table.string("description", 20);
						table.string("image");
						table.decimal("price");
						table.decimal("stock");
						table.timestamps(true, true);
					})
					.then(() => {
						logger.info("products table was created successfully!");
					})
					.catch((error) => {
						logger.error(error.message);
					})
					.finally(() => {
						db.destroy();
					});
			}
		});

		db.schema.hasTable("orders").then((orders) => {
			if (orders) {
				return logger.info("orders table already exists!");
			} else {
				return db.schema
					.createTable("orders", (table) => {
						table.increments("id").primary();
						table.string("code").unique();
						table.decimal("totalAmount");
						table.decimal("totalQuantity");
						table
							.integer("buyer")
							.unsigned()
							.references("id")
							.inTable("profiles");
						table.integer("status");
						table.timestamps(true, true);
					})
					.then(() => {
						logger.info("orders table was created successfully!");
					})
					.catch((error) => {
						logger.error(error.message);
					})
					.finally(() => {
						db.destroy();
					});
			}
		});

		db.schema.hasTable("orderrows").then((orderrows) => {
			if (orderrows) {
				return logger.info("orderrows table already exists!");
			} else {
				return db.schema
					.createTable("orderrows", (table) => {
						table.increments("id").primary();
						table
							.integer("product")
							.unsigned()
							.references("id")
							.inTable("products");
						table.decimal("quantity");
						table.decimal("amount");
						table
							.integer("order")
							.unsigned()
							.references("id")
							.inTable("orders");
					})
					.then(() => {
						logger.info("orderrows table was created successfully!");
					})
					.catch((error) => {
						logger.error(error.message);
					})
					.finally(() => {
						db.destroy();
					});
			}
		});

		db.schema.hasTable("messages").then((messages) => {
			if (messages) {
				return logger.info("messages table already exists!");
			} else {
				return db.schema
					.createTable("messages", (table) => {
						table.increments("id").primary();
						table
							.integer("author")
							.unsigned()
							.references("id")
							.inTable("profiles");
						table.string("message");
						table.timestamps(true, true);
					})
					.then(() => {
						logger.info("messages table was created successfully!");
					})
					.catch((error) => {
						logger.error(error.message);
					})
					.finally(() => {
						db.destroy();
					});
			}
		});
	}

	async getProfiles(filters = null) {
		try {
		} catch (error) {
			return error;
		}
	}

	async addProfiles(profile) {
		try {
		} catch (error) {
			return error;
		}
	}

	async updateProfiles(profile = null, fields) {
		try {
		} catch (error) {
			return error;
		}
	}

	async deleteProfiles(profile = null) {
		try {
		} catch (error) {
			return error;
		}
	}

	async getProducts(filters = null) {
		try {
		} catch (error) {
			return error;
		}
	}

	async addProducts(product) {
		try {
		} catch (error) {
			return error;
		}
	}

	async updateProducts(product = null, fields) {
		try {
		} catch (error) {
			return error;
		}
	}

	async deleteProducts(product = null) {
		try {
		} catch (error) {
			return error;
		}
	}

	async getOrders(filters = null) {
		try {
		} catch (error) {
			return error;
		}
	}

	async addOrders(order) {
		try {
		} catch (error) {
			return error;
		}
	}

	async updateOrders(order = null, fields) {
		try {
		} catch (error) {
			return error;
		}
	}

	async deleteOrders(order = null) {
		try {
		} catch (error) {
			return error;
		}
	}

	async getMessages(filters = null) {
		try {
		} catch (error) {
			return error;
		}
	}

	async addMessages(message) {
		try {
		} catch (error) {
			return error;
		}
	}

	async updateMessages(message = null, fields) {
		try {
		} catch (error) {
			return error;
		}
	}

	async deleteMessages(message = null) {
		try {
		} catch (error) {
			return error;
		}
	}
}

module.exports = { mysql };