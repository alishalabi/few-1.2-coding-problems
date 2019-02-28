class Item {
  constructor(name, price, qty) {
    this.name = name
    this.price = price
    this.qty = qty
  }

  subtotal() {
    const total = this.price * this.qty
    return total
  }
}

class ShoppingCart {
  constructor(items = []) {
    this.items = items
  }

  totalCost() {
    let total = 0
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].subtotal()
    }
    return total
  }

  addItem(name, price, qty) {
    const item = new Item(name, price, qty)

    this.items.push(item)
  }
}

const newCart = new ShoppingCart([])
for (let i = 0; i < shoppingCartData.length; i++) {
  const item = shoppingCartData[i]

  newCart.addItem(item.name, item.price, item.qty)
}

console.log(newCart)
