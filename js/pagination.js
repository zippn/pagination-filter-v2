//Storing student list(s)
var oldList = $('.student-list');
var allStudents = oldList.children();
var newArrayofStudentList = [];

//define number of lists to make
const newListSize = Math.ceil(allStudents.length/10);






function parseList() {

    //track student
    let currentStudent = 0;

    console.log(allStudents);

    for (let x = 0; x < newListSize; x+=1){
        let studentList = [];//clear temp student list

        //traverse 10 students
        for (let y = 0; y < 10; y+=1){
                if (allStudents[currentStudent]) {
                    studentList.push(allStudents[currentStudent]);
                    currentStudent+=1;
                }

        }
        newArrayofStudentList.push(studentList);//new size 10 student list list
//        console.log(studentList);


    }
}

function createHtmlLists() {

    let listsHtml = '';//store html for all lists

    for (let x = 0; x < newArrayofStudentList.length; x += 1) {

        let currentListHtml = `<ul id="list-${x+1}" class='student-list'>`;//initiate single list of 10 max students

        for (let y = 0; y < 10; y+=1){
            if (newArrayofStudentList[x][y]) {
                currentListHtml += `<li class="student-item cf">${newArrayofStudentList[x][y].innerHTML}</li>`;
            }

        }

        currentListHtml += `</ul>`;//close list
        listsHtml +=currentListHtml;//add to combine list html


    }
    return listsHtml;
}

function createPagination() {

    let paginationHtml = `<div class="pagination"><ul>`;

    for (let x = 0; x < newArrayofStudentList.length; x += 1) {
        paginationHtml += `<li><a href="#">${x+1}</a></li>`;

    }
    paginationHtml +=`</ul></div>`;

    return paginationHtml;
}
//parse the default list
parseList();
//attach new lists
$('.page').append(createHtmlLists());
$('.page').append(createPagination());


//remove default list
$('.student-list:first').remove();
console.log(newArrayofStudentList);
console.log(createHtmlLists());