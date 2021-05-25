function deafGrandma() {
    //init response
	let response = prompt('hey kid')
	//to loop through response for upper/lowercase letters
	for (let i = 0; i < response.length; i++) {
		//check for empty response
		if (response == '') {
			let newResponse = response
			return console.log('WHAT?!')
			//any letter is lower
		} else if (response[i] === response[i].toLowerCase()) {
				return prompt('SPEAK UP, KID!')
				//all letters are upper
			}	else if (response === response.toUpperCase()) {
				return console.log('NO, NOT SINCE 1946!')
				//nested loop to see if response is one or two goodbyes
			} else if (response == 'GOODBYE!') {
				if (response == 'GOODBYE!') {
					return console.log('LATER, SKATER!')
				} else {
					return console.log('LEAVING SO SOON?')
				}
			}
	}
	let newResponse = prompt('')
}

deafGrandma();
