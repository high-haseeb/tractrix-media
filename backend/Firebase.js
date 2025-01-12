// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBKERpsJWeYgRvMhGqHvrEJyDwRJ3DyhYo",
    authDomain: "wellbuild-9bc59.firebaseapp.com",
    databaseURL: "https://wellbuild-9bc59-default-rtdb.firebaseio.com",
    projectId: "wellbuild-9bc59",
    storageBucket: "wellbuild-9bc59.firebasestorage.app",
    messagingSenderId: "1041408520613",
    appId: "1:1041408520613:web:3ef6f9127d22e5f043784c"
  };

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
