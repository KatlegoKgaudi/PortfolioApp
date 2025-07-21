using Microsoft.AspNetCore.Components.Web;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();



app.MapGet("/", () => "Hello World!");

List<Project> projectList = new List<Project>{
    new Project("GreenTech", 1, "Https://greentechholdings.co.za"),
    new Project("Waki", 2, "Https://waki.co.za"),
};

app.MapGet("projects", () => projectList);

//Get = Read,  Post = Create, Update = Put, Delete = Delete

app.Run();
