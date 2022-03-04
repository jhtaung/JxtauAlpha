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

Dotnet - EF Core
- Install-Package Microsoft.EntityFrameworkCore.SqlServer
- Install-Package Microsoft.EntityFrameworkCore.Design
- Install-Package Microsoft.EntityFrameworkCore.Tools
- dotnet ef dbcontext scaffold "Server=BMWCSP_N;Database=PlanData;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Modelsdotnet
- dotnet ef dbcontext scaffold "Server=BMWCSP_N;Database=PlanData;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Data -t claim

Angular - new project
- npm install -g @angular/cli@latest
- ng --version
- ng new client
- cd client
- ng serve
- ng add @angular/material
- ng add @angular/cdk
- ng g s weather –skip-tests

Angular - ssl


Angular - new component
- ng g c modules/claim

VS Code Settings
- exclude bin, obj
- compact folder
- private _, this off

Git
- git status
- git init
- dotnet new gitignore
