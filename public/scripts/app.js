// Custom JS
$(function(){


    $('#missionStatement').on('click', function(){
        console.log("Mission Statement Clicked");
    })
    
    $('#project01').on('click', function(){
        console.log("starting");
        $("#project02").removeClass('active');
        $("#project03").removeClass('active');
        $('#project01').addClass('active');
        console.log("worked");
        $('#proj01').css({"display": "flex", "background-color":"rgb(225, 225, 225)", "color": "black"});
        $('#proj02').css("display", "none");
        $('#proj03').css("display", "none");
    
    })

    $('#project02').on('click', function(){
        console.log("starting");
        $("#project01").removeClass('active');
        $("#project03").removeClass('active');
        $('#project02').addClass('active');
        console.log("worked");
        $('#proj02').css({"display": "flex", "background-color":"rgb(225, 225, 225)", "color": "black"});
        $('#proj01').css("display", "none");
        $('#proj03').css("display", "none");
    
    })

    $('#project03').on('click', function(){
        console.log("starting");
        $("#project02").removeClass('active');
        $("#project01").removeClass('active');
        $('#project03').addClass('active');
        console.log("worked");
        $('#proj03').css({"display": "flex", "background-color":"rgb(225, 225, 225)", "color": "black"});
        $('#proj02').css("display", 'none');
        $('#proj01').css("display","none");
    
    })
    
    $('#java').on('click', function(){
            $(".serviceCard").hide();
            $('#javaCard').toggle();
    })

    $('#cSharp').on('click', function(){
        $(".serviceCard").hide();
        $('#cSharpCard').toggle();
    })

    $('#python').on('click', function(){
        $(".serviceCard").hide();
        $('#pythonCard').toggle();
    })

    $('.webDevGroup').on('click', function(){
        $(".serviceCard").hide();
        $('#webCard').toggle();
    })
});
