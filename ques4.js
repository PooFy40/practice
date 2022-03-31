let student=[
    {
        rollno:1,
        name:'Anant',
        course:'fsd'

    },
    {
        rollno:2,
        name:'Kanishka',
        course:'Data science'

    },
    {
        rollno:1,
        name:'Atharva',
        course:'AI'

    }
]

function getStudent(){
    setTimeout(() => {
        for(let i=0;i<student.length;i++)
        {
            console.log(student[i].name)
        }
    }, 1000);
    
    
}

function createStudent(detail,callback){

    return new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                student.push(detail)
                console.log('details added')
                let flag=true
                if(flag){
                    resolve()
                    callback()
                }else
                reject('problem')
                
            }, 5000);

            

        }
    )

}

let detail={
    rollno:4,
    name:'Dikshant',
    course:'ML'
}
// getStudent()

createStudent(detail,getStudent)
