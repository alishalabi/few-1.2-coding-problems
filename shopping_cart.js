class Item {
  constructor({name, price, qty}) {
    this.name = name
    this.price = price
    this.qty = qty
  }

  subtotal() {
    return this.price * this.qty
  }

  describe() {
    return `${this.name}: $ ${this.price} per unit`
  }

}

class Cart {
  constructor(items = []) {
    this.items = items
  }

  totalCost() {
    let totalCost = 0
    for (let i = 0; i < this.items.length; i += 1) {
      totalCost += this.items[i].subtotal()
    }
    return totalCost
  }

  addItem(name, price, qty) {
    const newItem = new Item(name, price, qty)
    for (let i = 0; i < this.items.length; i += 1) {
      if (newItem.name == this.items[i].name) {
        this.items[i].qty += newItem.qty
        return
      }
    }
    this.items.push(newItem)
    }

    displayCart() {
      for (let i = 0; i < this.items.length; i += 1) {
        console.log(this.items[i].describe())
      }
    }

    itemCount() {
      let totalItem = 0
      for (let i = 0; i < this.items.length; i += 1) {
        totalItem += this.items[i].qty
      }
      return totalItem
    }

    getTax(tax) {
      return (this.totalCost() * tax)
    }

    // describe() {
    //   for (let i = 0; i < this.items.length; i += 1) {
    //     console.log(this.items[i].describe())
    //     console.log
    //   }
    // }
}




const cart = new Cart()
for (index in shoppingCartData) {
  let newItem = shoppingCartData[index]
  cart.addItem(new Item(newItem))
  // console.log(newItem)
}

console.log(cart.getTax(.08))
console.log(cart.totalCost())

// cart.addItem({"name" : "Southern Comfort", "price" : 7.16 , "qty" : 5})
// console.log(cart)

// const item_blah = new Item({"name": "Southern Comfort", "price" : 7.16, "qty" : 10})
// console.log(item_blah.describe())



// cart.addItem("wine", 10, 5)


// console.log(cart)

// console.log(item.subtotal())
