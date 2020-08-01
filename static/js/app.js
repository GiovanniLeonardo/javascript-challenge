// variable to hold table body
var tableBody = d3.select("tbody");

// variable to hold data
var Data = data;

// variable for filtered data on click
var filterData = d3.select("#filter-btn");
filterData.on("click", function() {
    
  // Prevent page refresh
  d3.event.preventDefault();
    
  // variable to hold and select input keys and get the html page
  var date = d3.select("#datetime");
  var city = d3.select("#cityname");
  var state = d3.select("#statename");
  var country = d3.select("#countryname");
  var shape = d3.select("#shapename");
    
  // variable to hold and get values of the inputs
  var dateValue = date.property("value");
  var cityValue = city.property("value").toLowerCase().trim();
  var stateValue = state.property("value").toLowerCase().trim();
  var countryValue = country.property("value").toLowerCase().trim();    
  var shapeValue = shape.property("value").toLowerCase().trim();

//  Create if conditions for multiple element filters

  if (dateValue != "") {
      Data = Data.filter(entry => entry.datetime === dateValue);
  }
  if (cityValue != "") {
       Data = Data.filter(entry => entry.city === cityValue);     
  }
  if (stateValue != "") {
       Data = Data.filter(entry => entry.state === stateValue);     
  }
  if (countryValue != "") {
       Data = Data.filter(entry => entry.country === countryValue);     
  }
  if (shapeValue != "") {
       Data = Data.filter(entry => entry.shape === shapeValue);     
  }  
  // console.log(Data);    
  renderData();
});

// create forEach loop to go through all sighting data
function renderData(){
  $("#tbodyid").empty();
  // console.log(Data);
  Data.forEach(function(sightings) {
      var row = tableBody.append("tr");
      Object.entries(sightings).forEach(function([key,value]) {
          var cell = tableBody.append("td");
          cell.text(value);
      });
  });
}

// Create variable to allow user to clear the filter
var clearFilter = d3.select("#clear-btn");
clearFilter.on("click", function() {
  location.reload();
});

// Render all Data
renderData();

