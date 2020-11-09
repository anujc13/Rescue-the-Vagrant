//document.getElementById("demo").onclick = function() {myFunction()};

//function myFunction() {
  //document.getElementById("demo").innerHTML = "YOU CLICKED ME!";}


//paste volunteer info
var volunteers;
var counter=0;
var person;

function saveInfo(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    person = name + "(" + email + ")";
    volunteers[counter] = person;
    counter = counter + 1;
    alert(person);
}

//Atlantic County
var Atlantic = ["Shelter 1: Emergency Shelter - S 16th St", "\nShelter 2: Family Promise of Atlantic County"];
var AtlanticCounty = ["Shelter 1: Emergency Shelter - S 16th St", "\nShelter 2: Family Promise of Atlantic County"];

//Bergen County
var Bergen = ["Shelter 1: Emergency Housing / Shelter", "\nShelter 2: Motel Placement Program"];
var BergenCounty = ["Shelter 1: Emergency Housing / Shelter", "\nShelter 2: Motel Placement Program"];


//Burlington County
var Burlington = ["Shelter 1: Belmont Homes Special Services", "\nInterfaith Hospitality Network"];
var BurlingtonCounty = ["Shelter 1: Belmont Homes Special Services", "\nInterfaith Hospitality Network"];

//Camden County
var Camden = ["Shelter 1: Warming Centers", "\nShelter 2: RAIN (Reaching Adolescents In Need) Center"];
var CamdenCounty = ["Shelter 1: Warming Centers", "\nShelter 2: RAIN (Reaching Adolescents In Need) Center"];

//Capemay County
var Capemay = ["Shelter 1: Catholic Social Services Cape May", "\nShelter 2: Family Shelter"];
var CapemayCounty = ["Shelter 1: Catholic Social Services Cape May", "\nShelter 2: Family Shelter"];

//Cumberland County
var Cumberland = ["Shelter 1: Martin Luther King Academy", "\nShelter 2: Cumberland Family Shelter"];
var CumberlandCounty = ["Shelter 1: Martin Luther King Academy", "\nShelter 2: Cumberland Family Shelter"];

//Essex County
var Essex = ["Shelter 1: Goodwill Rescue Mission Inc.", "\nShelter 2: ANSWERS Moving Forward Inc."];
var EssexCounty = ["Shelter 1: Goodwill Rescue Mission Inc.", "\nShelter 2: ANSWERS Moving Forward Inc."];

//Gloucaster County
var Gloucaster = ["Together Youth Shelter", "\nShelter 2: Center for Family Services"];
var GloucasterCounty = ["Together Youth Shelter", "\nShelter 2: Center for Family Services"];

//Hudson County
var Hudson = ["Shelter 1: St. Lucy's Emergency Shelter", "\nShelter 2: Hope House"];
var HudsonCounty = ["Shelter 1: St. Lucy's Emergency Shelter", "\nShelter 2: Hope House"];

//Hunterdon County
var Hunterdon = ["Shelter 1: Hunterdon Youth Services", "\nShelter 2: Interfaith Hospitality Network"];
var HunterdonCounty = ["Shelter 1: Hunterdon Youth Services", "\nShelter 2: Interfaith Hospitality Network"];

//Mercer County
var Mercer = ["Shelter 1: Cold Weather Oveflow Shelter", "\nShelter 2: Hope House"];
var MercerCounty = ["Shelter 1: Cold Weather Oveflow Shelter", "\nShelter 2: Hope House"];

//Middlesex County
var Middlesex = ["Shelter 1: Coming Home of Middlesex County", "\nShelter 2: Homefirst Interfaith Housing & Family Services, Inc"];
var MiddlesexCounty = ["Shelter 1: Coming Home of Middlesex County", "\nShelter 2: Homefirst Interfaith Housing & Family Services, Inc"];

//Monmouth County
var Monmouth = ["Shelter 1: Family Promise of Monmouth County", "\nShelter 2: Easter Seals New Jersey"];
var MonmouthCounty = ["Shelter 1: Family Promise of Monmouth County", "\nShelter 2: Easter Seals New Jersey"];

//Morris County
var Morris = ["Shelter 1: Family Promise of Morris County", "\nShelter 2: Homeless Solutions"];
var MorrisCounty = ["Shelter 1: Family Promise of Morris County", "\nShelter 2: Homeless Solutions"];

//Passaic County
var Passaic = ["Shelter 1: Community Service Program Assistance", "\nShelter 2: Hope Through Care"];
var PassaicCounty = ["Shelter 1: Community Service Program Assistance", "\nShelter 2: Hope Through Care"];

