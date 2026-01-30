async function handler() {
    let characters = [];
    let password = "";
    
    const passwordLength = parseInt(process.env.TAMANHO_SENHA) || 12;

    if (process.env.LETRAS_MAIUSCULAS === 'true') {
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LETRAS_MINUSCULAS === 'true') {
        characters.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMEROS === 'true') {
        characters.push(..."0123456789");  
    }

    if (process.env.SIMBOLOS === 'true') {
        characters.push(..."!@#$%^&*()-_=+[]{}|;:',.<>?/");
    }
    
    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handler;