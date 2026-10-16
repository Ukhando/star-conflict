---
sidebar_position: 1
---

# Hosting Guide

Download the game via Steam.  
Launch `launch_mongodb.bat` to start the database.  
Launch `launch_server.bat` to start the game server.


## Example: Install to C:/starconflict via steamcmd

```bash
winget install steamcmd
steamcmd +force_install_dir c:/starconflict
> login {your steam username}
> {enter your creadentials}
> app_update 212070
> quit
```

Star Conflict is now installed to `C:/starconflict`