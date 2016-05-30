(function () {
    $('#imageform').ajaxForm({
       // The 'beforeSubmit' callback can be provided as a hook for running pre-submit logic or for validating the form data.
        beforeSubmit: function () {
            count = 0;
            val = $.trim( $('#images').val() );
            console.log( val + " Thank you for your comment!");
            if (val == '') {
                count = 1;
                $("#images").next('span').html("Please select your images");
                console.log("Main input  value ++++ " + val);
                console.log("count value ++++ " + count);
            }
            console.log('Initialize outside ' + count);
            if (count == 0) {
                console.log('Initialize  inside ++  ' + count);
                for (var i = 0; i < $('#images').get(0).files.length; ++i) {
                    img = $('#images').get(0).files[i].name;
                    console.log(img);
                    var extension = img.split('.').pop().toUpperCase();
                    console.log(extension);
                    if (extension != "PNG" && extension != "JPG" && extension != "GIF" && extension != "JPEG") {
                        console.log(extension);
                        count = count + 1;
                        console.log(  " how many data are count " + count );
                    }
                }
                console.log("count value ******** " + count);
                if (count > 0)
                    $("#images").next('span').html("Please select valid images");
            }
            console.log(count);
            if (count > 0) {
                console.log("false value count =============  " + count);
                return false;
                
            } else {
                console.log("True count value ===== " + count);
                $("#images").next('span').html("");
            }



        },
        beforeSend: function () {
            $('#loader').show();
            $('#image_upload').hide();
        },
        success: function (msg) {
            console.log("you have successfully add the images");
        },
        complete: function (xhr) {
            $('#loader').hide();
            $('#image_upload').show();

            $('#images').val('');
            console.log($('#images').val(''));
            $('#error_div').html('');
            console.log($('#error_div').html(''));
            result = xhr.responseText;
            console.log(result);
            result = $.parseJSON(result);
            console.log(result);
            base_path = $('#base_path').val();
            console.log(base_path);
            $.each(result, function (index, value) {
                if (value.success) {
                    name = base_path + 'images/' + value.success;
                    html = '';
                    html += '<image src="' + name + '">';
                    $('#uploaded_images #success_div').append(html);
                } else if (value.error) {
                    error = value.error
                    html = '';
                    html += '<p>' + error + '</p>';
                    $('#uploaded_images #error_div').append(html);
                }

            });
            $('#error_div').delay(5000).fadeOut('slow');

            showProducts();
        }
    });


function showProducts() {
                    // change page title
                    
                    // fade out effect first
                    $('#page-content').fadeOut( 2000, function () {
                        console.log("fadeOut complete");
                        $(this).load('read.php', function () {
                            
                            // hide loader image
                             //loaderImg.hide();
                            // fade in effect
                            $(this).fadeIn( 2000 ,function(){
                            // Animation complete
                            console.log("fadeIn complete");
                          });
                        });
                    });
                }





})();  

$(document).ready(function () {
                // view products on load of the page
                showProducts();
            // read products
                function showProducts() {
                    // change page title
                    
                    // fade out effect first
                    $('#page-content').fadeOut( 2000, function () {
                        console.log("fadeOut complete");
                        $(this).load('read.php', function () {
                            
                            // hide loader image
                             //loaderImg.hide();
                            // fade in effect
                            $(this).fadeIn( 2000 ,function(){
                            // Animation complete
                            console.log("fadeIn complete");
                          });
                        });
                    });
                }

               



               function changePageTitle(page_title) {
                // change page title
                $('#page-title').text(page_title);
                // change title tag
                document.title = page_title;
            }
            });