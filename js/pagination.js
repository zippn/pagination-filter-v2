


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
        paginationHtml += `<li><a href="#" class="page-link">${x+1}</a></li>`;//call showPage when clicked

    }
    paginationHtml +=`</ul></div>`;

    $('.page').append(paginationHtml);
    setPageLinks();
}
function setPageLinks() {

    var anchors = $('.pagination a');//find anchors
//set click events for each link
    anchors.each(function () {//assign click event to anchors
        $(this).click(function(){
            showPage($(this).text());
        });
    });


}
function appendSearch() {
    let form =`<div class="student-search">
          <input placeholder="Search for students...">
          <button onclick="searchList()">Search</button>
          </div>
          `;
    $('.page-header').append(form);
    
}
function searchList() {

    const input = $('.student-search input').val();//store input
    const student = $('.student-item');//all students
    var match = false ;//bool for match
    let newList = `<ul class="student-list">`;//create ul

    if(input) {//check for input


        student.each(function () {
            //check match, store if match
            if ($(this).find('h3').is(':contains("' + input + '")'||$(this).find('.email').is(':contains("' + input + '")'))) {
                newList += '<li class="student-item cf"> '+$(this)[0].innerHTML+'</li>'
             //   console.log($(this)[0].innerHTML);
                if(!match){
                    match = true;//set for match
                }

            }

        });
    }

    if(!match){
        newList +=`<h3>no student’s found</h3>`;//no match

    }

    newList += '</ul>';

    //remove old, add new list
    $('.student-list').remove();
    $('.pagination').remove();
    $(newList).insertAfter('.page-header');

    if (match) {//add links for match
        appendPageLinks($('.student-list'));
        showPage(1);
//        console.log(input);
    }
}
//attach search form
appendSearch();
//attach pagination
appendPageLinks($('.student-list'));
//set active
showPage(1);

