1. Create New Web Site in IIS name 'MyAssetsOnline' at port 7070; Set Web Path to OS.MAO.Web Folder
2. Open Solution, Right Click Solution and Select Restore Nuget Packages (this will download all packages included in Solution)
3. Run


Sample code for Accessing Service in ValueController.cs at WebApi Project
Sample code for Accessing DB using EF in TestService.cs at Service Project


Advantages:
=========
To introduce a new entity just add a Model Class and add it into DBContext "Context.cs" as required in EF
You can mark your Entity as Auditable and Archivable via attribute, No need to add extra fields for that.
Each Assembly has its own responsibility to register its Component, refer Ioc Folder in every project



