import CreateItem from "../pages/createItem";

class EditItem{

    elements = {
        btnEdit: () => cy.get('button[ng-click="strangerlist.setCurrentItem(item)"]'),
        btnUpdateItem: () => cy.get('.ng-scope > .pull-right')
    }

    firstElementOfList(){
        return this.elements.btnEdit().first();
    }

    clearDescription = () => CreateItem.elements.textBox();

    editDescription = (description) => CreateItem.enterDescription(description);

    updateItemClick = () => this.elements.btnUpdateItem().click();
    

}

module.exports = new EditItem();
