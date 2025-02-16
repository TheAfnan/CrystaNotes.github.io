function toggleSemester(semesterId) {
    var semester = document.getElementById(semesterId);
    if (semester.style.display === "none" || semester.style.display === "") {
      semester.style.display = "block";
    } else {
      semester.style.display = "none";
    }
  }

  