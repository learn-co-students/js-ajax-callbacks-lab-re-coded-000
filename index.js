function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
function searchRepositories(){
$.get("https://api.github.com/search/repositories?q="+$('#searchTerms').val(),data=>{
const template=Handlebars.compile($('#results-template').html())
 $('#results').html(template(data));
}).fail(error=> {displayError()})
}
function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}
function showCommits(arg){
  var repo=arg.dataset.repository;
  var owner=arg.dataset.owner;
  $.get("https://api.github.com/repos/"+owner+"/"+repo+"/commits",data=>{
    const template=Handlebars.compile($('#commit-template').html())
    $('#details').html(template(data))
  }).fail(error=>{displayError()})

}