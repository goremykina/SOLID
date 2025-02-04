// Before 

interface Worker {
  work(): void;
  eat(): void;
}

class Developer implements Worker {
  work(): void {
    console.log("Coding...");
  }

  eat(): void {
    console.log("Eating lunch...");
  }
}

class Robot implements Worker {
  work(): void {
    console.log("Building stuff...");
  }

  eat(): void {
    throw new Error("Robots don't eat!");
  }
}

// After 

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Developer implements Workable, Eatable {
  work(): void {
    console.log("Coding...");
  }

  eat(): void {
    console.log("Eating lunch...");
  }
}

class Robot implements Workable {
  work(): void {
    console.log("Building stuff...");
  }
}


