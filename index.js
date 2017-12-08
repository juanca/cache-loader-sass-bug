import styles from './index.scss';

console.log('Sanity check.');

const div = window.document.createElement('div');
div.className = `${styles.container} global-box global-background-color`;

window.document.body.appendChild(div);
