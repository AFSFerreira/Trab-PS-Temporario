export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserService {
  async getUser(): Promise<User> {
    return {
      id: 1,
      name: "2b",
      email: "two-b@yorha.com",
    };
  }
}
