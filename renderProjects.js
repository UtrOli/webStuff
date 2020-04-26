function renderProjectCards(){
  var myProjects = projects;
  for (let i=0;i<myProjects.GM.length;i++){
    renderCard(myProjects.GM[i],"#GM");
  }
  for (let i=0;i<myProjects.p5.length;i++){
    renderCard(myProjects.p5[i],"#p5");
  }
  for (let i=0;i<myProjects.three.length;i++){
    renderCard(myProjects.three[i],"#three");
  }
}

function renderCard(project, id){
    let code = '<a href="'+project.link+'"><div class="card card-space zoom">' +
            '<img src="'+project.image +'" class="card-img-top" alt="...">'+
            '<div class="card-body">'+
            '<h5 class="card-title">'+project.name+'</h5>'+
            '<p class="card-text">'+project.idea+'</p>'+
            ''+
            '</div></div></a>'
    let child = $(id).append(code);
}
