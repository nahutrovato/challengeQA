import CreateItem from "../pages/createItem";

class EditItem{

    elements = {
        btnEdit: () => cy.get('button[ng-click="strangerlist.setCurrentItem(item)"]')
    }

    editElementOfList(){
        this.elements.btnEdit().last().click();
    }

    clearDescription(){
        CreateItem.elements.textBox().clear();
    }

    editDescription(description){
        CreateItem.enterDescription(description)
    }

}

module.exports = new EditItem();
