<?php require_once 'config.php'; ?>
<!DOCTYPE html>
<html>
    <head>
        <title>Demo Gird</title>
        <meta charset='utf-8'>
        <link rel='stylesheet' href='css/style.css'/>
    </head>

    <body>
        <h1>
            Quiz using PHP, jQuery, Ajax and MySQL
        </h1>

        <?php $response = mysql_query("select * from questions"); ?>

<form method='post' id='quiz_form'>
    <?php while ( $result = mysql_fetch_array($response) ) { ?>
        <div id="question_<?php echo $result['id']; ?>" class='questions'>
            <h2 id="question_<?php echo $result['id']; ?>">
                <?php echo $result['id'] . ". " . $result['question_name']; ?>
            </h2>
            <div class='align'>
                <input type="radio" value="1" id='radio1_<?php echo $result['id']; ?>' name='<?php echo $result['id']; ?>'>
                <label id='ans1_<?php echo $result['id']; ?>' for='1'><?php echo $result['answer1']; ?></label>
                <br/>
                <input type="radio" value="2" id='radio2_<?php echo $result['id']; ?>' name='<?php echo $result['id']; ?>'>
                <label id='ans2_<?php echo $result['id']; ?>' for='1'><?php echo $result['answer2']; ?></label>
                <br/>
                <input type="radio" value="3" id='radio3_<?php echo $result['id']; ?>' name='<?php echo $result['id']; ?>'>
                <label id='ans3_<?php echo $result['id']; ?>' for='1'><?php echo $result['answer3']; ?></label>
                <br/>
                <input type="radio" value="4" id='radio4_<?php echo $result['id']; ?>' name='<?php echo $result['id']; ?>'>
                <label id='ans4_<?php echo $result['id']; ?>' for='1'><?php echo $result['answer4']; ?></label>
                <input type="radio" checked='checked' value="5" style='display:none' id='radio5_<?php echo $result['id']; ?>' name='<?php echo $result['id']; ?>'>
            </div>
            <br/>
            <input type="button" id='next<?php echo $result['id']; ?>' value='Next!' name='question' class='butt'/>
        </div>
    <?php } ?>
</form>
        
        
        <div id='result'>
            <img src='results.jpg' alt='Results'/>
            <br/>
        </div>

        <div id="demo1" class="demo" style="text-align:center;font-size: 25px;">
            00:00:00
        </div>
        <script src="js/jquery-1.9.1.min.js"></script>
        <script src="js/watch.js"></script>
        <script>
            $(document).ready(function () {
                
                $('#demo1').stopwatch().stopwatch('start'); // start stopwatch 
                
                var steps = $('form').find(".questions"); 
                console.log("Steps " + steps);
                
                var length = steps.length;
                console.log(length);
                
                var count = steps.size();
                console.log("Count " + count);
                
                steps.each(function(index){
                   console.log( index + ": " + $( this ).text() ); 
                });
                
                steps.each(function (i) {
                    hider = i + 2;
                    console.log("inital hider value " + hider + "\n");
                    if (i == 0) {
                        $("#question_" + hider).hide(); // initial value  question_2
                        console.log($("#question_" + hider));
                        createNextButton(i);
                    }
                    else if (count == i + 1) {
                        var step = i + 1;
                        console.log("Step next " + step);
                        //$("#next"+step).attr('type','submit');
                        $("#next" + step).on('click', function () {
                            submit();
                        });
                    }
                    else {
                        $("#question_" + hider).hide();
                        console.log("else " +  hider );
                        createNextButton(i);
                    }

                });
                function submit() {
                    var serialize = $('form').serialize();
                    $.ajax({
                        type: "POST",
                        url: "ajax.php",
                        data: serialize,
                        success: function (msg) {
                            $("#quiz_form,#demo1").addClass("hide");
                            $('#result').show();
                            $('#result').append(msg);
                        }
                    });
                    console.log(serialize);

                }
                function createNextButton(i) {
                    var step = i + 1;
                    console.log("Next first " + step);
                    var step1 = i + 2;
                    console.log("Next second " + step);
                    $('#next' + step).on('click', function () {
                        console.log("createNextButton " + step)
                        $("#question_" + step).hide();
                        $("#question_" + step1).show();
                    });
                }
                /*setTimeout(function () {
                    submit();
                }, 50000);*/
            });
        </script>
    </body>
</html>