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

const checkAgeOver = (userDate) => {
    let today = new Date();
    let userBDate = new Date(userDate)
    let age = today.getFullYear() - userBDate.getFullYear();
    let month = today.getMonth() - userBDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < userBDate.getDate())) {
        age--;
    }
    return age > 18 ? true : false;
}


module.exports = { validEmail, passwordValid, checkAgeOver }