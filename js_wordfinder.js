// window.alert()
//
// http://stackoverflow.com/questions/558981/getting-a-list-of-associative-array-keys
// for getting list of keys
// "keyhere" in dictionaryname --> true or false to check
// wordhash = {}

function InitialWords(){
	var finalsolutions = [];

	var letters = $('#letters').val();
	letters_or = getOrdered(letters);
	var checkset = getSubsets(letters_or.split(''));
	
	

	for (var i= 0; i < checkset.length; i++){
		finalsolutions = FindWords(checkset[i], finalsolutions);	
	}
	

	if (finalsolutions.length == 0){
		document.write("This word does not exist.");
	} else {
		// for (i = 0; i < finalsolutions.length; i++){
		// 	$('#wordsfound').text(finalsolutions[i]);
		// }
		$('#wordsfound').text('Solutions: '+finalsolutions.join(', '));
	}
	
}


function FindWords(letters, finalsolutions){
	var letters_or = getOrdered(letters); 
	if (letters_or in wordhash){
		for (var i=0; i<wordhash[letters_or].length; i++){
			finalsolutions.push(wordhash[letters_or][i]);
		}
	}
	return finalsolutions;
	// } else {
	// 	document.write("This word does not exist.");
	// }



}

function getOrdered(letterlist){
	var sorted = letterlist.split('').sort();
	return sorted.join('');

}



// function getSubsetsTest() {
// 	var letters = $('#letters').val();
// 	letters_or = getOrdered(letters);
// 	var final_solution = getSubsets(letters_or.split(''));
// 	window.alert(final_solution);
// }


// word is an array
function getSubsets(word){
	var solution = [];
	

	if (word.length == 1){
		return word;
	} else {
		var upper = Math.ceil(word.length / 2);
		var bottom = word.slice(0, upper);
		var top = word.slice(upper);
		// var bottom2 = bottom.split(',');
		// var top2 = top.split(',');
		var lhs = getSubsets(bottom);
		var rhs = getSubsets(top);

		for (var i = 0; i < lhs.length; i++){
			solution.push(lhs[i]);
			
			for (var j = 0; j < rhs.length; j++){
				solution.push(lhs[i]+rhs[j]);
			}
		}
		for (var k = 0; k < rhs.length; k++){
			solution.push(rhs[k]);
		}

		var solutiontemp = []
		for (i = 0; i < solution.length; i++){
			if (solutiontemp.indexOf(solution[i]) < 0){
				solutiontemp.push(solution[i])
			}
		}
		return solutiontemp;

	}
	//window.alert(count);


}











