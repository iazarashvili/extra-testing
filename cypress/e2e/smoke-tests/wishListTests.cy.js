import { baseHelper } from '../../support/helpers/baseHelper'
import { homePageHelper } from '../../support/helpers/homePageHelper';
import basePage from '../../support/pages/basePage';

describe('test', () => {
    beforeEach('', () => {
        cy.sessionAuth('scByKxLa36Wcypju', 'DbeGwVkuLee9Zjvf', 'xegpebhecrib@triots.com', 'ilo123')
        cy.viewport(1920, 1080)
        cy.visit('')
    })
    it('Case 1: ', () => {
    });
})
