class Functions {

  constructor(number) {
    this.number = number
  }

  count_and_print() {
    let current_number = 0

    while (current_number <= this.number) {
      const divis_3 = this.check_divis_three(current_number)
      const divis_5 = this.check_divis_five(current_number)

      if (divis_3 == true && divis_5 == true) {
        console.log("Fizz buzz ")
      }
      else if (divis_5 == true) {
        console.log("Buzz")
      }
      else if (divis_3 == true) {
        console.log("Fizz")
      }
      else {
        console.log(current_number)
      }
      current_number += 1
    }
  }

  check_divis_three(n) {
    return n % 3  === 0
    // if (n % 3 == 0) {
    //   this.divis_three = true;
    // }
  }

  check_divis_five(n) {
    return n % 5  === 0
  }

}


const funct = new Functions(15)
funct.count_and_print()
