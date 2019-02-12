export default class User {
    constructor(name = '', phone='', email = '', address='', pass = '', password = '', password_confirmation ="" , profile= '', state='', client_id=0) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.pass = pass;
        this.password = password;
        this.profile= profile;
        this.state = state;
        this.client_id = client_id;
    }
}