// Before

class Auto {
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  getCarModel(): string {
    return this.model;
  }

  setCarModel(model: string): void {
    this.model = model;
  }

  getCustomerOrder(id: string): Auto | null {
    return null;
  }

  removeCustomerOrder(id: string): void { }
  updateCarSet(set: Record<string, any>): void { }
  saveCustomerOrder(o: Auto): void { }
}

// After

class Auto {
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  getCarModel(): string {
    return this.model;
  }

  setCarModel(model: string): void {
    this.model = model;
  }
}

class CustomerAuto {
  private orders: Map<string, Auto> = new Map();

  saveCustomerOrder(order: Auto): void {
    this.orders.set(order.getCarModel(), order);
  }

  getCustomerOrder(id: string): Auto | undefined {
    return this.orders.get(id);
  }

  removeCustomerOrder(id: string): boolean {
    return this.orders.delete(id);
  }
}

class AutoDB {
  updateCarSet(set: Record<string, any>): void {
    console.log("Updating car set:", set);
  }
}


