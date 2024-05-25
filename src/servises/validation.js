const validateField = (id, value) => {
    let regex;
    switch(id) {
        case 'tags':
        case 'english':
            regex = /^[A-Z]+$/i;
            if (!regex.test(value)) {
                return "Enter an english word";
            }
            break;
        case 'russian':
            regex = /^[А-ЯЁ]+$/i;
            if (!regex.test(value)) {
                return "Enter a russian word";
            }
            break;
        default:
            return '';
    }
    return '';
};

export default validateField