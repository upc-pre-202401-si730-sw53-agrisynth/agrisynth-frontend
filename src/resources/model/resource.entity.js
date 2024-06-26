export class Resource {
    constructor(name = '', quantity = 0, type = '', purchase = '', sale = '', imageUrl = '') {
        this.name = name;
        this.quantity = quantity;
        this.type = type;
        this.purchase = purchase;
        this.sale = sale;
        this.imageUrl = imageUrl;
    }
}
