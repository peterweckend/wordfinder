
// main wordfinder function, called after Submit button
function InitialWords(){
	var finalsolutions = [];

	var letters = $('#letters').val(); 	// get entered letters
	letters_or = getOrdered(letters); 	// arrange into alphabetical order
	var checkset = getSubsets(letters_or.split('')); // find all subsets
	
	
	// for each subset, find all words that can be formed with it
	for (var i= 0; i < checkset.length; i++){
		finalsolutions = FindWords(checkset[i], finalsolutions);	
	}
	
	// output
	if (finalsolutions.length == 0){
		$('#wordsfound').text('No words found.');
	} else {
		$('#wordsfound').text('Solutions: '+finalsolutions.join(', '));
	}
	
}

// Find all exact anagrams and put in finalsolutions
function FindWords(letters, finalsolutions){
	var letters_or = getOrdered(letters); 
	if (letters_or in wordhash){	// check if ordered version has words
		for (var i=0; i<wordhash[letters_or].length; i++){
			finalsolutions.push(wordhash[letters_or][i]);	// grab each mapped word
		}
	}
	return finalsolutions;




}
// return word in alphabetical order
function getOrdered(letterlist){
	var sorted = letterlist.split('').sort();
	return sorted.join('');

}


// word is an array, returns all non-empty subsets
// all solutions returned are in alphabetical order
function getSubsets(word){
	var solution = [];
	

	if (word.length == 1){
		return word;
	} else {
		// decided to use divide and conquer for subsets
		var upper = Math.ceil(word.length / 2);
		var bottom = word.slice(0, upper);
		var top = word.slice(upper);
		var lhs = getSubsets(bottom);
		var rhs = getSubsets(top);

		// take every LHS subset, and also combine with every RHS subset
		for (var i = 0; i < lhs.length; i++){
			solution.push(lhs[i]);	
			for (var j = 0; j < rhs.length; j++){
				solution.push(lhs[i]+rhs[j]);
			}
		}
		// don't forget RHS subsets on their own
		for (var k = 0; k < rhs.length; k++){
			solution.push(rhs[k]);
		}

		var solutiontemp = []
		// eliminate non-unique subsets
		for (i = 0; i < solution.length; i++){
			if (solutiontemp.indexOf(solution[i]) < 0){
				solutiontemp.push(solution[i])
			}
		}
		return solutiontemp;

	}

}











