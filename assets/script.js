var saveBtn = $('.saveBtn');
var timecard = $('timecard');
var timeblock = $('timeblock');
var currentDay = $('currentDay');
var currentHour = $('');

var currentDay = moment().format("dddd, MMM Do YYYY")
console.log(currentDay)

$("#currentDay").text(currentDay);

var currentHour = moment().format('HH');
console.log(currentHour)

$("#currentHour")


$(".form-control").each(function(){
   let clock = $(this).attr("id")
  
   if (currentHour == clock) {
    $(this).removeClass('form-control')    
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


        




        



// create the moment function 
    //just need to make the current time display 

// create the JSON save and parse and stringify fumction for storing local storage items 
    //make local storage work

//attach button to save or lock buttons 
    //make save or lock button 
    

//optional: make button animate for saving 