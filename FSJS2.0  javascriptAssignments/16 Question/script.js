//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // - September, October or November, the season is Autumn.
    // - December, January or February, the season is Winter.
    // - March, April or May, the season is Spring
    // - June, July or August, the season is Summer

    var month = "MARCH";
    var season;

  var month = month.toLowerCase()
 
    if (month=="september"||month=="october"||month=="november"){
     season = "Autumn"
    }
    else if(month=="december"||month=="january"||month=="february"){
        season = "Winter";
    }
    else if(month=="march"||month=="april"||month=="may"){
        season = "Spring";
    }
    else if(month=="june"||month=="july"||month=="august"){
        season = "Summer";
    }

    console.log("season is ",season);