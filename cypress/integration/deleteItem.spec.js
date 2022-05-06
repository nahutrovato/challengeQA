import DeleteItem from '../pages/deleteItem';

describe('Delete item test', () => {
    
    before('Enter the site',() => {
        cy.visit('/')
    })
    
    it('Delete item', () => {
        cy.get('button[ng-click="strangerlist.open(item)"]').last()
        //cy.get('.btn-primary').click()
    })
})