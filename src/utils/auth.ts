export const TOKEN_KEY = '_tk';

export function setToken(token: string): void {
  localStorage[TOKEN_KEY] = token;
}

export function getToken(): string {
  return localStorage[TOKEN_KEY] || '';
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}