function deafGrandma() {
    //requires $ npm install prompt-sync 
    const prompt = require('prompt-sync')();
    
    let hasLowercaseLetter = str => (/[a-z]/.test(str)),
        hasAllUppercaseLetters = str => (/[A-Z]/.test(str)),
        count = 0;
    
    while(count < 2) {
        let output = prompt('HEY KID!')

        if (count > 0 && output === 'GOODBYE!') {
            console.log('LATER SKATER!')
            return;
        }
        else if (output === 'GOODBYE!') {
            console.log('LEAVING SO SOON?')
            count++
        }
        else if (output === '') console.log('what?!')

        else if (hasLowercaseLetter(output)) console.log('SPEAK UP, KID!') 

        else if (hasAllUppercaseLetters(output)) console.log('NO, NOT SINCE 1946')
    }
}

deafGrandma()
    

    
    
