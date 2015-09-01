$(document).ready(function(){
    $('#a').click(function(){
        $(this).slideToggle(function(){
            $("<p>Empty</p>").insertAfter(this);
        });
    });
    $('#b').click(function(){
        $(this).slideToggle(function(){
          $('<p style="font-size: 60px; text-align: center;">X</p>').insertAfter(this);
        });
    });
    $('#c').click(function(){
        $(this).slideToggle(function(){
            $("<p>Nothing here.</p>").insertAfter(this);
        });
    });
    $('#d').click(function(){
        $(this).slideToggle(function(){
            $("<p>Keep Clicking!</p>").insertAfter(this);
        });    
    });
    $('#e').click(function(){
        $(this).slideToggle(function(){
            $("<p>Sorry</p>").insertAfter(this);
        });    
    });
    $('#f').click(function(){
        $(this).slideToggle(function(){
            $("<p>No...</p>").insertAfter(this);
        });    
    });
    $('#g').click(function(){
        $(this).slideToggle(function(){
            $("<p>Hmmm</p>").insertAfter(this);
        });    
    });
    $('#h').click(function(){
        $(this).slideToggle(function(){
            $("<p>Unoccupied</p>").insertAfter(this);
        });    
    });
    $('#i').click(function(){
        $(this).slideToggle(function(){
            $("<p>So lonely</p>").insertAfter(this);
        });    
    });
    $('#j').click(function(){
        $(this).slideToggle(function(){
            $("<p>Vacant</p>").insertAfter(this);
        });    
    });
    $('#k').click(function(){
        $(this).slideToggle(function(){
            $("<p>Getting Colder!</p>").insertAfter(this);
        });    
    });
    $('#l').click(function(){
        $(this).slideToggle(function(){
            $("<p>Abandoned</p>").insertAfter(this);
        });    
    });
    $('#m').click(function(){
        $(this).slideToggle(function(){
            $("<p>Hollow space</p>").insertAfter(this);
        });    
    });
    $('#n').click(function(){
        $(this).slideToggle(function(){
            $("<p>Desolate</p>").insertAfter(this);
        });    
    });
    $('#o').click(function(){
        $(this).slideToggle(function(){
            $("<p>So Close!</p>").insertAfter(this);
        });    
    });
    $('#p').click(function(){
        $(this).slideToggle(function(){
            // $('<img src="img/smile.png">').insertAfter(this);
            $('<img src="http://i413.photobucket.com/albums/pp215/ylva51/smileys/privateeye-privateeye-detective-sherlock-smiley-emoticon-000225-design.gif" height="79px" width="85px">').insertAfter(this);
            alert("Mr.Mystery:  \"CONGARTULATIONS! You found my hideout and me.");
        });    
    });
});