export class User {
    constructor(id = 0, first_name = '', last_name = '', email = '',
                phone_number = 0, identification_number = 0, password = '') {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.identification_number = identification_number;
        this.password = password;
    }
}