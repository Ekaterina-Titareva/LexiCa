const validateField = (id, value) => {
    let regex;
    switch(id) {
        case 'tags':
        case 'english':
            regex = /^[A-Z]+$/i;
            if (!regex.test(value)) {
                return "введите английское слово";
            }
            break;
        case 'russian':
            regex = /^[А-ЯЁ]+$/i;
            if (!regex.test(value)) {
                return "введите русское слово";
            }
            break;
        default:
            return '';
    }
    return '';
};

export default validateField