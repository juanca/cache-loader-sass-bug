import styles from './styles.css';

console.log('Sanity check.');

const div = window.document.createElement('div');
div.className = `${styles.container} global-classname`;

window.document.body.appendChild(div);
