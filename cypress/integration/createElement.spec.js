import createItem from '../pages/createItemt';

describe('Create elements tests', () => {

    before('Enter to the site',() => {
        cy.visit('/');
    })
    
    it('Upload image test', () => {
        const imagePath = 'images/strangerThings.jpg';
        createItem.uploadImage(imagePath);
    })

    it('Enter description box', () => {
        const description = 'I upload a stranger Things image';
        createItem.enterDescription(description);
    })
    
    it('Create item', () => {
        createItem.btnCreateItem();
    })



})