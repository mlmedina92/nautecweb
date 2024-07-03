let errors = {}
const onlyNumbers = /^[0-9]*$/
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/

export function nameCon(name) {
    if (name.length < 1) {
        errors = { ...errors, name: 'Llena este campo obligatorio' }
    } else {
        errors = { ...errors, name: "" }
    }
    return errors
}

export function phoneCon(phone) {
    if (phone.length < 1) {
        errors = { ...errors, phone: 'Llena este campo obligatorio' }
    } else if (!onlyNumbers.test(phone)) {
        errors = { ...errors, phone: 'El teléfono debe contener solo números' }
    } else if (phone.length > 13) {
        errors = { ...errors, phone: 'Ingresa un número de teléfono válido' }
    } else {
        errors = { ...errors, phone: "" }
    }
    return errors
}

export function emailCon(email) {
    if (email.length < 1) {
        errors = { ...errors, email: 'Llena este campo obligatorio' }
    } else if (!regexEmail.test(email)) {
        errors = { ...errors, email: 'Favor de registrar una dirección de correo electrónico verdadera' }
    } else if (email.length > 40) {
        errors = { ...errors, email: 'El email no debe superar los 40 caracteres' }
    } else {
        errors = { ...errors, email: "" }
    }
    return errors
}

export function preferenceCon(preference) {
    if (preference.length < 1) {
        errors = { ...errors, preference: 'Llena este campo obligatorio' }
    } else {
        errors = { ...errors, preference: "" }
    }
    return errors
}

export function nameCap(name) {
    if (name.length < 1) {
        errors = { ...errors, name: 'Llena este campo obligatorio' }
    } else {
        errors = { ...errors, name: "" }
    }
    return errors
}

export function phoneCap(phone) {
    if (phone.length < 1) {
        errors = { ...errors, phone: 'Llena este campo obligatorio' }
    } else if (!onlyNumbers.test(phone)) {
        errors = { ...errors, phone: 'El teléfono debe contener solo números' }
    } else if (phone.length > 13) {
        errors = { ...errors, phone: 'Ingresa un número de teléfono válido' }
    } else {
        errors = { ...errors, phone: "" }
    }
    return errors
}

export function emailCap(email) {
    if (email.length < 1) {
        errors = { ...errors, email: 'Llena este campo obligatorio' }
    } else if (!regexEmail.test(email)) {
        errors = { ...errors, email: 'Favor de registrar una dirección de correo electrónico verdadera' }
    } else if (email.length > 40) {
        errors = { ...errors, email: 'El email no debe superar los 40 caracteres' }
    } else {
        errors = { ...errors, email: "" }
    }
    return errors
}