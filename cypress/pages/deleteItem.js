class DeleteItem{

    elements = {
        btnDelete: () => cy.get('button[ng-click="strangerlist.open(item)]"'),
        btnConfirmDelete: () => cy.get('.btn-primary')
    }

    btnDeleteLastItem(){
        this.elements.btnDelete().last();
    }

    confirmDelete(){
        this.elements.btnConfirmDelete();
    }
}

module.exports = new DeleteItem();