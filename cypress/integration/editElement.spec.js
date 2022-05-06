import EditItem from '../pages/editItem';

describe('Edit elements test', () => {

    before('Enter the site',() => {
        cy.visit('/')
    })
    
    it('Click the last element in the list', () => {
       EditItem.editElementOfList();
    })

    it('Clear old description', () => {
        EditItem.clearDescription();
    })

    it('Edit description text', () =>{
        const newDescription = 'This is a new description text';
        EditItem.editDescription(newDescription);
    })

    it('Update item click', () => {
        EditItem.updateItemClick();
    })
})