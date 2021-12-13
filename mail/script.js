const emailList = ['gino@gmail.com', 'pino@gmail.com', 'lino@gmail.com', 'mino@gmail.com'];
const emailInput = prompt('Inserisci la tua email');
let flag = false;

for (i = 0; i < emailList.length; i++) {
    
    if (emailInput === emailList[i]) {
        flag = true;
        break;
    }
}

if (flag) {
    console.log('Benvenuto!');
} else {
    console.log('Non puoi accedere');
}