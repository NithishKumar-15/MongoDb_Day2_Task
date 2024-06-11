//1.)Find all the topics and tasks which are thought in the month of October
const taskOct=db.Tasks.find({date:{$regex:"2023-09"}}).toArray();

const topicsOct=db.Topics.find({date:{$regex:"2023-09"}}).toArray();

const title=topicsOct.map((val)=>{ return val.title;});

const task=taskOct.map((val)=>{return val.Task;});

//or simple way I have complicated it
db.Tasks.find({date:{$regex:"2023-09"}},{Task:1,_id:0})
db.Topics.find({date:{$regex:"2023-09"}},{title:1,_id:0})

//2.)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.CompanyDrive.find({date:{$regex:"2020-09"}})

//3.)Find all the company drives and students who are appeared for the placement.
db.CompanyDrive.find({},{company:1,students:1})

//4.)Find the number of problems solved by the user in codekata
db.CodeKata.find({},{name:1,codekata:1,_id:0})

//5.)Find all the mentors with who has the mentee's count more than 15
db.Mentor.find({menteeCount:{$gt:15}},{name:1,menteeCount:1,_id:0})

//6.)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.Attendance.find({},{users:1,_id:0})