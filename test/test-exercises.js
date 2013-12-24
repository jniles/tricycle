(function() {

	/** Helper method to check an exercise's solution. */
	function check(exercise, correct, incorrect) {
		incorrect = (incorrect || []);
		test(exercise.title, function() {
			var i;
			for (i = 0; i < correct.length; i++) {
				ok(exercise.solve(correct[i]));
			}
			for (i = 0; i < incorrect.length; i++) {
				ok(!exercise.solve(incorrect[i]));
			}
		});
	}
		
	var solvers = {
		'Multiplication': function(exercise) {
			exercise.numbers = [2, 3, 4];
			check(exercise, ['24'], ['23', '25']);
		},
		'Remainder': function(exercise) {
			exercise.dividend = 8;
			exercise.divisor = 3;
			check(exercise, ['2'], ['0']);
		},
		'Factor': function(exercise) {
			exercise.number = 10;
			check(exercise, ['2', '5'], ['1', '10']);
		},
		'Digit of Pi': function(exercise) {
			check(exercise, ['2'], ['9', '6']);
		},
		'Evens Product': function(exercise) {
			exercise.lower = 3;
			exercise.upper = 6;
			check(exercise, ['24'], ['4']);
		},
		'Character Count': function(exercise) {
			exercise.text = '1234567890';
			check(exercise, ['10'], ['9', '11']);
		},
	};

	/** Loop over all exercises, and execute a test for each. */
	(function() {
		var exercise;
		for (var i = 0; i < EXERCISES.length; i++) {
			exercise = EXERCISES[i];
			try {
				solvers[exercise.title](exercise);
			} catch (e) {
				console.log('Missing test: ' + exercise.title + '.');	
			}
		}
	}())	
}());
