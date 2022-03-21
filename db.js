import { initializeApp } from 'firebase';
import { firebaseConfig } from './config';

const db = initializeApp(firebaseConfig);

export default db;