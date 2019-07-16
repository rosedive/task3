$(document).ready(function () {
	let average = 0;



	function getValue() {
		let subject_points = [Number($('#national_language').val()),
		Number($('#english').val()),
		Number($('#mathematics').val()),
		Number($('#science').val()),
		Number($('#society').val())
		];
		return subject_points;

	};


	function score_indicate() {
		// By making such a description, in the variable called subject_points
		// You can create an array of [language score, English score, math score, science score, society score].
		let subject_points = [Number($('#national_language').val()),
		Number($('#english').val()),
		Number($('#mathematics').val()),
		Number($('#science').val()),
		Number($('#society').val())
		];

		// Furthermore, by making such a description, the total point is output to the right part: "total point:"
		let sum = subject_points[0];
		sum = sum + subject_points[1];
		sum = sum + subject_points[2];
		sum = sum + subject_points[3];
		sum = sum + subject_points[4];
		average = sum / 5;
		$("#sum_indicate").text(sum);
		$("#avarage_indicate").text(average);
		// write the process to output the average point referring to the above here
	};

	function get_achievement() {
		// Write a process to output a string of rank values ("A" if the average score is 80 or more, "B" if it is 60 or more, "C" if it is 40 or more, "D" if it is less than 40)

		if (average >= 80) {
			return "A";
		} else if (average >= 60 && average < 80) {
			return "B";
		} else if (average >= 40 && average < 60) {
			return "C";
		} else {
			return "D";
		}
	};

	function get_pass_or_failure() {
		let subjects = getValue();
		let judge = "Passed";
		for (let i = 0; i < subjects.length; i++) {
			if (subjects[i] < 60) {
				judge = "Failed";
			}
			// write a process of giving a character string "pass" if all subjects have 60 or more points, and a character string of "fail" if there is at least one subject with less than 60 points.
		}
		return judge;
	};

	function judgement() {
		let grade = get_achievement();
		let pass = get_pass_or_failure();
		// write the processing to output contents such as “Your grade is A when you press the “final judge” button.
		// By writing the following, if you click the button of "final judge", "Your grade is (the value of" rank "is put here). A process is implemented in which a light blue balloon with the text “(The value of“ judgment ”) is is output.
		$('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${grade}. ${pass}</label>`);
	};

	$('#national_language, #english, #mathematics, #science, #society').change(function () {
		score_indicate();
	});

	$('#btn-evaluation').click(function () {
		$("#evaluation").text(get_achievement());
	});

	$('#btn-judge').click(function () {
		$("#judge").text(get_pass_or_failure());
	});

	$('#btn-declaration').click(function () {
		$("#declaration").text(judgement());
	});
});