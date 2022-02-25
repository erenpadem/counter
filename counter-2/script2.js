//another way
let count = 0;

const number = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        } else if (styles.contains("increase")) {
            count++;
        }
        if (count > 0) {
            number.style.color = "green";
        } else if (count == 0) {
            number.style.color = "black";
        } else if (count < 0) {
            number.style.color = "red";
        }
        number.textContent = count;
    });

});