function renderProjectCards(){
  var myProjects = projects;
  for (let i=0;i<myProjects.GM.length;i++){
    renderCard(myProjects.GM[i],"#GM");
  }
  for (let i=0;i<myProjects.p5.length;i++){
    renderCard(myProjects.p5[i],"#p5");
  }
}

function renderCard(project, id){
  let code = '<div class="card card-space" style="width: 18rem;">' +
            '<img src="'+project.image +'" class="card-img-top" alt="...">'+
            '<div class="card-body">'+
            '<h5 class="card-title">'+project.name+'</h5>'+
            '<p class="card-text">'+project.idea+'</p>'+
            '<a href="'+project.link+'" class="btn btn-primary">Go to page</a>'+
            '</div></div>'
  $(id).append(code);
}
