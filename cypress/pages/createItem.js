class CreateItem{

    elements = {
        inputImage: () => cy.get('#inputImage'),
        textBox: () => cy.get(':nth-child(3) > .controls > .form-control'),
        btnCreateItem: () => cy.get('.ng-scope > .btn')
    }

    uploadImage(imagePath){
        this.elements.inputImage().attachFile(imagePath);
    }

    enterDescription(description){
        this.elements.textBox().type(description);
    }

    btnCreateItem(){
        this.elements.btnCreateItem().click();
    }
}

module.exports = new CreateItem();