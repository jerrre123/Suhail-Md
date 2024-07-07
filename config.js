const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "CREATED BY MAKO🎉" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260971816956";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_10_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDYyLFxuICAgICAgICA2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICA5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzLFxuICAgICAgICA5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx2aWhUS1FjOElmM1krdXFpR1NMUUExQXYzVWM4aHdycitpM1dHaTRpQ2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpfMHhSU0d4UXBlaHEySmMyVjVCMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU1YWRkMzQtYTY5MS00NzhkLWE2NTAtM2RlYzQ2NmUyOTFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDE2MCxcbiAgICAgIDI0OCxcbiAgICAgIDUzLFxuICAgICAgOTYsXG4gICAgICAyMjUsXG4gICAgICAxMzMsXG4gICAgICAyOSxcbiAgICAgIDkxLFxuICAgICAgMTAzLFxuICAgICAgODYsXG4gICAgICA3NyxcbiAgICAgIDk5LFxuICAgICAgMTMwLFxuICAgICAgODcsXG4gICAgICAyNDgsXG4gICAgICAxOTUsXG4gICAgICA5NSxcbiAgICAgIDIyMixcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAxNTcsXG4gICAgICAxMyxcbiAgICAgIDcyLFxuICAgICAgMTU5LFxuICAgICAgMTI5LFxuICAgICAgMTcwLFxuICAgICAgMTYxLFxuICAgICAgMjExLFxuICAgICAgMTk2LFxuICAgICAgMjA4LFxuICAgICAgMzYsXG4gICAgICAyOCxcbiAgICAgIDE5LFxuICAgICAgMTE5LFxuICAgICAgODUsXG4gICAgICAxODksXG4gICAgICAxNzksXG4gICAgICA4OSxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5RSkJERktSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjA5NzE4MTY5NTY6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYWtvXCIsXG4gICAgXCJsaWRcIjogXCIyMTM1NjMyNzI2MDk5NzI6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTENwbHNrRUVQcVhxN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5d3RnQXloRXY3bEVkQUFKbDFBTmRPNks0M3lTTzN6UDNEZ0pjS1NPaW13PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1FbVE0aFZJdk1pSGptSUZjVjcvVFQ2cHVremtocVdRVS9ub2ZUbFU0THYyekNqWUVxTUdRdU4wbkVIQkpoZjBlcDliQVVwZll2Z0NCMzF4ZER4YkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlF4ZTY1SDd4MTNBdHJlRDl0MzVqS1U1YkdaUzNqeld6RW5JT0RML0lYMnpFRjV6R2F3U0JEU1pVRS8yTE9lYkhsSEZ3MEIxSUpJOCt1YjRrK3JQaGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDk3MTgxNjk1Njo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNzIyMjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCYWVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJhZS5qc29uIjogIntcImtleURhdGFcIjpcImM4OVJqa3l3RXB0Y3dNSi9NWmxxMFJVQndJc2RrdjdHaXpZWUYrQlhReW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyNzE5OTY2MyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KING👑MAKO",
  ownername:process.env.OWNER_NAME|| "MAKO💀",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "💀MAKO💀"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
