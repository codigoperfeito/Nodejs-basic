const { create } = require('connect-mongo');
const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email : { type: String, required: true},
    senha : { type: String, required: true}
})
const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }
    async register(){
        this.validacao()
        if(this.errors.length > 0) return
        try{
            this.user = await LoginSchema.create(this.body)
        }catch(e){
            console.log(e)
        }
    }
    validacao(){
        // validacao
        // email precisa ser valido
        if(!validator.isEmail(this.body.email)){
            this.errors.push('Email Invalido')
        }
        // a senha precisa ter entre 3 a 50 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 50){
            this.errors.push('A senha precisa ter entre 3 a 50 caracteres')
        }
        this.cleanUp();
    }
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;