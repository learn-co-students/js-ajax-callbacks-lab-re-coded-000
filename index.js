var url="https://api.github.com/gists"

$(document).ready(function(){
  submitForm();

})


function submitForm(){
  $("form").submit(function(e){
    e.preventDefault();
    var token = $("#txtT").val()
    var description = $("#txtD").val();
    var fileName = $("#txtF").val();
    var content = $("#txtC").val();
    //console.log(this,token,description,fileName,content)
    createGist(token,description,fileName,content);
  })


}

function createGist(token,description,fileName,content) {
  var input=  {
  "description": description,
  "public": true,
  "files": {
    }
  }
  input['files'][fileName]={
    "content":content
  }
  $.ajax({
    url:url,
    type:"post",
    data:JSON.stringify(input),
    headers: {
      Authorization: "token "+token,
    },

    success:function(response) {
      $("#result").html(`<a href="${response.html_url}">${response.description}</a>`)
    }

  })
}




function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});