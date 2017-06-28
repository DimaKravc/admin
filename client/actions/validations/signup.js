import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data, type) {
    let errors = {};

    if (!type || type['usernameIsEmpty']) {
        if (Validator.isEmpty(data.username)) {
            errors.username = 'Это поле обязательно к заполнению';
        }
    }
    if (!type || type['isEmail']) {
        if (!Validator.isEmail(data.email)) {
            errors.email = 'Недопустимый адрес электронной почты';
        }
    }
    if (!type || type['emailIsEmpty']) {
        if (Validator.isEmpty(data.email)) {
            errors.email = 'Это поле обязательно к заполнению';
        }
    }
    if (!type || type['passwordIsEmpty']) {
        if (Validator.isEmpty(data.password)) {
            errors.password = 'Это поле обязательно к заполнению';
        }
    }
    if (!type || type['passwordIsLength']) {
        if (Validator.isLength(data.password, {max: 7})) {
            errors.password = 'Введите не менее 8 символов';
        }
    }
    if (!type || type['passwordIsConfirmation']) {
        if (Validator.isEmpty(data.passwordConfirmation)) {
            errors.passwordConfirmation = 'Это поле обязательно к заполнению';
        }
    }
    if (!type || type['passwordIsEquals']) {
        if (!Validator.equals(data.password, data.passwordConfirmation)) {
            errors.passwordConfirmation = 'Пароли должны совпадать';
        }
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}