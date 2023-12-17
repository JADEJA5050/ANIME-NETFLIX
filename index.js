$(document).ready(function() {
    $("#anime").waypoint(function() {
        $("#anime").addClass("animate__animated animate__fadeInRight");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime1").waypoint(function() {
        $("#anime1").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "75%"});
});

$(document).ready(function() {
    $("#anime2").waypoint(function() {
        $("#anime2").addClass("animate__animated animate__fadeInRight");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime3").waypoint(function() {
        $("#anime3").addClass("animate__animated animate__fadeInRight");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime4").waypoint(function() {
        $("#anime4").addClass("animate__animated animate__fadeInRight");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime5").waypoint(function() {
        $("#anime5").addClass("animate__animated animate__fadeInRight");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime6").waypoint(function() {
        $("#anime6").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime7").waypoint(function() {
        $("#anime7").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime8").waypoint(function() {
        $("#anime8").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime9").waypoint(function() {
        $("#anime9").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime11").waypoint(function() {
        $("#anime11").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "83%"});
});


$(document).ready(function() {
    $("#anime10").waypoint(function() {
        $("#anime10").addClass("animate__animated animate__fadeInRight");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime12").waypoint(function() {
        $("#anime12").addClass("animate__animated animate__fadeInUp");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime13").waypoint(function() {
        $("#anime13").addClass("animate__animated animate__fadeIn");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime14").waypoint(function() {
        $("#anime14").addClass("animate__animated animate__fadeInUp");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime15").waypoint(function() {
        $("#anime15").addClass("animate__animated animate__fadeInUp");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime16").waypoint(function() {
        $("#anime16").addClass("animate__animated animate__fadeIn");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime17").waypoint(function() {
        $("#anime17").addClass("animate__animated animate__fadeInUp");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime18").waypoint(function() {
        $("#anime18").addClass("animate__animated animate__fadeInUp");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime19").waypoint(function() {
        $("#anime19").addClass("animate__animated animate__fadeIn");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime20").waypoint(function() {
        $("#anime20").addClass("animate__animated animate__fadeInUp");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime21").waypoint(function() {
        $("#anime21").addClass("animate__animated animate__fadeInUp");
    }, {offset: "83%"});
});

$(document).ready(function() {
    $("#anime22").waypoint(function() {
        $("#anime22").addClass("animate__animated animate__fadeIn");
    }, {offset: "85%"});
});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('.navbar');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('navbar');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '.navbar',
            rootMargin: '0px 0px -40%',
        });
    };
});