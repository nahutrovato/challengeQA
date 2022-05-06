import EditItem from '../pages/editItem';

describe('Edit elements test', () => {

    before('Enter the site',() => {
        cy.visit('/')
    })
    
    it('Click the first element in the list', () => {
        EditItem.firstElementOfList().click();
     })

    it('Clear old description', () => {
        EditItem.clearDescription().clear();;
    })

    it('Edit description text', () =>{
        const newDescription = 'This is a new description';
        EditItem.editDescription(newDescription);
    })

    it('Update item click', () => {
        EditItem.updateItemClick();
    })
})