const validateField = (identifier, value) => {
    let regex;
    let errorMessage;

    const errorMessages = {
        tags: "введите английское слово",
        english: "введите английское слово",
        russian: "введите русское слово"
    };

    switch(identifier) {
        case 'tags':
        case 'english':
            regex = /^[A-Z]+$/i;
            errorMessage = errorMessages.english;
            break;
        case 'russian':
            regex = /^[А-ЯЁ]+$/i;
            errorMessage = errorMessages.russian;
            break;
        default:
            return '';
    }

    if (!regex.test(value)) {
        return errorMessage;
    }
    return '';
};

export default validateField;