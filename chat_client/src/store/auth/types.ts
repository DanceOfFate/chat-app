
export interface User {
  username: string;
  firstName: string;
  lastName: string;
  thumbnail: string | null;
}

export interface AuthStateType {
  user: User | undefined;
  loading: boolean;
  hasErrors: boolean,
  authenticated: boolean
}