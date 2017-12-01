


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

    var anchors = $('.pagination a');
    console.log(anchors);
//set click events for each link
    anchors.each(function () {
        $(this).click(function(){
            showPage($(this).text());
        });
        console.log($(this).text());
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
    
    const input = $('.student-search input').val();
    const student = $('.student-item');
    var match = false ;
    let newList = `<ul class="student-list">`;

    if(input=='') {

        newList +=`<h3>no student’s found</h3>`;
        match = false;
        
    }else {
        student.each(function () {

            if ($(this).find('h3').is(':contains("' + input + '")'||$(this).find('.email').is(':contains("' + input + '")'))) {
                newList += '<li class="student-item cf"> '+$(this)[0].innerHTML+'</li>'
                console.log($(this)[0].innerHTML);
                if(!match){
                    match = true;
                }

            }

        });
    }

    newList += '</div>';

    $('.student-list').remove();
    $(newList).insertAfter('.page-header');
    $('.pagination').remove();
    if (match) {
        appendPageLinks($('.student-list'));
        showPage(1);
        console.log(input);
    }
   // if($)
}
//attach search form
appendSearch();
//attach pagination
appendPageLinks($('.student-list'));
//set active
showPage(1);

