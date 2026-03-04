// products.js
// Định nghĩa constructor Product và mảng mẫu products
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

const products = [
  new Product(1, "Laptop Pro", 35000000, 5, "Electronics", true),
  new Product(2, "Mouse Wireless", 500000, 20, "Accessories", true),
  new Product(3, "Keyboard Mechanical", 1200000, 0, "Accessories", false),
  new Product(4, "Smartphone X", 22000000, 3, "Electronics", true),
  new Product(5, "T-Shirt", 200000, 10, "Clothing", true),
  new Product(6, "Headphones", 1800000, 2, "Accessories", true)
];

module.exports = { Product, products };
