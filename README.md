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
- dotnet ef dbcontext scaffold "Server=NEONSDI_N;Database=Appeal;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Entities -t Appeal -t AppealContacts -t AppealStatusLog -t AppealStatusType -t AppellantType -t ContactType -t Department -t MeetingSchedule -t PlanType

Angular - new project
- npm install -g @angular/cli@latest
- ng --version
- ng new client
- cd client
- ng serve
- ng add @angular/material
- ng add @angular/cdk
- ng g s weather –skip-tests
- ng g c modules/pages/page --module app

Angular - resources
- http://json2ts.com/

VS Code Settings
- exclude bin, obj
- compact folder
- private _, this off

Git
- git status
- git init
- dotnet new gitignore

WYSIWYG 
- Tiny MCE
- Angular Editor

PowerShell
- remove-item node_modules -Recurse -Force