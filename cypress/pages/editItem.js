import CreateItem from "../pages/createItem";

class EditItem{

    elements = {
        btnEdit: () => cy.get('button[ng-click="strangerlist.setCurrentItem(item)"]'),
        btnUpdateItem: () => cy.get('.ng-scope > .pull-right')
    }

    editElementOfList(){
        this.elements.btnEdit().first().click();
    }

    clearDescription(){
        CreateItem.elements.textBox().clear();
    }

    editDescription(description){
        CreateItem.enterDescription(description)
    }

    updateItemClick(){
        this.elements.btnUpdateItem().click();
    }

}

module.exports = new EditItem();
