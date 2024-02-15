# Inventory-System : Express JS, Prisma, MySQL

## Installation
**1.** Clone project
```
https://github.com/aldoLorenzio/inventory-system.git
```

**2.** Install the depedencies :
```
npm install
```

**3.** Add .env file 
```
DATABASE_URL = "YOUR URL"
PORT = 3000
JWT_SECRET = YOUR_SECRET_KEY
JWT_ACCESS_EXPIRATION_MINUTES = 120 //if you want JWT access valid for 120 minutes
JWT_REFRESH_EXPIRATION_DAYS = 30 //if you want JWT refresh valid for 30 days (still not work, cause i still not develope it yet)
```

**4.** Run the project
```
npm run dev
```



## API End Point
**- AUTH Route** \
User Register: `POST /v1/auth/register`\
User Login: `POST /v1/auth/login`

**- USER Route** \
Get Users                    : `GET /v1/user/`\
Get User By ID               : `GET /v1/user/:userId`\
Update User By ID            : `PATCH /v1/user/:userId`\
Delete User By ID            : `DELETE /v1/user/:userId`

**- Category Route** \
Create Category              : `POST /v1/category`\
Get Categorys                : `GET /v1/category`\
Get Category by ID           : `GET /v1/category/:categoryId`\
Update Category by ID        : `PATCH /v1/category/:categoryId`\
Delete Category by ID        : `DELETE /v1/category:/categoryId`

**- Product Route**\
Create Product                : `POST /v1/product`\
Get Products                  : `GET /v1/product`\
Get Product by ID             : `GET /v1/product/:productId`\
Update Product by ID          : `PATCH /v1/product/:productId`\
Delete Product by ID          : `DELETE /v1/product/:productId`\
Get Products by UserId        : `GET /v1/user/:userId/products`

**- Order Route**\
Create Order                  : `POST /v1/order`\
Get Orders                    : `GET /v1/order`\
Get Order by ID               : `GET /v1/order/:orderId`\
Update Order by ID            : `PATCH /v1/order/:orderId`\
Delete Product By ID          : `DELETE /v1/order/:orderId`\
Get Orders by UserId          : `GET /v1/user/:userId/order`

**- OrderItem Route**\
Create OrderItem              : `POST /v1/orderItem`\
Get OrderItem                 : `GET /v1/orderItem`\
Get OrderItem By ID           : `GET /v1/orderItem/:orderItem`\
Update Order By ID            : `PATCH /v1/orderItem/:orderItem`\
Delete Product By ID          : `DELETE /v1/orderItem/:orderItem`


## Input in Each Route
**- Auth Route**
```
email             (unique, email format, required)
password          (string, required)
```

**- User Route**
```
name              (string, required)
email             (unique, email format, required)
passowrd          (string, required)
role              (string, default "user" or can be filled with "admin")
```

**- Category Route**
```
name              (string, required)
```

**- Product**
```
name              (string, required)
description       (string, required)
price             (float, required)
quantityInStock   (int, required)
categoryId        (UUID, existed Category ID, required)
userId            (UUID, existed user ID, required)
```

**- Order**
```
date              (ISO date, required)
totalPrice        (float, default (0))
customerName      (string, required)
customerEmail     (email format, unique, required)
userID            (UUID, existed User ID, required)
```

**- OrderItem**
```
orderId           (UUID, existed orderID, required)
productId         (UUID, existed productID, required)
quantity          (int, required)
unitPrice         (float, required)
```

## 
