// Before

class Discount {
  calculate(price: number, type: string): number {
    if (type === "percentage") {
      return price * 0.9;
    } else if (type === "fixed") {
      return price - 10;
    }
    return price;
  }
}

// After 

interface DiscountStrategy {
  calculateDiscount(price: number): number;
}

class PercentageDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price * 0.9;
  }
}

class FixedDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price - 10;
  }
}

class NoDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price;
  }
}

class Cart {
  constructor(private discount: DiscountStrategy) {}

  getTotal(price: number): number {
    return this.discount.calculateDiscount(price);
  }
}

