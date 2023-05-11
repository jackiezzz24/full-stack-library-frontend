export const oktaConfig = {
    clientId:'0oa8rtrsiou8WocGN5d7',
    issuer:'https://dev-81873002.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
