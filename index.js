// index.js
// Script chạy các câu hỏi theo đề bài
const { products } = require('./products');

console.log('=== Bắt đầu chạy lời giải cho các câu ===');

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
const namePriceArray = products.map(p => ({ name: p.name, price: p.price }));
console.log('\nCâu 3 - name & price:');
console.log(namePriceArray);

// Câu 4: Lọc ra sản phẩm còn hàng trong kho (quantity > 0)
const inStock = products.filter(p => p.quantity > 0);
console.log('\nCâu 4 - còn hàng (quantity > 0):');
console.log(inStock);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasOver30M = products.some(p => p.price > 30000000);
console.log('\nCâu 5 - có sản phẩm > 30.000.000?:', hasOver30M);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục 'Accessories' có đang được bán
const accessories = products.filter(p => p.category === 'Accessories');
const allAccessoriesAvailable = accessories.length > 0 ? accessories.every(p => p.isAvailable === true) : false;
console.log('\nCâu 6 - tất cả "Accessories" isAvailable = true?:', allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng (giá trị kho = price * quantity)
const totalWarehouseValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log('\nCâu 7 - tổng giá trị kho (VND):', totalWarehouseValue);

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log('\nCâu 8 - for...of in Tên - Danh mục - Trạng thái:');
for (const p of products) {
  const status = p.isAvailable ? 'Đang bán' : 'Không bán';
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: Dùng for...in để in tên thuộc tính và giá trị (ví dụ product đầu tiên)
console.log('\nCâu 9 - for...in in tên thuộc tính và giá trị (ví dụ products[0]):');
const example = products[0];
for (const key in example) {
  if (Object.prototype.hasOwnProperty.call(example, key)) {
    console.log('Thuộc tính:', key, '-', 'Giá trị:', example[key]);
  }
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);
console.log('\nCâu 10 - tên sản phẩm đang bán và còn hàng:');
console.log(sellingAndInStockNames);

console.log('\n=== Kết thúc chạy ===');
