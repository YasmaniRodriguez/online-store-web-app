const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        getProducts(filters: ProductQueryFilters): [Product]
        getCarts: [Cart]
        getOrders: [Cart]
    }

    type Mutation {
        addProducts: Product
    }

    type Buyer {
        name: String
        phone: String
        email: String
        address: String
    }

    type CartProduct {
        row: Int
        product: Product
        quantity: Int
        amount: Float
    }

    type Cart {
        code: String
        status: Int
        buyer: Buyer
        products: [CartProduct]
        totalAmount: Int
        totalQuantity: Float
    }

    type Product {
        code: String
        name: String
        category: String
        description: String
        image: String
        price: Float
        stock: Int
    }
    
    input ProductQueryFilters {
        code: String
        category: String
        price: FilterRange
        stock: FilterRange
    }

    input FilterRange {
        lte: Float
        gte: Float
    }
`);

module.exports = schema;
