const { baseHelper } = require("../../../../support/helpers/baseHelper");

describe('wish list ის ტესტირება', () => {
    beforeEach('', () => {
        baseHelper.sessionAuthorization(Cypress.env('userName'), Cypress.env('password'))
        baseHelper.openSiteFromWeb()
    })

    it('', () => {
        cy.wait(3000)
    });

    it('', () => {
        
    });
})