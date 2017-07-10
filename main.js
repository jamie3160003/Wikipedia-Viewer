var endpoint = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch";

$("#search button").click(function(){
  var searchTerm = $("#searchTerm").val();
  getFile(searchTerm);
});

function getFile(searchTerm){
  var url = endpoint + "&search="+ searchTerm + "&limit=10&namespace=0&format=json";
  $.ajax({
    url: url,
    type:"GET",
    dataType: "json",
    success: function(data){
      console.log(data);
      updateContent(data);
      
    }
    /**     
    error: function(){
      alert("Please enter a valid city name");
    }
    **/
  });
/** Wiki Api information 
https://en.wikipedia.org/w/api.php
?action=opensearch
&search=zyz          # search query
&limit=1             # return only the first result
&namespace=0         # search only articles, ignoring Talk, Mediawiki, etc.
&format=json         # jsonfm prints the JSON in HTML for debugging.
**/
}

function updateContent(data){
  var length = data[3].length;
  var html = "";
  /** check the format
  for(i = 0; i < length; i++){
    $("#result").append(data[i] + "<br>");
  }
  **/
  
  $("#result .container").empty();
  $("#result .container").append("<h1>Searching results of " + data[0] + ": </h1>");
  for(i = 0; i < length; i++){
    html += "<a href='" + data[3][i] + "' target='_blank' ><h2>" + data[1][i] + "</h2></a>";
    html += "<p>" + data[2][i] + "</p>";
    html += "<hr>";
  }
  
  $("#result .container").append(html);

}

