Backendless.initApp("688CD216-C4A8-7925-FF26-ED0BFBBE8900","AAD209FB-4F42-7DDB-FF24-B0F1E410CF00");

$(document).on("pageshow","#todopage", onPageShow);

function onPageShow() {
	console.log("page shown");
    
	$("#taskList").empty();
      
	//run a query
	Backendless.Data.of( "Tasks" ).find().then( processResults).catch(error);
    
    $(document).on("click", "#addTaskButton", onAddTask);

	


} 

function onAddTask() {
		console.log("add task button clicked");
        var tasktext = $("#addTaskText").val();
        
        var newTask = {};
        newTask.Task = tasktext;
    
        Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error);

}

function saved(savedTask) { 
      console.log( "new Contact instance has been saved" + savedTask);
}

function  processResults(tasks) {
    alert(tasks[1].Task)
    
    //add each tasks
    for (var i = 0; i < tasks.length; i++) { 
        $("#taskList").append("<li>"+tasks[i].Task+"</li>");
    }
    
    //refresh the listview
    $("#taskList").listview('refresh');


}

function error(err) {
    alert(err);
}


  
