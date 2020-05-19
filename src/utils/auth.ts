const AUTH_KEY = 'react_antd_admin_auth_key';

export function setToken(token: string): void {
  localStorage[AUTH_KEY] = token;
}

export function getToken(): string {
  return localStorage[AUTH_KEY] || '';
}

export function removeToken(): void {
  return localStorage.removeItem(AUTH_KEY);
}