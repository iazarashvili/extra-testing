const baseUrl = Cypress.env('basket_api');
const identityUrl = Cypress.env('identity_api');
const userName = Cypress.env('userName')
const password = Cypress.env('password')
const base_url = 'https://basket.staging.extra.ge'

class BasketApi {
    emptyBasket() {
        cy.request({
            method: 'POST',
            url: 'https://identity.staging.extra.ge/connect/token',
            headers: {
                'Origin': 'https://staging.extra.ge',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            form: true,
            body: {
                grant_type: 'password',
                scopes: 'identity offline_access openid email profile phone address',
                username: 'xegpebhecrib@triots.com',
                password: 'ilo123',
                client_id: 'dev',
                client_secret: 'secret'
            }
        }).then((response) => {
            cy.request({
                method: 'POST',
                url: base_url + '/v1/basket/emptybasket',
                headers: {
                    authorization: `Bearer ${response.body.access_token}`,
                    'cache-control': 'no-cache',
                    'content-type': 'application/json-patch+json',
                },
                body: {
                    darkStoreId: 0
                }
            })
        })
    }
}




export const basketApi = new BasketApi()
