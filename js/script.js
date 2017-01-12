function replaceNouns() {
	request("/noun.html",".noun")
};

function replaceVerbs() {
	request("/verb.html",".verb")
};
function request(url,class_){
  var words=[];
    $.get(url, function(data) {
     $.each(data.split("\n"), function(i, item) {
     
       words.push(item);
    });  

//////////
     $(class_).each(function(index,span){
                 $(this).html(words[Math.floor(Math.random() * (words.length-1))])
                                         })

 //////////                                        
     }).fail(function(error) {alert('Something went wrong: ' + error);})

    //



}

$(document).ready(function (){
    $('#random_noun').on('click',function(){
    replaceNouns()
  })
  ///////
  $('#random_verb').on('click',function(){
    replaceVerbs()
  })
});
