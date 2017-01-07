// window.alert()
//
// http://stackoverflow.com/questions/558981/getting-a-list-of-associative-array-keys
// for getting list of keys
// "keyhere" in dictionaryname --> true or false to check

function FindWords(){
	var letters = $('#letters').val();

	wordhash = {}
	//wordlist2 = ['banana', 'pie', 'cow', 'eip', 'pei'];
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


	
	// var testdict = {
	// 	"af": ["1", "2", "3"],
	// 	"b": ["4"]
	// };
	// // testdict["af"] = ['1', '2', '3'];
	// // testdict["f"] = ['4', '5', '6'];	
	// // testdict["f"].push('7');
	// document.write(("af" in testdict)+"<br>");
	// document.write(testdict['f']);
	// document.write("b" in testdict);


}

function getOrdered(letterlist){
	var sorted = letterlist.split('').sort();
	return sorted.join('');

}