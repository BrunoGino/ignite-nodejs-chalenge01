import { v4 as uuidV4 } from "uuid";

class User {
  email: string;
  readonly id: string;
  admin: boolean;
  updated_at: Date;
  private name: string;
  private created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
