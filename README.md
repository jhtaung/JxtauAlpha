# JxtauAlpha
boilerplate for api .net core and client angular

Dotnet - new web api project
- dotnet –info
- dotnet new -h
- dotnet new sln
- dotnet new webapi -o api
- dotnet sln add api
- dotnet dev-certs https – trust
- cd api
- dotnet watch run

Angular - new project
- ng new client
- cd client
- ng serve
- ng add @angular/material
- ng add @angular/cdk
- ng g s weather –skip-tests

Dotnet - EF Core
- Install-Package Microsoft.EntityFrameworkCore.SqlServer
- Install-Package Microsoft.EntityFrameworkCore.Design
- Install-Package Microsoft.EntityFrameworkCore.Tools
- dotnet ef dbcontext scaffold "Server=BMWCSP_N;Database=PlanData;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Modelsdotnet

Angular - new component
Ng g c modules/claim

dotnet ef dbcontext scaffold "Server=BMWCSP_N;Database=PlanData;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Data -t claim

VS Code Settings
- exclude bin, obj
- compact folder
- private _, this off

Git
- git status
- git init
- dotnet new gitignore