//Salem County
var Salem = ["Shelter 1: Family Promise of Salem County", "\nShelter 2: Salem County Women's Services"];
var SalemCounty = ["Shelter 1: Family Promise of Salem County", "\nShelter 2: Salem County Women's Services"];

//Somerset County
var Somerset = ["Shelter 1: Samaritan Homeless Interim", "\nShelter 2: Naomi's Way Transitional Housing"];
var SomersetCounty = ["Shelter 1: Samaritan Homeless Interim", "\nShelter 2: Naomi's Way Transitional Housing"];

//Sussex County
var Sussex = ["Shelter 1: Family Promise of Sussex County", "\nShelter 2: Amazing Grace Mission"];
var SussexCounty = ["Shelter 1: Family Promise of Sussex County", "\nShelter 2: Amazing Grace Mission"];

//Union County
var Union = ["Shelter 1: Family Promise of Union County", "\nShelter 2: Turning Point Community Services - Support Services"];
var UnionCounty = ["Shelter 1: Family Promise of Union County", "\nShelter 2: Turning Point Community Services - Support Services"];

//Warren County
var Warren = ["Shelter 1: St Anne's Center, Grandma's House", "\nShelter 2: Safe Harbor Easton"];
var WarrenCounty = ["Shelter 1: St Anne's Center, Grandma's House", "\nShelter 2: Safe Harbor Easton"];




function findTown(){
    document.getElementById("output").innerHTML = "";
    var output = document.getElementById("town").value;

    if(output == "Atlantic" || "Atlantic County") {
        document.getElementById("output").innerHTML = Atlantic || AtlanticCounty;
    } 
    
    if(output == "Bergen" || "Bergen County") {

        document.getElementById("output").innerHTML = Bergen || BergenCounty;

    } 
    
    if(output == "Burlington" || "Burlington County") {

        document.getElementById("output").innerHTML =  Burlington || BurlingtonCounty;

    } 
    
    if(output == "Camden" || "Camden County") {

        document.getElementById("output").innerHTML =  Camden || CamdenCounty;;

    } 
    
    if(output == "Capemay" || "Capemay County") {

        document.getElementById("output").innerHTML = Capemay || CapemayCounty;

    } 
    
    if(output == "Cumberland" || "Cumberland County") {

        document.getElementById("output").innerHTML = Cumberland || CumberlandCounty;

    } 
    
    if(output == "Essex" || "Essex County") {

        document.getElementById("output").innerHTML = Essex || EssexCounty;

    } 
    
    if(output == "Gloucaster" || "Gloucaster County") {

        document.getElementById("output").innerHTML = Gloucaster || GloucasterCounty;

    } 
    
    if(output == "Hudson" || "Hudson County") {

        document.getElementById("output").innerHTML = Hudson || HudsonCounty;

    } 
    
    if(output == "Hunterdon" || "Hunterdon County") {

        document.getElementById("output").innerHTML = Hunterdon || HunterdonCounty;

    } 
    
    if(output == "Mercer" || "Mercer County") {

        document.getElementById("output").innerHTML = Mercer || MercerCounty;

    } 
    
    if(output == "Middlesex" || "Middlesex County") {

        document.getElementById("output").innerHTML = Middlesex || MiddlesexCounty;

    } 
    if(output == "Monmouth" || "Monmouth County") {

        document.getElementById("output").innerHTML = Monmouth || MonmouthCounty;

    } 
    
    if(output == "Morris" || "Morris County") {

        document.getElementById("output").innerHTML = Morris || MorrisCounty;

    }
    
    if(output == "Passaic" || "Passaic County") {

        document.getElementById("output").innerHTML = Passaic || PassaicCounty;

    } 
    
    if(output == "Salem" || "Salem County") {

        document.getElementById("output").innerHTML = Salem || SalemCounty;

    } 
    
    if(output == "Somerset" || "Somerset County") {

        document.getElementById("output").innerHTML = Somerset || SomersetCounty;

    } 
    
    if(output == "Sussex" || "Sussex County") {

        document.getElementById("output").innerHTML = Sussex || SussexCounty;

    } 
    
    if(output == "Union" || "Union County") {

        document.getElementById("output").innerHTML = Union || UnionCounty;

    } 
    
    if(output == "Warren" || "Warren County") {

        document.getElementById("output").innerHTML = Warren || WarrenCounty;


    }
    
}


//document.getElementById("info-button").onclick = function() {useInfo()};
//function useInfo() {
    
    //alert(name);
    //var person = name + "(" + email + ")";
    //volunteers[counter] = person;
    //counter = counter + 1;
//}





