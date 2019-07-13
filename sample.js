$(document).ready(function () {

    // a function to read all subject points everytime you click a button that needs it. this will help to not rewrite codes 
    function get_subjects_points() {
        let subject_points = [Number($('#national_language').val()),
        Number($('#english').val()),
        Number($('#mathematics').val()),
        Number($('#science').val()),
        Number($('#society').val())
        ];
        return subject_points;
    }

    function score_indicate() {
        // By making such a description, in the variable called subject_points
        // You can create an array of [language score, English score, math score, science score, society score].
        let subject_points = get_subjects_points();

        // Furthermore, by making such a description, the total point is output to the right part: "total point:"
        let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
        $("#sum_indicate").text(sum);

        // write the process to output the average point referring to the above here
    };

    function get_achievement() {
        let response;
        // Write a process to output a string of rank values ("A" if the average score is 80 or more, "B" if it is 60 or more, "C" if it is 40 or more, "D" if it is less than 40)
        let subjects = get_subjects_points();
        let total_working_points = (subjects.length) * 100;
        let sum_of_subjects = 0;
        subjects.forEach(subject => {
            sum_of_subjects += subject
        });
        let average_score_percent = (sum_of_subjects * 100) / total_working_points;
        if (average_score_percent > 80 && average_score_percent <= 100) {
            response = 'A';
            $('#evaluation').text(response)
        } else if (average_score_percent >= 60 && average_score_percent < 80) {
            response = 'B';
            $('#evaluation').text(response)
        } else if (average_score_percent >= 40 && average_score_percent < 60) {
            response = 'C';
            $('#evaluation').text(response)
        } else if (average_score_percent < 40 && average_score_percent >= 0) {
            response = 'D'
            $('#evaluation').text(response)
        } else {
            response = 'not possible'
            $('#evaluation').text(response)
        }
        return response;
    }

    function get_pass_or_failure() {
        let response;
        // write a process of giving a character string "pass" if all subjects have 60 or more points, and a character string of "fail" if there is at least one subject with less than 60 points.
        let subjects_points = get_subjects_points();
        // this code line will try to find marks which are lower than 40
        let lower_marks = subjects_points.find(subject_point => {
            return subject_point < 60
        });
        // if lower marks is undefined that means that there are no marks lower than 60, which means pass else fail
        response = lower_marks == undefined ? 'Pass' : 'Fail';
        $('#judge').text(response);
        return response;
    }

    function judgement() {
        // write the processing to output contents such as “Your grade is A when you press the “final judge” button.
        // By writing the following, if you click the button of "final judge", "Your grade is (the value of" rank "is put here). A process is implemented in which a light blue balloon with the text “(The value of“ judgment ”) is is output.
        let rank = get_achievement();
        let judgement = get_pass_or_failure();
        $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ` + rank + `. you ` + judgement + `</label>`);
    };

    $('#national_language, #english, #mathematics, #science, #society').change(function () {
        score_indicate();
    });

    $('#btn-evaluation').click(function () {
        get_achievement();
    });

    $('#btn-judge').click(function () {
        get_pass_or_failure();
    });

    $('#btn-declaration').click(function () {
        judgement();
    });
});