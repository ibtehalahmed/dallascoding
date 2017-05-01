
$(document).ready(function() {
    
$("#AjaxForm,#AjaxForm_2").validate({
    rules: {
      FName: {
        required: true,
        minlength: 5
      },
      Email: {
        required: true,
        email: true
      },
      Message: {
        required: true,
        minlength: 5
    }
  },
  errorPlacement: function(error, element) {

  },
  submitHandler: function(form) {
    $.ajax({
      dataType: "json",
      url: './index.php',
      data: $("#AjaxForm,#AjaxForm_2").serialize() 
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      console.log('done!');
      $(".ajax-form").hide();
      $(".form-thank-you").fadeIn("400");
    });
      return false; //to stop the form from submitting
    }
  });
  
  $("#AjaxForm_2").validate({
    rules: {
      FName: {
        required: true,
        minlength: 5
      },
      Email: {
        required: true,
        email: true
      },
      Message: {
        required: true,
        minlength: 5
    }
  },
  errorPlacement: function(error, element) {

  },
  submitHandler: function(form) {
    $.ajax({
      dataType: "jsonp",
      url: '',
      data: $("#AjaxForm_2").serialize() 
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      console.log('done!');
      $(".ajax-form").hide();
      $(".form-thank-you").fadeIn("400");
    });
      return false; //to stop the form from submitting
    }
  });
  
  
});