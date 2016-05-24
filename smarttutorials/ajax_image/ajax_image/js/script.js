(function () {
    $('#imageform').ajaxForm({
        
        beforeSubmit: function () {
            count = 0;
            val = $.trim( $('#images').val() );
            console.log(val);
            console.log( "\n" + "Thank you for your comment!" );
            if (val == '') {
                count = 1;
                $("#images").next('span').html("Please select your images");
            }
            if (count == 0) {
                for (var i = 0; i < $('#images').get(0).files.length; ++i) {
                    img = $('#images').get(0).files[i].name;
                    var extension = img.split('.').pop().toUpperCase();
                    if (extension != "PNG" && extension != "JPG" && extension != "GIF" && extension != "JPEG") {
                        count = count + 1;
                        console.log( count + " how many data are count");
                    }
                }
                if (count > 0)
                    $("#images").next('span').html("Please select valid images");
            }
            if (count > 0) {
                return false;
            } else {
                $("#images").next('span').html("");
            }



        },
        beforeSend: function () {
            $('#loader').show();
            $('#image_upload').hide();
        },
        success: function (msg) {
        },
        complete: function (xhr) {
            $('#loader').hide();
            $('#image_upload').show();

            $('#images').val('');
            $('#error_div').html('');
            result = xhr.responseText;
            result = $.parseJSON(result);
            base_path = $('#base_path').val();
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


        }
    });

})();  