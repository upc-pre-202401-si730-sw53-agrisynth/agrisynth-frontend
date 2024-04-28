
export class Terrain {
    constructor(name = '', description = '', location = '', usageClauses = '', sizeSquareMeters = 0, image = '') {
        this.name = name;
        this.description = description;
        this.location = location;
        this.usageClauses = usageClauses;
        this.sizeSquareMeters = sizeSquareMeters;
        this.image = image;
    }
}