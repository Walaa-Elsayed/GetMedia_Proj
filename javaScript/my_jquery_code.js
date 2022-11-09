
$(document).ready(function () {


    
    $("#contact-icon").click(function () {
         //$("#contact-popup").show(); 
    
      $("#contact-popup").toggle(); 
    });


        $(".header_button").on({
            mouseenter: function(){
              $(this).css("width", "250px");
              $(this).css("height", "80px");
            },  
            mouseleave: function(){
                $(this).css("width", "220px");
                $(this).css("height", "70px");
            }, 
            
          });


          $("#home_voucher_btn").on({
            mouseenter: function(){
              $(this).css("width", "250px");
              $(this).css("height", "80px");
            },  
            mouseleave: function(){
                $(this).css("width", "220px");
                $(this).css("height", "70px");
            }, 
             
          });

          $("#contact-form").dblclick(function(){
            $(this).hide();
          });


    //Contact Form validation on click event
    $("#contact-form").on("submit", function () {
        var valid = true;
        $(".info").html("");
        $("inputBox").removeClass("input-error");

        var userName = $("#userName").val();
        var userEmail = $("#userEmail").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        if (userName == "") {
            $("#userName-info").html("required.");
            $("#userName").addClass("input-error");
        }
        if (userEmail == "") {
            $("#userEmail-info").html("required.");
            $("#userEmail").addClass("input-error");
            valid = false;
        }
        if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
        {
            $("#userEmail-info").html("invalid.");
            $("#userEmail").addClass("input-error");
            valid = false;
        }

        if (subject == "") {
            $("#subject-info").html("required.");
            $("#subject").addClass("input-error");
            valid = false;
        }
        if (message == "") {
            $("#userMessage-info").html("required.");
            $("#message").addClass("input-error");
            valid = false;
        }
        return valid;

    });

    
});


$('body').scrollspy({
    target: '#main-nav'
});

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
    // Check for a hash value
    if (this.hash !== '') {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            // Add hash to URL after scroll
            window.location.hash = hash;
        });
    }
});