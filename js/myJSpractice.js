/**
 * Created by Pankaj Shrivastava on 1/21/2017.
 */

$(document).ready(function () {

    //document.write("Hello World - 1"); //  Deletes all the elements in the page... So use it only for testing.
/*
    $('div').text(' This text is coming from Jquery');

    alert("Text of paragraph = " + $('p').text());

    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);*/

/*
    function func1() {
        $a = 5;
    }

    func1();

    alert($a);
*/

/*
    var name="pankaj";
    console.log(name.toUpperCase());
    console.log(name.substring(2,4).toUpperCase());
*/



    // The functions available on autocomplete depends upon the type of the variable
/*
    // var num = 6.7934384;
    // var num = "abc";
    var num = true;
    alert(num.valueOf());
*/

    // alert(Math.random())
    // alert(Math.round(4.500000001))


    // alert(jQuery.now())


//    Clock
/*
    var i = 0;

    function getDate() {

        var currentTime = new Date();

        var dateString = currentTime.getHours()%12 + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() +" pm" ;

        $('.innerdiv').text(dateString);

        i++;

        if(i===5){
            clearInterval(timer);
            $('.innerdiv').text(" Time is Up !");
        }
    }

    var timer = setInterval(getDate, 1000);*/

/*    var a = [1,2,3];
    var c= [4,5,6];
    var d= [7,8,9];

   a= a.concat(c,d);
    alert(a);*/

// $('#a').click(function () {
//     $('div').slideDown(5000, function () {
//         // console.log("hide complete");
//     });
// })

/*
$('#b').click(function () {
    $('div').fadeIn(5000, function () {
        console.log("show complete")
    });
})
*/

});
