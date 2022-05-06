import CreateItem from '../pages/createItem';

describe('Create elements tests', () => {

    before('Enter to the site',() => {
        cy.visit('/');
    })
    
    it('Upload image test', () => {
        const imagePath = 'images/strangerThings.jpg';
        CreateItem.uploadImage(imagePath);
    })

    it('Enter description box', () => {
        const description = 'The team enter to the darkness';
        CreateItem.enterDescription(description);
    })
    
    it('Create item', () => {
        CreateItem.btnCreateItem();
    })



})