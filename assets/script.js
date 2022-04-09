var saveBtn = $('.saveBtn');
var timecard = $('timecard');
var timeblock = $('timeblock');
var currentDay = $('currentDay');
var currentHour = $('');
var formcontrol = $('.form-control')

todos = [];
// moment.js is helping the color of the input field change. Moment also diplays the date of the planner 
var currentDay = moment().format("dddd, MMM Do YYYY")
console.log(currentDay)

$("#currentDay").text(currentDay);

var currentHour = moment().format('HH');
console.log(currentHour)

$("#currentHour")

// This function changes the colors of the input field that identifies the time of day and wether the task is due over due or is in present. 
$(".form-control").each(function(){
   let clock = $(this).attr("id")
  
   if (currentHour == clock) {
        
    $(this).addClass('present')

   }
   else if (currentHour > clock) {
    $(this).removeClass('present')   
    $(this).addClass('past')
   }
   else if (currentHour < clock) {   
    $(this).removeClass('past')   
    $(this).addClass('future')

    }

})
saveBtn.on('click',savetodos)

// this function pushes the userinput = (todo list) into the local storage.
function savetodos(){
        todos = [];
       for (var i = 1; i < 10; i++){ 
        var currentHour = $('.'+ i );
        console.log(currentHour.val());
        todos.push(currentHour.val());
       
    }
    localStorage.setItem('userinput',JSON.stringify(todos));
    console.log(todos);

    }

    
    




      



        



// create the moment function *
    //just need to make the current time display *

// create the JSON save and parse and stringify fumction for storing local storage items 
    //make local storage work

//attach button to save or lock buttons 
    //make save or save button
    

//optional: make button animate for saving 