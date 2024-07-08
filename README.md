### 🆕 Table of Contents

- [🆕 Clone the project](#clone-the-project)
- [🆕 Setup](#setup)
- [🆕 Local Development](#local-development)
- [🆕 Production](#production)
- [🆕 Endpoints](#endpoints)
  - [Add a product to cart](#add-a-product-to-cart)
  - [Modify the quantity of a product in the cart](#modify-the-quantity-of-a-product-in-the-cart)
  - [Delete a product from the cart:](#delete-a-product-from-the-cart:)
  - [List products](#list-products)
  - [List cart](#list-cart)

### Clone the project

```shell
git clone git@github.com:dany338/backend-shopping-cart.git
```

### Setup

Using npm:

```shell
npm install
```

### Local Development

```shell
npm run dev
```

### Production
```shell
npm start
```

### Endpoints

#### `Add a product to cart:`
- http://localhost:3001/api/cart
```json
// method: POST:
{
    "productId": 1,
    "quantity": 2
}

// Response:
[
    {
        "product": {
            "id": 1,
            "name": "Product 1",
            "price": 10,
            "image": "/images/products/1623735-00-A_0_2000.jpg",
            "rating": 1
        },
        "quantity": 2
    }
]
```

#### `Modify the quantity of a product in the cart:`
- http://localhost:3001/api/cart/1
```json
// method: PUT:
{
    "quantity": 5
}

// Response:
[
    {
        "product": {
            "id": 1,
            "name": "Product 1",
            "price": 10,
            "image": "/images/products/1623735-00-A_0_2000.jpg",
            "rating": 1
        },
        "quantity": 5
    }
]
```

#### `Delete a product from the cart:`
- http://localhost:3001/api/cart/1
```json
// method: DELETE:

// Response:
[]
```

#### `List products:`
- http://localhost:3001/api/products
```json
// method: GET:

// Response:
[
    {
        "id": 1,
        "name": "Product 1",
        "price": 10,
        "image": "/images/products/1623735-00-A_0_2000.jpg",
        "rating": 1
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 20,
        "image": "/images/products/1623735-00-A_0_2000.jpg",
        "rating": 2
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 30,
        "image": "/images/products/1657916-00-A_1.jpg",
        "rating": 3
    },
    {
        "id": 4,
        "name": "Product 4",
        "price": 40,
        "image": "/images/products/1623735-00-A_0_2000.jpg",
        "rating": 4
    },
    {
        "id": 5,
        "name": "Product 5",
        "price": 50,
        "image": "/images/products/1657916-00-A_1.jpg",
        "rating": 5
    },
    {
        "id": 6,
        "name": "Product 6",
        "price": 60,
        "image": "/images/products/1742702-00-A_0_2000.jpg",
        "rating": 1
    },
    {
        "id": 7,
        "name": "Product 7",
        "price": 70,
        "image": "/images/products/1700280-00-A_1.jpg",
        "rating": 2
    },
    {
        "id": 8,
        "name": "Product 8",
        "price": 80,
        "image": "/images/products/1623735-00-A_0_2000.jpg",
        "rating": 3
    },
    {
        "id": 9,
        "name": "Product 9",
        "price": 90,
        "image": "/images/products/1623735-00-A_0_2000.jpg",
        "rating": 4
    },
    {
        "id": 10,
        "name": "Product 10",
        "price": 100,
        "image": "/images/products/1742702-00-A_0_2000.jpg",
        "rating": 5
    }
]
```

#### `List cart:`
- http://localhost:3001/api/carts
```json
// method: GET:

// Response:
[
    {
        "product": {
            "id": 1,
            "name": "Product 1",
            "price": 10,
            "image": "/images/products/1623735-00-A_0_2000.jpg",
            "rating": 1
        },
        "quantity": 2
    }
]
```