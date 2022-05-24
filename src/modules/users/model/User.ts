import { v4 as uuidV4 } from "uuid";

class User {
  email: string;
  readonly id: string;
  admin: boolean;
  updated_at: Date;
  name: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.admin = false;
  }
}

export { User };
