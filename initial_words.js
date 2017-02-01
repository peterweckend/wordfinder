// used this to help create the initial dictionary

wordhash = {}
for (var i = 0; i < wordlist.length; i++){
	
	var wordkey = getOrdered(wordlist[i]);

	// create dictionary entry if needed, else store value
	if (wordkey in wordhash) {
		wordhash[wordkey].push(wordlist[i]);
	}
	else {

		wordhash[wordkey] = [];
		wordhash[wordkey].push(wordlist[i]);

	}
}

// string manipulating into dictionary format
for (var key in wordhash) {
	var output = '\''+key+'\': [';

	for (var j = 0; j < wordhash[key].length; j++){
		if (j == (wordhash[key].length - 1)) {	// last time
			output = output+'\''+wordhash[key][j]+'\']';
		} else {
			output = output + '\''+wordhash[key][j]+ '\', ';
		}
	}
	output = output + ',';
	console.log(output);
}