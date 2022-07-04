define({"0":{y:0,u:"../Content/Common/RC-copyright.htm",l:-1,t:"Preface",i:0.00260918317723556,a:"© 2014-2021 Reliable Controls® Corporation. All rights reserved.   This manual is for information purposes only. The contents and products described are subject to change without notice. Reliable Controls Corporation makes no representation with respect to this manual. In no event shall Reliable ..."},"1":{y:0,u:"../Content/RCWV/ContainerTopics/c_overview.htm",l:-1,t:"Overview",i:0.00260918317723556,a:"Overview RC‑WebView® is a browser-based, enterprise solution that meets or exceeds the BACnet Operator Workstation profile (B-OWS), allowing operators and administrators to manage any BACnet Internet-connected building configured with RC‑Studio® properties."},"2":{y:0,u:"../Content/RCWV/About-RCWV.htm",l:-1,t:"About RC-WebView",i:0.00260918317723556,a:"RC-WebView supports a hierarchy of websites, where RC-WebView administrators use the top-level website to manage administrative functionality, and operators use lower-level websites to carry out daily operations. Administrators can design and implement multiple operator websites in RC-WebView, each ..."},"3":{y:0,u:"../Content/RCWV/WebsiteSetup/RC-WebView3-Websites.htm",l:-1,t:"RC-WebView Enterprise Websites",i:0.00260918317723556,a:"RC-WebView supports multiple Enterprise Websites. Enterprise Websites  provide a convenient logical grouping of one or more connected systems and related functionality. Each Enterprise Website can be customized for the requirements of a particular group of operators, allowing administrators to ..."},"4":{y:0,u:"../Content/RCWV/Feature-List.htm",l:-1,t:"RC‑WebView features",i:0.00260918317723556,a:"RC‑WebView provides the following features. For a complete and up-to-date listing of product features, refer to the catalog and submittal sheets available from the Reliable Controls Dealer Support Center. BACnet Operator Workstation Take advantage of a web server that meets or exceeds the BACnet ..."},"5":{y:0,u:"../Content/RCWV/Architecture/IT-FAQ.htm",l:-1,t:"Frequently asked questions",i:0.00260918317723556,a:"There are several questions that IT professionals frequently ask about RC‑WebView. What is RC‑WebView? RC‑WebView is an enterprise-level solution for linking together multiple BACnet systems together, allowing centralized access for managing multiple building management systems. What is the ..."},"6":{y:0,u:"../Content/RCWV/Install-RCWV.htm",l:-1,t:"Install RC-WebView",i:0.00260918317723556,a:"Install RC-WebView Install RC-WebView on a Windows Server computer with at least 16GB of available disk space. RC-WebView also installs a SQL Server database during the installation process. When upgrading RC-WebView, the SQL Server database is maintained."},"7":{y:0,u:"../Content/RCWV/Installation/RC-WebView3-Installation-Prerequisites.htm",l:-1,t:"Installation prerequisites",i:0.00704486179597416,a:"When considering a new installation of RC-WebView, it is important to review the anticipated level of usage. In general, as the number of simultaneous users and hosted Enterprise Websites  increases, the investment in operating system, server hardware, and network infrastructure must also increase.  ..."},"8":{y:0,u:"../Content/RCWV/Installation/RC-WebView3-Installation-Prerequisites-task-server-config.htm",l:-1,t:"Server computer configuration",i:0.00260918317723556,a:"Server computer configuration Before installing RC-WebView, configure the server computer by: Downloading and installing any Microsoft Windows updates. Disabling Internet Explorer (IE) Enhanced Security Configuration. Go to Server Manager \u003e Local Server \u003e Properties and select Off."},"9":{y:0,u:"../Content/RCWV/Installation/RC-WebView3-Installation-Procedure.htm",l:-1,t:"Run the RC-WebView installer",i:0.00260918317723556,a:"Use the RC-WebView InstallShield Wizard to guide you through installing RC-WebView. Before installing RC-WebView, ensure that the installation prerequisites are satisfied.  Use the following steps to install RC-WebView using the wizard: Double-click the RC-WebView install file. The InstallShield ..."},"10":{y:0,u:"../Content/RCWV/Upgrade-Process.htm",l:-1,t:"Upgrade RC-WebView",i:0.00260918317723556,a:"If you are upgrading an existing installation of RC-WebView, review the following instructions to prevent data loss. When upgrading RC-WebView from RC-WebView 3.6 or later, simply run the RC-WebView  installer. When upgrading\nfrom any RC-WebView version previous to version 3.6,  first uninstall ..."},"11":{y:0,u:"../Content/RCWV/Installation/t_implement-secure-connections.htm",l:-1,t:"Implement secure connections",i:0.00260918317723556,a:"After you install RC‑WebView, you can implement secure connections between the RC‑WebView server and browsers accessing the application by completing the following steps: Obtain a trusted certificate. Configure Internet Information Services (IIS) to run RC‑WebView using the HTTPS protocol. For new ..."},"12":{y:0,u:"../Content/RCWV/Installation/t_obtain-trusted-certificate.htm",l:-1,t:"Obtain a trusted TLS certificate",i:0.00260918317723556,a:"A TLS certificate encrypts information transmitted from an application on your server to a web browser. In a production environment, it is recommended that you obtain a TLS certificate from a certificate authority. Consult information publicly available to determine which certificate authority and ..."},"13":{y:0,u:"../Content/RCWV/Installation/t_configure-IIS-for-trusted-certificate.htm",l:-1,t:"Configure IIS to use the trusted certificate",i:0.00260918317723556,a:"Follow these steps to configure IIS to use a trusted certificate with RC-WebView: On your server, start Internet Information Services (IIS) Manager. In the left pane, click your server name to show the contents of the home page in the display area. Double-click Server Certificates to open it in the ..."},"14":{y:0,u:"../Content/RCWV/Basic-Setup-Overview.htm",l:-1,t:"Basic setup",i:0.00260918317723556,a:"To set up a simple Enterprise Website in RC-WebView, first define the Enterprise Website, then connect the Enterprise Website to a building controls system. Finally, configure access to Enterprise Website functionality by assigning  permissions to users. RC-WebView provides a wizard to make this ..."},"15":{y:0,u:"../Content/RCWV/WebsiteSetup/RC-WebView3-Create-a-Website.htm",l:-1,t:"Create a simple Enterprise Website",i:0.00482702248660486,a:"Use the Add Website wizard to guide you through the process of creating a simple Enterprise Website for the first time. Once the Enterprise Website has been created, you can modify it using the Enterprise Website Settings page. To access the wizard, click Enterprise Websites in the System Tree to ..."},"16":{y:0,u:"../Content/RCWV/WebsiteSetup/RC-WebView3-Define-Website-Name-and-URL.htm",l:-1,t:"Add an Enterprise Website",i:0.00363494247801503,a:"Define the name and URL of a new Enterprise Website in Step 1 of the Add A Website wizard: On the Add A Website page, complete the following boxes: Website Name — Enter the name of the Enterprise Website. Base URL   — Enter the URL of the web server that hosts the Enterprise Websites. URL Path — ..."},"17":{y:0,u:"../Content/RCWV/WebsiteSetup/RC-WebView3-Connect-to-RC-Studio-System.htm",l:-1,t:"Add a system",i:0.00363494247801503,a:"To add a controller system to the Enterprise Website, complete Step 2 of the Add A Website wizard. The system must be previously created in RC-Studio. Once the Enterprise Website is configured, you will be able to add  multiple systems to the Enterprise Website. Using information found in the ..."},"18":{y:0,u:"../Content/RCWV/WebsiteSetup/RC-WebView3-Connect-to-RC-Archive.htm",l:-1,t:"Connect to RC-Archive",i:0.00363494247801503,a:"RC-Archive is a data logging application that gathers historical log data from BACnet and Reliable Controls Protocol (RCP) controllers and stores it in a database.   RC-Archive is an ideal solution where long-term data storage and integrity is important for monitoring and auditing facility ..."},"19":{y:0,u:"../Content/RCWV/WebsiteSetup/RC-WebView3-Choose-a-Home-Group-and-System-Group.htm",l:-1,t:"Choose a Home Group",i:0.00422812703108896,a:"Home Group and myControl Home Group settings on the Login Info page determine what displays when a user first logs on to the Enterprise Website.  Define a Home Group for the Enterprise Website  in Step 4 of the Add A Website wizard: On the Login Info page of the wizard, choose a Home Group for the ..."},"20":{y:0,u:"../Content/RCWV/GetStarted/RC-WebView3-Site-Access-Administrator.htm",l:-1,t:" RC-WebView Site URLs",i:0.00260918317723556,a:"Each Enterprise Website is connected to one or more systems at the same time and accessible using distinct URLs that include the port number if the default port (8081) is not used. The URL format varies based on:  The RC-WebView server operating system.  Whether a user with administrator privileges ..."},"21":{y:0,u:"../Content/RCWV/Navigation.htm",l:-1,t:"Navigation",i:0.00260918317723556,a:"Navigation RC-WebView navigation differs according to whether you  log on as an administrator or as an operator. As an administrator, you can access  operator-specific features, but an operator can only access the features assigned to them by the administrator. "},"22":{y:0,u:"../Content/RCWV/GetStarted/RC-WebView3-GUI-Overview-Admin.htm",l:-1,t:"RC-WebView user interface",i:0.00260918317723556,a:"RC-WebView user interface The RC-WebView user interface is divided into six main sections, where content may vary  depending on whether you are logged on as an administrator or as an operator. Sample RC-WebView navigation screen"},"23":{y:0,u:"../Content/RCWV/GetStarted/RC-WebView3-Navigation-Toolbar.htm",l:-1,t:"Menu bar options",i:0.00371810283192021,a:"The menu bar is located at the top right of the banner, and is accessible throughout the application. The contents of the Options menu varies based on the information currently displayed in the main workspace. The contents of the Options menu, their descriptions, and where they are available in the ..."},"24":{y:0,u:"../Content/RCWV/Toolbar-Buttons.htm",l:-1,t:"Workspace toolbar buttons",i:0.00260918317723556,a:"Workspace toolbar buttons The workspace toolbar contains buttons that are related to the page that is currently displayed in the main workspace.  The content of the toolbar is determined by the user\u0027s permissions.  Toolbar buttons and their functionality are listed below."},"25":{y:0,u:"../Content/RCWV/GetStarted/RC-WebView3-Single-Sign-On.htm",l:-1,t:"System and Navigation Trees",i:0.00371810283192021,a:"RC-WebView organizes traditional administration features using a System Tree, and traditional operator features using a Navigation Tree.  You can think of the System Tree as an administrator view, and the Navigation Tree as the operator view.  The tabs at the top of the left Tree pane are used for ..."},"26":{y:0,u:"../Content/RCWV/GetStarted/RC-WebView3-Search-and-Select-in-Builder-Pages.htm",l:-1,t:"BACnet objects, points, and items",i:0.0159237454550813,a:"Use RC-WebView to create and modify items such as Navigation Trees, Navigation Groups, Trend Logs, and  Enterprise Schedules. You can also view, search, and filter lists of BACnet objects or RCP points available on controllers listed in the System Tree. When you identify the items, objects, and ..."},"27":{y:0,u:"../Content/RCWV/Search-select-objects.htm",l:-1,t:"Search for and select BACnet objects and points",i:0.0168839107030179,a:"Use the following steps to search for and select BACnet objects to add to a group, worksheet,  tree, or schedule: Point to the node in the System Tree until the magnifying glass icon appears. If you are using a touchscreen device, the magnifying glass will always appear next to the node.  Click the ..."},"28":{y:0,u:"../Content/RCWV/Administration.htm",l:-1,t:"Administration",i:0.00260918317723556,a:"RC-WebView provides a number of administration pages that power users can access when managing Enterprise Website settings along with their corresponding connection parameters to  Reliable Controls system controllers. Administrators will appreciate the powerful enterprise capabilities of RC-WebView ..."},"29":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-Users.htm",l:-1,t:"Users",i:0.00260918317723556,a:"Every user that accesses RC-WebView must have an account configured in RC-WebView. Each user account is created by an RC-WebView administrator, and defines what the user will be able to access when they log on. User logon credentials can be stored on the RC-WebView server as a local account, or in ..."},"30":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-User-List.htm",l:-1,t:"User List page",i:0.00260918317723556,a:"View and manage users in the User List page.  Access the User List page in one of two ways: Click Users in the System Tree.  Click User List while viewing a user\u0027s Permissions or Login Info page.  Only users that are specifically restricted to the system will have their names appear in the User ..."},"31":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-User-Permissions.htm",l:-1,t:"User Permissions page",i:0.0107898907270666,a:"Assign RC-WebView access permissions to users using the User Permissions page.  Access the User Permissions page in one of two ways:  Add a new user through the Add User wizard and set the user permissions in the wizard.  Click a user\u0027s name in the System Tree, then click the Permissions button.   ..."},"32":{y:0,u:"../Content/RCWV/UserSetup/Login-Info.htm",l:-1,t:"Login Info page",i:0.00320236773030949,a:"Use the Login Info page to specify a user\u0027s: Log in credentials. Status (Enabled or Disabled). Assigned Navigation Tree. Assigned After Hours Template. Home Group when logging on using a browser or the myControl app. Access to controller systems. Access to Schedules. Roles To display a user\u0027s Login ..."},"33":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-Add-User-Wizard.htm",l:-1,t:"Add users",i:0.00705622480476736,a:"Use the Add User wizard to add users to RC-WebView.  To access the wizard: Expand an Enterprise Website in the System Tree and click Users. Click  the Add User button on the Users page to start the Add User wizard. Use the following steps to add a user to an Enterprise Website using the Add User ..."},"34":{y:0,u:"../Content/RCWV/Add-User.htm",l:-1,t:"Add user credentials",i:0.00460848169466159,a:"To add a user to an Enterprise Website, complete Step 1 of the Add User wizard:  On the Add User page, complete the following boxes: Select Local User to add a new local user, or select Active Directory User or Active Directory Group to add a user or a group from Active Directory. You need to enable ..."},"35":{y:0,u:"../Content/RCWV/Change-Permissions.htm",l:-1,t:"Define user permissions",i:0.00460848169466159,a:"To define the level of access a user has to a system, complete Step 2 of the Add User wizard: On the Permissions page, select permissions in the following areas.  Administer Modify Alarms Access Enterprise Schedules - Tenant Enterprise Schedules - Facility Manager  Click Upload beside the Custom ..."},"36":{y:0,u:"../Content/RCWV/Define-Log-On-Info.htm",l:-1,t:"Configure user login information",i:0.00460848169466159,a:"To configure default login settings for a user, complete Step 3 of the Add User wizard: On the Login Info page, complete the following boxes: Navigation Tree  — The default Navigation Tree that displays when the user logs on. After Hours  Template — Determines the report format used to display   ..."},"37":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-User-Setup-Batch-Updates.htm",l:-1,t:"Batch updating multiple users",i:0.00260918317723556,a:"Apply a single change to multiple user accounts quickly using a batch update operation. For example, you can  assign a Navigation Tree, set a Home Group, or adjust Restrict to Systems properties for multiple users by selecting them on the User List page and applying a batch update. Only one  ..."},"38":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-User-Setup-Authorization.htm",l:-1,t:"Active Directory user authorization",i:0.00260918317723556,a:"RC-WebView supports Microsoft Active Directory for enhanced security, allowing user authentication to be managed through the existing infrastructure implemented in a domain or organization. Consult with the administrator of the existing domain in order to obtain the necessary parameters for ..."},"39":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-User-Roles.htm",l:-1,t:"User roles",i:0.0105140091419233,a:" Create user roles in RC-WebView and apply logon information and permissions to multiple users at once. User roles allow an administrator to manage multiple users without having to apply the same settings to each individual user. All the settings that can be applied to individual users can be ..."},"40":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-Role-List.htm",l:-1,t:"Role List page",i:0.00285560976716548,a:"View and manage user roles in the Role List page. Create user roles to apply logon information and permissions to multiple users at once. Access the Role List page in one of two ways: Click Users in the System Tree to open the User List, then click Role List.  Click Role List from the Login Info or ..."},"41":{y:0,u:"../Content/RCWV/UserSetup/Role-Login-Info.htm",l:-1,t:"Role Login Info page",i:0.00260918317723556,a:"Use the Role Login Info page to specify a user role\u0027s logon information. If a role is applied to a user, this logon information will be inherited by that user.  To display the Role Login Info page, click Users in the System Tree, click Role List on the Login Info page, and then click on a role name. ..."},"42":{y:0,u:"../Content/RCWV/UserSetup/Role-Permissions-page.htm",l:-1,t:"Role Permissions page",i:0.00260918317723556,a:"Assign RC-WebView access permissions to roles using the Role Permissions page.  Access the Role Permissions page in one of two ways:  Add a new role through the Add Role wizard and set the role permissions in the wizard.  Click Users in the System Tree, click the Role List button, click a role, and ..."},"43":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-Rules-for-User-Roles.htm",l:-1,t:"Rules for user roles",i:0.00260918317723556,a:"There are several important rules to keep in mind when working with user roles.  Applying a role to a user If you apply a role to a user, then the role completely overwrites that user\u0027s permissions and settings and replaces them with the role\u0027s permissions and settings. If a user selects or clears a ..."},"44":{y:0,u:"../Content/RCWV/UserSetup/RC-WebView3-User-Role-Wizard.htm",l:-1,t:"Add user roles",i:0.0044345006799591,a:"Use the Add Role wizard to add user roles to RC-WebView.  To access the wizard, in the System Tree, expand an Enterprise Website and click Users. On the User List page, click Role List. On the Role List page, click Add Role to start the Add Role wizard. Use the following steps to add a user role ..."},"45":{y:0,u:"../Content/RCWV/Set-Role-Name-Permissions.htm",l:-1,t:"Set the role name and permissions",i:0.00449387700784357,a:"To define the level of access a user role has to a system, complete Step 1 of the Add Role wizard, Set Role Name and Permissions: Select permissions for the role in the following areas.  Administer Modify Alarms Access Enterprise Schedules- Tenant Enterprise Schedules- Facility Manager  Click Next ..."},"46":{y:0,u:"../Content/RCWV/Define-Login-Information.htm",l:-1,t:"Define role login information",i:0.00449387700784357,a:"To set the default login settings for a user role, complete Step 2 of the Add Role wizard, Login Info: On the Login Info page, complete the following boxes: Enabled/Disabled — Select Enabled to enable a role. Navigation Tree — The default Navigation Tree that displays when the user logs on. After ..."},"47":{y:0,u:"../Content/RCWV/WebsiteSetup/RC-WebView3-Enterprise-Website-Settings.htm",l:-1,t:"Enterprise Website Settings page",i:0.0136026218412675,a:"Modify an Enterprise Website\u0027s properties and security options using the Enterprise Website Settings page. Go to the Properties page and the Security page by clicking the respective buttons in the toolbar.  You can display the Enterprise Website Settings page in two ways: In the System Tree, expand ..."},"48":{y:0,u:"../Content/RCWV/WebsiteSetup/r_enterprise-website-properties.htm",l:-1,t:"Enterprise Website Properties",i:0.00839046205467719,a:"You can modify the following options when you click Properties on the Enterprise Website Settings page: Default Options The following settings configure the color theme, name, and URL of the Enterprise Website.  Default Theme The color scheme to be applied to the website. Name The name to be ..."},"49":{y:0,u:"../Content/RCWV/WebsiteSetup/r_enterprise-website-security.htm",l:-1,t:"Enterprise Website Security",i:0.00839046205467719,a:"You can modify the following options when you click Security on the Enterprise Website Settings page. RC‑WebView supports Title 21 CFR Part 11 with these options. See  Title 21 CFR Part 11 compliance  for more information. Change Approval Enforce Change Approval Enforces the use of an approval ..."},"50":{y:0,u:"../Content/RCWV/Systems/RC-WebView3-Systems-Settings.htm",l:-1,t:"System Settings page",i:0.00260918317723556,a:"Modify the connection to a  system using the Settings page.  To access the Settings page, click the name of the system in the System Tree and click Settings on the flyout menu. The following buttons display in the toolbar: The Settings page contains the following options: System Properties ..."},"51":{y:0,u:"../Content/RCWV/Systems/Backup-and-Restore-page.htm",l:-1,t:"Backup \u0026 Restore page",i:0.00390547819215217,a:"Backup and restore controller Panel Files using the Backup \u0026 Restore page.  To access the Backup \u0026 Restore page: Click a system in the System Tree and then click Backup \u0026 Restore on the flyout menu. Click a controller in the System Tree, then click Backup and Restore  in the flyout menu. The ..."},"52":{y:0,u:"../Content/RCWV/PointsReport/c_Point-reports.htm",l:-1,t:"Point Reports",i:0.00260918317723556,a:"Point Reports A Point Report contains a customized, filtered list of system objects and it allows you to make batch changes to all of the objects in the report at one time. "},"53":{y:0,u:"../Content/RCWV/PointsReport/r_Point-reports-worksheet.htm",l:-1,t:"Point Reports worksheet",i:0.00260918317723556,a:"Use the Point Reports worksheet to add, modify, or delete individual Point Reports, or to open a Point Report listed in the worksheet. To access a Point Reports worksheet, click a system node in the System Tree to open the menu, and then click Point Reports. The Point Reports worksheet includes the ..."},"54":{y:0,u:"../Content/RCWV/PointsReport/Point-Report-Worksheet.htm",l:-1,t:"Individual Point Report worksheet",i:0.00260918317723556,a:"Use the Point Report worksheet to view and manage a customized, filtered list of system objects. A Point Report allows you to make batch changes to multiple objects at one time. To open an individual Point Report worksheet: Click a Point Report reference in a System Group or Workstation group. Click ..."},"55":{y:0,u:"../Content/RCWV/PointsReport/t_modify-point-values-in-point-report.htm",l:-1,t:"Modify point values in a Point Report worksheet",i:0.00260918317723556,a:"Use the following procedure to modify points in the Point Report worksheet. Select the check boxes of objects within the Point Report worksheet. Click Edit Values  to open the Edit Selected Points dialog box. Select the Values check box and then type a new value. All selected objects will be set to ..."},"56":{y:0,u:"../Content/RCWV/Audit-Trail-Worksheet.htm",l:-1,t:"Audit Trail worksheet",i:0.00366266259598343,a:"The Audit Trail worksheet  lists all  the changes made by all users on the RC-WebView server. Depending on where you are in the interface, click either Options \u003e Enterprise Website name \u003e Audit Trail or Options \u003e Audit Trail to view the Audit Trail worksheet. When Enforce Change Approval is selected ..."},"57":{y:0,u:"../Content/RCWV/SystemDateTime/RC-WebView3-Modify-System-Date-Time.htm",l:-1,t:"Set system date and time dialog box",i:0.00260918317723556,a:"Changing the system date and  time using the Set system date and time dialog box results in a broadcast to the entire Reliable Controls system, including the device configured as the System Time Master. Only users with Set System Date and Time permission are able to modify the system date and time.  ..."},"58":{y:0,u:"../Content/RCWV/Systems/RC-WebView3-Add-Systems.htm",l:-1,t:"Add systems",i:0.00260918317723556,a:"Use the Add System  wizard to guide you through the process of adding a system to an Enterprise Website. After a system has been defined for an Enterprise Website, you can modify the system\u0027s connection parameters using the system\u0027s Settings page. To access the wizard, expand an Enterprise Website ..."},"59":{y:0,u:"../Content/RCWV/Enter-System-Parameters.htm",l:-1,t:"Enter system connection parameters",i:0.00371810283192021,a:"To add a system to the Enterprise Website, complete Step 1 of the Add System wizard.  The system must be previously created in RC-Studio. Once the Enterprise Website is configured, you will be able to add  multiple systems to the Enterprise Website. Using information found in the Systems List of ..."},"60":{y:0,u:"../Content/RCWV/Enter-RC-Archive-Parameters.htm",l:-1,t:"Enter RC-Archive connection parameters",i:0.00371810283192021,a:"RC-Archive is a data logging application that gathers historical log data from BACnet and Reliable Controls Protocol (RCP) controllers and stores it in a database.   RC-Archive is an ideal solution where long-term data storage and integrity is important for monitoring and auditing facility ..."},"61":{y:0,u:"../Content/RCWV/File-Sync-Server-RCWV.htm",l:-1,t:"RC‑WebView File Server",i:0.00260918317723556,a:"When RC‑WebView and RC‑Studio are connected to the same system, an RC-WebView File Server node appears in RC-Studio\u0027s System Tree. You can use  the  RC-WebView File Server node to enable automatic file synchronization using RC‑WebView as a BACnet File Services (BFS) server.  When you enable file ..."},"62":{y:0,u:"../Content/RCWV/ContainerTopics/c_custom-navigation.htm",l:-1,t:"Custom Navigation",i:0.00260918317723556,a:"RC-WebView has a number of powerful design tools to selectively provide users with customized access to Reliable Controls system functionality.   Navigation Trees provide a hierarchical menu of BACnet objects and functionality. You can design Navigation Trees to organize Reliable Controls system ..."},"63":{y:0,u:"../Content/RCWV/About-Navigation-Trees.htm",l:-1,t:"Navigation Trees",i:0.0082110054110275,a:"A Navigation Tree is a custom navigation tool  that organizes your data into different nodes within  the Navigation Tree pane on the left side of the RC‑WebView pages.  Sample Navigation Tree You can create a Navigation Tree and associate it with individual users, multiple users, or with user roles ..."},"64":{y:0,u:"../Content/RCWV/NavigationTrees/r_Nav-Trees-list-page.htm",l:-1,t:" Navigation Tree List page",i:0.00260918317723556,a:" Navigation Tree List page Use the Navigation Trees List page to add, edit, copy, rename, or delete Navigation Trees. Click the Navigation Trees node in the System Tree to access the Navigation Trees List page. Use the following options to configure a Navigation Tree: The following options apply to ..."},"65":{y:0,u:"../Content/RCWV/NavigationTrees/r_Nav-Tree-Settings-page.htm",l:-1,t:"Navigation Tree Settings page",i:0.00260918317723556,a:"Use a Navigation Tree\u0027s Settings page to add, remove, or rename items in a Navigation Tree and to customize icons associated with the items in a Navigation tree. The following actions are available from the Navigation Tree Settings page: Add items to a Navigation Tree.  Remove items from a ..."},"66":{y:0,u:"../Content/RCWV/NavigationTrees/t_Nav-Tree-add.htm",l:-1,t:"Create a Navigation Tree",i:0.00334846294702533,a:"You can create a new Navigation Tree and modify existing Navigation Trees in the Navigation Trees List screen. Use the following steps to create a Navigation Tree in RC-WebView: On the System Tree click the Navigation Trees node to display the Navigation Trees List page. Type the name of the ..."},"67":{y:0,u:"../Content/RCWV/NavigationTrees/t_Nav-Tree-modify.htm",l:-1,t:"Modify a Navigation Tree",i:0.00260918317723556,a:"To modify a Navigation Tree, select the tree in the Navigation Trees list to display the Edit, Copy, Rename, and Delete icons. Click Edit to go to the  Navigation Tree Settings page for the selected Navigation Tree. Click Copy to create a duplicate of the selected Navigation Tree and save it with a ..."},"68":{y:0,u:"../Content/RCWV/NavigationTrees/t_Nav-Tree-copy.htm",l:-1,t:"Copy a Navigation Tree",i:0.00260918317723556,a:"If you need to create several Navigation Trees, you can copy an existing tree and modify it to meet your requirements. This is particularly useful when the Navigation Trees that you want to create contain many entries. Use the following steps to copy a Navigation Tree: On the System Tree click the ..."},"69":{y:0,u:"../Content/RCWV/NavigationTrees/t_Nav-Tree-add-items.htm",l:-1,t:"Add items to a Navigation Tree",i:0.00822772092123268,a:"Add items and BACnet objects to a Navigation Tree from the Navigation Tree Settings page. To access the Navigation Tree Settings page, click a Navigation Tree node in the System Tree.   You can add items to a Navigation Tree as follows:  To add objects, select Object in the Add drop-down menu, or ..."},});