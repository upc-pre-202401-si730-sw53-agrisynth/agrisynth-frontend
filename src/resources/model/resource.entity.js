export class Resource {
    constructor(id = 0, name = '', quantity = 0, type = '', purchase = 0, sale = 0, imageUrl = '') {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.type = type;
        this.purchase = purchase;
        this.sale = sale;
        this.imageUrl = imageUrl;
    }
}
