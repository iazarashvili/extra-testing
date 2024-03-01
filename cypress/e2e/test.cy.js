import { baseHelper } from "../support/helpers/baseHelper"
import { basketApi } from '../support/api/basketApi'
import homePage from "../support/pages/homePage"
import { checker } from "../support/helpers/checkMethods"
const base_url = 'https://basket.staging.extra.ge'

describe('კალათის ფუნქციონალის ტესტირება', () => {
    context('არაავტორიზებული მომხმარებლით, resolution 1920 x 1080', () => {


        it('პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
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
        });
    })
})