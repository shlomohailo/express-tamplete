const validEmail = (email) => {
    const temp = email.indexOf("@");
    const last = email.slice(email.length - 4);
    if (temp > 0 && last == ".com") {
        return true;
    }
    return false
}

const passwordValid = (password, currentPassword) => {
    if (password == currentPassword) {
        return true;
    }
    return false
}

const checkAgeOver = (age) => {
    if (age > 18) {
        return true;
    }
    return false;
}

module.exports = { validEmail, passwordValid,checkAgeOver }