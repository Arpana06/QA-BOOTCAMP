const restaurantName = "Gourmet Bistro";     
let itemsInStock = 20;                     
const isPromoActive = true;                 
const itemsOrdered = 3;                     

const discountItems = itemsOrdered * 0.10;                     // 10% discount
const stockAfterOrder = itemsInStock - itemsOrdered + discountItems;
const canOrder = itemsInStock >= itemsOrdered && isPromoActive && itemsOrdered > 0;
itemsInStock = stockAfterOrder;

console.log(`
Restaurant: ${restaurantName}
Promo Active: ${isPromoActive}
Items Ordered: ${itemsOrdered}
Discount: ${discountItems}
Can Order: ${canOrder}
Stock After Order: ${itemsInStock}
`);