// Before 

class MySQLDatabase {
  save(data: string): void {
    console.log(`Saving ${data} to MySQL`);
  }
}

class UserService {
  private db = new MySQLDatabase();

  saveUser(user: string): void {
    this.db.save(user);
  }
}


// After

interface Database {
  save(data: string): void;
}

class MySQLDatabase implements Database {
  save(data: string): void {
    console.log(`Saving ${data} to MySQL`);
  }
}

class UserService {
  constructor(private db: Database) {}

  saveUser(user: string): void {
    this.db.save(user);
  }
}

