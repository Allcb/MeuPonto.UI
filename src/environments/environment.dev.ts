export const environment = {
  production: false,
  api: localStorage.getItem('server') || 'https:/link_MeuPonto/api/v1'
};
export const TokenName = 'MeuPonto_authorizationData';
export const Logged_user_id = 'MeuPonto_logged_user_id';
