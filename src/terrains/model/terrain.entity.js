
export class Terrain {
    constructor(id= 0, name = '', description = '', location = '', usageClauses = '', sizeSquareMeters = 0, sale = 0, rent = 0, image = '') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.usageClauses = usageClauses;
        this.sizeSquareMeters = sizeSquareMeters;
        this.sale = sale;
        this.rent = rent;
        this.image = image;
    }
}