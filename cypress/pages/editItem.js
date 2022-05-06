class EditItem{

    elements = {
        lastElement: () => cy.get('ul li').last(),
        btnEdit: () => cy.get('button[ng-click="strangerlist.setCurrentItem(item)"]')
    }

    lastElementOfList(){
        this.elements.lastElement();
    }

    editElementOfList(){
        this.elements.btnEdit().click();
    }

}

module.exports = new EditItem();
