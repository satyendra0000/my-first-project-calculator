
let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => { 
        let btnText = e.target.innerHTML;

        if (btnText === '=') {
            try {
                string = eval(string);
                inputBox.value = string;
            } catch (error) {
                inputBox.value = "Error";
            }
        } else if (btnText.toLowerCase() === 'ac') {
            string = "";
            inputBox.value = string;
        } else if (btnText.toLowerCase() === 'del') {
            string = string.slice(0, -1);
            inputBox.value = string;
        } else {
            string += btnText;
            inputBox.value = string;
        }
    });
});
