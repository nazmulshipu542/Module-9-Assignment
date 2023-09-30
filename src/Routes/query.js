
use('ElectronicShop')

db.products.insertOne({
    "product": "DSLR Camera",
    "brand": "Sony",
    "price": 999.99,
    "origin": "Japan",
    "warranty": "5 year limited"
})

db.products.insertMany([
    {"product":"Oneplus"},
    {"product":"Google"},
    {"product":"MSI"}
])

db.products.deleteOne({
    "product": Tablet
})

db.products.deleteMany({
    price:{$gt:999.99}
})


