$(function(){  //kui dokument laetud hakkab tegema
	// 2.punkt algus
	var esimene = new User("Rene", "Kütt", "10/02/1998", "Computer Science", 5.0); //kasutaja klass
	$("#name").text(esimene.firstname + " " + esimene.lastname);
	$("#birthdate").text(esimene.birthdate);
	$("#faculty").text(esimene.faculty);
	$("#gpa strong").text(esimene.gpa);
	
	let courses=[new Course("Algoritmid ja andmestruktuurid",3,99), //neli kursuse klassi
				new Course("Andmebaasid",2,91),
				new Course("Software project",5,75),
				new Course("Web developement",3,100)]
	
	$("tbody").children().each(function(indeks,course){ //käin üle tabeli ja lisan kursused
		course.childNodes[3].innerText=courses[indeks].title;
		course.childNodes[5].innerText=courses[indeks].semester;
		course.childNodes[7].innerText=courses[indeks].grade;
	});
	// 2.punkt lõpp
	// 3.punkt algus

    $("#courses-button").click(function(){
        $($('#courses-button')).addClass('active');
        $("#profile-button").removeClass('active');
        $("#courses-container").addClass('active');
        $("#profile-container").removeClass('active');
    });
    $("#profile-button").click(function(){
        $($('#profile-button')).addClass('active');
        $("#courses-button").removeClass('active');
        $("#profile-container").addClass('active');
        $("#courses-container").removeClass('active');
    });

    // 3.lõpp
    // 4.punkt algus

    $("#add-course-button").click(function(){
        $("#add-course").toggle();
    });

    // 4.punkti lõpp
});

