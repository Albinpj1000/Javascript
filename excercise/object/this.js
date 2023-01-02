var user = {
    firstName:"albin",
    lastName:"xavier",
    role:"admin",
    LoginCount:30,
    FacebookSignedIn:true,
    courseList:[],
    buyCourse:function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount:function(){
        return `Total course number = ${this.courseList.length}`
    },
    getinfo:function(){
        
         console.log( this.firstName,this.LoginCount,this.getCourseCount());
    }
}

user.buyCourse("React js");
console.log(user.courseList);
console.log(user.getCourseCount());
user.getinfo();