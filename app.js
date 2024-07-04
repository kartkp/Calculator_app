document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('.btn button');
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            switch (buttonText) {
                case 'AC':
                    result = '';
                    break;
                case 'DEL':
                    result = result.slice(0, -1);
                    break;
                case '=':
                    try {
                        result = eval(result.replace('X', '*'));
                    } catch {
                        result = 'Error';
                    }
                    break;
                case 'X':
                    result += '*';
                    break;
                default:
                    result += buttonText;
                    break;
            }

            inputBox.value = result;
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key;

        switch (key) {
            case 'Enter':
                handleInput('=');
                break;
            case 'Backspace':
                handleInput('DEL');
                break;
            case 'Escape':
                handleInput('AC');
                break;
            case '*':
                handleInput('*');
                break;
            default:
                if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '/') {
                    handleInput(key);
                }
                break;
        }
    });

    function handleInput(input) {
        const inputBoxValue = inputBox.value;
        switch (input) {
            case 'AC':
                inputBox.value = '';
                result = '';
                break;
            case 'DEL':
                inputBox.value = inputBoxValue.slice(0, -1);
                result = inputBox.value;
                break;
            case '=':
                try {
                    inputBox.value = eval(inputBoxValue.replace('X', '*').replace('/', '/')); 
                    result = inputBox.value.toString();
                } catch {
                    inputBox.value = 'Error';
                    result = '';
                }
                break;
            default:
                inputBox.value += input;
                result = inputBox.value;
                break;
        }
    }
});
