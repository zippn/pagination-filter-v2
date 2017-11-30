


function showPage(page) {

    let startIndex = page*10-10;//where to start

    //reset displayed student
    $('.student-item').removeClass('active-student');
    $('.pagination li a').removeClass('active');

    $('.pagination li').eq(page-1).find('a').addClass('active');//set active page

    for(let x=startIndex; x<startIndex+10; x+=1){
        $('.student-item').eq(x).addClass('active-student');//set student to display
       // console.log(x);
    }

}
function appendPageLinks(studentList) {

//Storing student list(s)
    let allStudentsSize = studentList.children().length;

//define number of pages to make
    let newListSize = Math.ceil(allStudentsSize/10);




    let paginationHtml = `<div class="pagination"><ul>`;//open pagination

    for (let x = 0; x < newListSize; x += 1) {
        paginationHtml += `<li><a href="#" onclick="showPage(${x+1})">${x+1}</a></li>`;//call showPage when clicked

    }
    paginationHtml +=`</ul></div>`;

    $('.page').append(paginationHtml);
}
//attach pagination
appendPageLinks($('.student-list'));
//set active
showPage(1);

