// used this to create the initial dictionary

wordhash = {}
for (var i = 0; i < wordlist.length; i++){
	
	var wordkey = getOrdered(wordlist[i]);

	if (wordkey in wordhash) {
		wordhash[wordkey].push(wordlist[i]);
	}
	else {

		wordhash[wordkey] = [];
		wordhash[wordkey].push(wordlist[i]);

	}
}


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