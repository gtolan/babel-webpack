//      
import '../src/styles/above-fold-inline.css';

const button = document.getElementById('alertBtn')
const es6Arrow = () => {
    alert('es6 transpiled')
}
button.addEventListener('click', es6Arrow)


