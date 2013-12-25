(function() {

    /** Helper method to check an exercise's solution. */
    function check(exercise, correct, incorrect) {
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
            check(exercise, ['2', '5'], ['1', '10', '20']);
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
        'Word Count': function(exercise) {
            exercise.text = 'One two three.';
            check(exercise, ['3'], ['2', '4']);
        },
        'Occurrences': function(exercise) {
            exercise.character = 'c';
            exercise.text = 'Backpack!';
            check(exercise, ['2'], ['1', '3']);
        },
        'Reverse': function(exercise) {
            exercise.text = 'aBc 123?';
            check(exercise, ['?321 cBa'], ['?321 aBc']);
        },
        'Missing': function(exercise) {
            exercise.lower = 5;
            exercise.upper = 10;
            exercise.numbers = [5, 6, 7, 9, 10];
            check(exercise, ['8'], ['4', '5', '10', '11']);
        },
        'Largest': function(exercise) {
            exercise.numbers = [5, 4, 3, 6, 2];
            check(exercise, ['6'], ['5', '2', '8']);
        },
        'Duplicate': function(exercise) {
            exercise.numbers = [1, 2, 3, 2, 4];
            check(exercise, ['2'], ['1', '3', '4']);
        },
        'Uppercase': function(exercise) {
            exercise.text = 'Hello, world!';
            check(exercise, ['HELLO, WORLD!'], ['Hello, world!']);
        },
        'Remove': function(exercise) {
            exercise.text = 'abc abc';
            exercise.character = 'c';
            check(exercise, ['ab ab'], ['ab abc']);
        },
        'Hex': function(exercise) {
            exercise.hex = '0xA';
            check(exercise, ['10'], ['0xA', 'a']);
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
