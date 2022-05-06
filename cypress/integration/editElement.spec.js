import EditItem from '../pages/editItem';

describe('Edit elements test', () => {

    before('Enter the site',() => {
        cy.visit('/')
    })
    it('Edit element', () => {
       EditItem.lastElementOfList();
       EditItem.editElementOfList()
    })
})