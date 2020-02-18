
//adds user tooltip hover functionality 
$(document).ready(function() {
    $('.identity-card').hover(function(){
        $(this).parent().parent().parent().find('.tooltips').show();
    },function () {
        $(this).parent().parent().parent().find('.tooltips').hide();
    });

    
});

(function setSessionStorage() {
    let projects = JSON.parse(sessionStorage.getItem('projects'));
    let usersData = JSON.parse(sessionStorage.getItem('usersData'));
    if (!projects && !usersData) {
        console.log('NO PROJECT OR USERS DATA');
        let projects = "<%= projects %>";
        let usersData = "<%= usersData %>";
        sessionStorage.setItem('projects', JSON.stringify(projects));
        sessionStorage.setItem('usersData', JSON.stringify(usersData));
    }
    console.log(projects, usersData);
    return [projects, usersData];
})();

