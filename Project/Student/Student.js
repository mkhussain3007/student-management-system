// let studentIdXML="";
// let studentNameXML="";
// let fatherNameXML="";
// let motherNameXML="";
// let addressXML="";
// let parentNoXML="";
// let studentNoXML="";
// let emailXML="";
// let branchNameXML="";
// let branchIDXML="";

// const studentImage = document.getElementById('studentImage')
// const studentName=document.getElementById('studentName')


// fetch('./XML-DATA/StudentData.xml')
//     .then(response => response.text())
//     .then(xmlString => {
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
//         const student = xmlDoc.querySelector('student');

//         studentIdXML=student.querySelector('id').textContent
//         studentNameXML=student.querySelector('name').textContent
//         fatherNameXML=student.querySelector('fatherName').textContent
//         motherNameXML=student.querySelector('motherName').textContent
//         addressXML=student.querySelector('address').textContent
//         parentNoXML=student.querySelector('parentNo').textContent
//         studentNoXML=student.querySelector('studentNo').textContent
//         emailXML=student.querySelector('email').textContent
//         branchNameXML=student.querySelector('branchName').textContent
//         branchIDXML=student.querySelector('branchId').textContent
//         studentImage.src = `https://automation.vnrvjiet.ac.in/eduprime3/Docs/VNRVJIET/User/${studentIdXML}.jpg?v=504911430000000000;`;
//         studentName.innerHTML=studentNameXML

//     })
    
// const printStudentData = () => {
//     fetch('./XML-DATA/StudentData.xml')
//     .then(response => response.text())
//     .then(xmlString => {
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
//         const student = xmlDoc.querySelector('student');

//             const table = document.querySelector('.student');
//             const tableRow = document.createElement('tr');
//             tableRow.innerHTML = `
//                         <td>${student.querySelector('id').textContent}</td>
//                         <td>${student.querySelector('name').textContent}</td>
//                         <td>${student.querySelector('fatherName').textContent}</td>
//                         <td>${student.querySelector('motherName').textContent}</td>
//                         <td>${student.querySelector('address').textContent}</td>
//                         <td>${student.querySelector('parentNo').textContent}</td>
//                         <td>${student.querySelector('studentNo').textContent}</td>
//                         <td>${student.querySelector('email').textContent}</td>                        
//                         <td>${student.querySelector('branchName').textContent}</td>
//                         <td>${student.querySelector('branchId').textContent}</td>
//                     `;
//             table.appendChild(tableRow);
//             })
// }   

// const printAttendance=()=>{
//     fetch('./XML-DATA/StudentCoursesData.xml')
//             .then((res)=>res.text())
//             .then((xmlString)=>{
//                 const parser = new DOMParser();
//                 const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
//                 const semesters = xmlDoc.querySelectorAll('semester');
//                 const sem1=document.querySelector('.a11')
//                 const sem2=document.querySelector('.a12')
//                 const sem3=document.querySelector('.a21')
//                 const sem4=document.querySelector('.a22')
//                 const sem5=document.querySelector('.a31')
//                 let sem1Attended=0,sem1Total=0;
//                 let sem2Attended=0,sem2Total=0;
//                 let sem3Attended=0,sem3Total=0;
//                 let sem4Attended=0,sem4Total=0;
//                 let sem5Attended=0,sem5Total=0;
//                 for(const semester of semesters){
//                     const tableRow=document.createElement('tr')
//                     tableRow.innerHTML=`
//                         <th scope="row">${semester.querySelector('courseId').textContent}</th>
//                         <td>${semester.querySelector('courseName').textContent}</td>
//                         <td>${semester.querySelector('classesAttended').textContent}</td>
//                         <td>${semester.querySelector('totalClasses').textContent}</td>
//                         <td>${(semester.querySelector('classesAttended').textContent/semester.querySelector('totalClasses').textContent)*100}%</td>    
//                     `;
//                     if(semester.getAttribute('id')=="1"){
//                         sem1.appendChild(tableRow)
//                         sem1Attended+=parseInt(semester.querySelector('classesAttended').textContent);
//                         sem1Total+=parseInt(semester.querySelector('totalClasses').textContent);
//                     }else if(semester.getAttribute('id')=="2"){
//                         sem2.appendChild(tableRow)
//                         sem2Attended+=parseInt(semester.querySelector('classesAttended').textContent);
//                         sem2Total+=parseInt(semester.querySelector('totalClasses').textContent);
//                     }else if(semester.getAttribute('id')=="3"){
//                         sem3.appendChild(tableRow)
//                         sem3Attended+=parseInt(semester.querySelector('classesAttended').textContent);
//                         sem3Total+=parseInt(semester.querySelector('totalClasses').textContent);
//                     }else if(semester.getAttribute('id')=="4"){
//                         sem4.appendChild(tableRow)
//                         sem4Attended+=parseInt(semester.querySelector('classesAttended').textContent);
//                         sem4Total+=parseInt(semester.querySelector('totalClasses').textContent);
//                     }else if(semester.getAttribute('id')=="5"){
//                         sem5.appendChild(tableRow)
//                         sem5Attended+=parseInt(semester.querySelector('classesAttended').textContent);
//                         sem5Total+=parseInt(semester.querySelector('totalClasses').textContent);
//                     }
//                 }
//                 const tableRow1=document.createElement('tr')
//                 tableRow1.innerHTML=`
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td class="text-end fw-bold">Total Percentage</td>
//                         <td >${(sem1Attended/sem1Total)*100}%</td>
//                     `
//                     sem1.appendChild(tableRow1)
//                     const tableRow2=document.createElement('tr')
//                 tableRow2.innerHTML=`
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td class="text-end fw-bold">Total Percentage</td>
//                     <td>${(sem2Attended/sem2Total)*100}%</td>
//                 `
//                 sem2.appendChild(tableRow2)
//                 const tableRow3=document.createElement('tr')

//                 tableRow3.innerHTML=`
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td class="text-end fw-bold">Total Percentage</td>
//                     <td>${(sem3Attended/sem3Total)*100}%</td>
//                 `
//                 sem3.appendChild(tableRow3)
//                 const tableRow4=document.createElement('tr')

//                 tableRow4.innerHTML=`
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td class="text-end fw-bold">Total Percentage</td>
//                     <td>${(sem4Attended/sem4Total)*100}%</td>
//                 `
//                 sem4.appendChild(tableRow4)
//                 const tableRow5=document.createElement('tr')

//                 tableRow5.innerHTML=`
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td class="text-end fw-bold">Total Percentage</td>
//                     <td>${(sem5Attended/sem5Total)*100}%</td>
//                 `
//                 sem5.appendChild(tableRow5)
//             })
// }

// const printCourses=()=>{
//     fetch('./XML-DATA/StudentCoursesData.xml')
//     .then((res)=>res.text())
//     .then((xmlString)=>{
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
//         const semesters = xmlDoc.querySelectorAll('semester');
//         const sem1=document.querySelector('.c11')
//         const sem2=document.querySelector('.c12')
//         const sem3=document.querySelector('.c21')
//         const sem4=document.querySelector('.c22')
//         const sem5=document.querySelector('.c31')
//         for(let semester of semesters ){
//             const newCourse=document.createElement('div')
//             newCourse.classList.add("col-sm-12","col-md-6","col-lg-4","my-2");
//             newCourse.innerHTML=`
//             <div class="card border rounded shadow">
//                 <div class="card-header">
//                     <h4>${semester.querySelector('courseName').textContent}</h4>
//                 </div>
//                 <div class="card-body mx-auto">
//                     <h6>Course Id : ${semester.querySelector('courseId').textContent}</h6>
//                     <h6>Enrollment Id : ${semester.querySelector('enrollmentId').textContent}</h6>
//                     <h6>Credits : ${semester.querySelector('credits').textContent}</h6>
//                 </div>
//             </div>
//             `;
//             if(semester.getAttribute('id')=="1"){
//                 sem1.appendChild(newCourse)
//             }else if(semester.getAttribute('id')=="2"){
//                 sem2.appendChild(newCourse)
//             }
//             else if(semester.getAttribute('id')=="3"){
//                 sem3.appendChild(newCourse)
//             }
//             else if(semester.getAttribute('id')=="4"){
//                 sem4.appendChild(newCourse)
//             }
//             else if(semester.getAttribute('id')=="5"){
//                 sem5.appendChild(newCourse)
//             }
//         }
//     })
// }

// const printResults=()=>{
//     fetch('./XML-DATA/StudentCoursesData.xml')
//             .then((res)=>res.text())
//             .then((xmlString)=>{
//                 const parser = new DOMParser();
//                 const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
//                 const semesters = xmlDoc.querySelectorAll('semester');
//                 const sem1=document.querySelector('.r11')
//                 const sem2=document.querySelector('.r12')
//                 const sem3=document.querySelector('.r21')
//                 const sem4=document.querySelector('.r22')
//                 const sem5=document.querySelector('.r31')
//                 for(const semester of semesters){
//                     const tableRow=document.createElement('tr')
//                     tableRow.innerHTML=`
//                         <td>${semester.querySelector('courseId').textContent}</td>
//                         <td>${semester.querySelector('courseName').textContent}</td>
//                         <td>${semester.querySelector('enrollmentDate').textContent}</td>
//                         <td>${semester.querySelector('grade').textContent}</td>
//                     `;
//                     if(semester.getAttribute('id')=="1"){
//                         sem1.appendChild(tableRow)
//                     }else if(semester.getAttribute('id')=="2"){
//                         sem2.appendChild(tableRow)
//                     }else if(semester.getAttribute('id')=="3"){
//                         sem3.appendChild(tableRow)
//                     }else if(semester.getAttribute('id')=="4"){
//                         sem4.appendChild(tableRow)
//                     }else if(semester.getAttribute('id')=="5"){
//                         sem5.appendChild(tableRow)
//                     }
//                 }
//             })
// }
// const loadContent = (url) => {
//     fetch(url)
//         .then((res) => res.text())
//         .then((data) => {
//             document.getElementById('content').innerHTML = data;
//             if (window.width < 576) {
//                 const offcanvasSidebar = document.getElementById('offcanvasSidebar');
//                 const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasSidebar);
//                 bsOffcanvas.hide();
//             }
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

// document.addEventListener('DOMContentLoaded',()=>{
//     document.getElementById('profile-link').addEventListener('click', (e) => {
//         e.preventDefault()
//         loadContent('Profile.html')
//         printStudentData()
//     })
//     document.getElementById('attendance-link').addEventListener('click', (e) => {
//         e.preventDefault()
//         loadContent('Attendance.html')
//         printAttendance()
//     })
//     document.getElementById('courses-link').addEventListener('click', (e) => {
//         e.preventDefault()
//         loadContent('Courses.html')
//         printCourses()
//     })
//     document.getElementById('results-link').addEventListener('click', (e) => {
//         e.preventDefault()
//         loadContent('Results.html')
//         printResults()
//     })
//     document.getElementById('profile-link-mobile').addEventListener('click', (e) => {
//         e.preventDefault()
//         loadContent('Profile.html')
//         printStudentData()
//     })
//     document.getElementById('attendance-link-mobile').addEventListener('click', (e) => {
//         e.preventDefault()
//         loadContent('Attendance.html')
//         printAttendance()
//     })
//     document.getElementById('courses-link-mobile').addEventListener('click', (e) => {
//         e.preventDefault()
//         loadContent('Courses.html')
//         printCourses()
//     })
//     document.getElementById('results-link-mobile').addEventListener('click', (e) => {
//         e.preventDefault()
//         loadContent('Results.html')
//         printResults()
//     })
// })

let studentIdXML="";
let studentNameXML="";
let fatherNameXML="";
let motherNameXML="";
let addressXML="";
let parentNoXML="";
let studentNoXML="";
let emailXML="";
let branchNameXML="";
let branchIDXML="";

const studentImage = document.getElementById('studentImage')
const studentName=document.getElementById('studentName')


fetch('./XML-DATA/StudentData.xml')
    .then(response => response.text())
    .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const student = xmlDoc.querySelector('student');

        studentIdXML=student.querySelector('id').textContent
        studentNameXML=student.querySelector('name').textContent
        fatherNameXML=student.querySelector('fatherName').textContent
        motherNameXML=student.querySelector('motherName').textContent
        addressXML=student.querySelector('address').textContent
        parentNoXML=student.querySelector('parentNo').textContent
        studentNoXML=student.querySelector('studentNo').textContent
        emailXML=student.querySelector('email').textContent
        branchNameXML=student.querySelector('branchName').textContent
        branchIDXML=student.querySelector('branchId').textContent
        studentImage.src = `https://automation.vnrvjiet.ac.in/eduprime3/Docs/VNRVJIET/User/${studentIdXML}.jpg?v=504911430000000000;`;
        studentName.innerHTML=studentNameXML

    })
    fetch('./XML-DATA/StudentCoursesData.xml')
    .then((res)=>res.text())
    .then((xmlString)=>{
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const semesters = xmlDoc.querySelectorAll(`semester[id="6"]`);
        const sem6=document.querySelector('.c32')
        for(let semester of semesters ){
            const newCourse=document.createElement('tr')
            newCourse.innerHTML=`
                <th scope="row">${semester.querySelector('courseId').textContent}</th>
                <td>${semester.querySelector('courseName').textContent}</td>
            `;
            if(semester.getAttribute('id')=="6"){
                 sem6.appendChild(newCourse)
             }
        }
        const sem6Attendance=document.querySelector('.a32')
        let sem6Attended=0,sem6Total=0;
        for(const semester of semesters){
            const tableRow=document.createElement('tr')
            tableRow.innerHTML=`
                <th scope="row">${semester.querySelector('courseId').textContent}</th>
                <td>${semester.querySelector('courseName').textContent}</td>
                <td>${semester.querySelector('classesAttended').textContent}</td>
                <td>${semester.querySelector('totalClasses').textContent}</td>
                <td>${((semester.querySelector('classesAttended').textContent/semester.querySelector('totalClasses').textContent)*100).toFixed(2)}%</td>    
            `;
            if(semester.getAttribute('id')=="6"){
                sem6Attendance.appendChild(tableRow)
                sem6Attended+=parseInt(semester.querySelector('classesAttended').textContent);
                sem6Total+=parseInt(semester.querySelector('totalClasses').textContent);
            }
        }
        const tableRow6=document.createElement('tr')
        tableRow6.innerHTML=`
            <td></td>
            <td class='text-end fw-bold fs-5'>Total : </td>
            <td>${sem6Attended}</td>
            <td>${sem6Total}</td>
            <td class='fw-bold'>${((sem6Attended/sem6Total)*100).toFixed(2)}% ( ${sem6Attended}/${sem6Total} )</td>
        `
        sem6Attendance.appendChild(tableRow6)
        const circularProgress=document.querySelector('.circular-progress')
        const progressValue=document.querySelector('.progress-value')
        progressValue.textContent=`${((sem6Attended/sem6Total)*100).toFixed(2)}%`
        const progress=((sem6Attended/sem6Total)*100).toFixed(2)
        const classesRemaining=24
        if(progress<65)
            circularProgress.style.background=`conic-gradient(red ${progress*3.6}deg,#ededed 0deg)`;
        else if(progress>=65 && progress<75)
            circularProgress.style.background=`conic-gradient(yellow ${progress*3.6}deg,#ededed 0deg)`;
        else
            circularProgress.style.background=`conic-gradient(#18cc21 ${progress*3.6}deg,#ededed 0deg)`;
        
        const currentProgress=document.querySelector('.currentProgress')
        currentProgress.textContent=`${(((sem6Attended)/(sem6Total+classesRemaining))*100).toFixed(2)}% ( ${sem6Attended}/${sem6Total+classesRemaining} )`
        const completeProgress=document.querySelector('.completeProgress')
        completeProgress.textContent=`${(((sem6Attended+classesRemaining)/(sem6Total+classesRemaining))*100).toFixed(2)}% ( ${sem6Attended+classesRemaining}/${sem6Total+classesRemaining} )`
        const halfProgress=document.querySelector('.halfProgress')
        halfProgress.textContent=`${(((sem6Attended+(classesRemaining/2))/(sem6Total+classesRemaining))*100).toFixed(2)}% ( ${Math.round(sem6Attended+(classesRemaining/2))}/${sem6Total+classesRemaining} )`
        const studentAttended=document.querySelector('.studentAttended')
        studentAttended.innerHTML=`Classes Attended : ${sem6Attended}`
        const studentConducted=document.querySelector('.studentConducted')
        studentConducted.innerHTML=`Classes Conducted : ${sem6Total}`
        const studentTotalClasses=document.querySelector('.studentTotalClasses')
        studentTotalClasses.innerHTML=sem6Total+classesRemaining
        const studentRemainingClasses=document.querySelector('.studentRemainingClasses')
        studentRemainingClasses.innerHTML=classesRemaining
})


const printStudentData = () => {
    fetch('./XML-DATA/StudentData.xml')
    .then(response => response.text())
    .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const student = xmlDoc.querySelector('student');
        document.getElementById('profileImage').src=`https://automation.vnrvjiet.ac.in/eduprime3/Docs/VNRVJIET/User/${student.querySelector('id').textContent}.jpg?v=504911430000000000`
        document.getElementById('profileStudentId').innerHTML=student.querySelector('id').textContent
        document.getElementById('profileStudentName').innerHTML=student.querySelector('name').textContent
        document.getElementById('profileFatherName').innerHTML=student.querySelector('fatherName').textContent
        document.getElementById('profileMotherName').innerHTML=student.querySelector('motherName').textContent
        document.getElementById('profileAddress').innerHTML=student.querySelector('address').textContent
        document.getElementById('profileParentNo').innerHTML=student.querySelector('parentNo').textContent
        document.getElementById('profileStudentNo').innerHTML=student.querySelector('studentNo').textContent
        document.getElementById('profileEmail').innerHTML=student.querySelector('email').textContent
        document.getElementById('profileBranchName').innerHTML=student.querySelector('branchName').textContent
        document.getElementById('profileBranchId').innerHTML=student.querySelector('branchId').textContent
        // const table = document.querySelector('.student');
            // const tableRow = document.createElement('tr');
            // tableRow.innerHTML = `
            //             <td>${student.querySelector('id').textContent}</td>
            //             <td>${student.querySelector('name').textContent}</td>
            //             <td>${student.querySelector('fatherName').textContent}</td>
            //             <td>${student.querySelector('motherName').textContent}</td>
            //             <td>${student.querySelector('address').textContent}</td>
            //             <td>${student.querySelector('parentNo').textContent}</td>
            //             <td>${student.querySelector('studentNo').textContent}</td>
            //             <td>${student.querySelector('email').textContent}</td>                        
            //             <td>${student.querySelector('branchName').textContent}</td>
            //             <td>${student.querySelector('branchId').textContent}</td>
            //         `;
            // table.appendChild(tableRow);

            })
}   


const printAttendance=()=>{
    fetch('./XML-DATA/StudentCoursesData.xml')
            .then((res)=>res.text())
            .then((xmlString)=>{
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
                const semesters = xmlDoc.querySelectorAll('semester');
                const sem1=document.querySelector('.a11')
                const sem2=document.querySelector('.a12')
                const sem3=document.querySelector('.a21')
                const sem4=document.querySelector('.a22')
                const sem5=document.querySelector('.a31')
                //const sem6=document.querySelector('.a32')
                let sem1Attended=0,sem1Total=0;
                let sem2Attended=0,sem2Total=0;
                let sem3Attended=0,sem3Total=0;
                let sem4Attended=0,sem4Total=0;
                let sem5Attended=0,sem5Total=0;
                //let sem6Attended=0,sem6Total=0;
                for(const semester of semesters){
                    const tableRow=document.createElement('tr')
                    tableRow.innerHTML=`
                        <th scope="row">${semester.querySelector('courseId').textContent}</th>
                        <td>${semester.querySelector('courseName').textContent}</td>
                        <td>${semester.querySelector('classesAttended').textContent}</td>
                        <td>${semester.querySelector('totalClasses').textContent}</td>
                        <td>${((semester.querySelector('classesAttended').textContent/semester.querySelector('totalClasses').textContent)*100).toFixed(2)}%</td>    
                    `;
                    if(semester.getAttribute('id')=="1"){
                        sem1.appendChild(tableRow)
                        sem1Attended+=parseInt(semester.querySelector('classesAttended').textContent);
                        sem1Total+=parseInt(semester.querySelector('totalClasses').textContent);
                    }else if(semester.getAttribute('id')=="2"){
                        sem2.appendChild(tableRow)
                        sem2Attended+=parseInt(semester.querySelector('classesAttended').textContent);
                        sem2Total+=parseInt(semester.querySelector('totalClasses').textContent);
                    }else if(semester.getAttribute('id')=="3"){
                        sem3.appendChild(tableRow)
                        sem3Attended+=parseInt(semester.querySelector('classesAttended').textContent);
                        sem3Total+=parseInt(semester.querySelector('totalClasses').textContent);
                    }else if(semester.getAttribute('id')=="4"){
                        sem4.appendChild(tableRow)
                        sem4Attended+=parseInt(semester.querySelector('classesAttended').textContent);
                        sem4Total+=parseInt(semester.querySelector('totalClasses').textContent);
                    }else if(semester.getAttribute('id')=="5"){
                        sem5.appendChild(tableRow)
                        sem5Attended+=parseInt(semester.querySelector('classesAttended').textContent);
                        sem5Total+=parseInt(semester.querySelector('totalClasses').textContent);
                    }
                    // else if(semester.getAttribute('id')=="6"){
                    //     sem6.appendChild(tableRow)
                    //     sem6Attended+=parseInt(semester.querySelector('classesAttended').textContent);
                    //     sem6Total+=parseInt(semester.querySelector('totalClasses').textContent);
                    // }
                }
                const tableRow1=document.createElement('tr')
                tableRow1.innerHTML=`
                    <td></td>
                    <td class='text-end fw-bold fs-5'>Total : </td>
                    <td>${sem1Attended}</td>
                    <td>${sem1Total}</td>
                    <td class='fw-bold'>${((sem1Attended/sem1Total)*100).toFixed(2)}% ( ${sem1Attended}/${sem1Total} )</td>
                `
                    sem1?.appendChild(tableRow1)
                    const tableRow2=document.createElement('tr')
                tableRow2.innerHTML=`
                    <td></td>
                    <td class='text-end fw-bold fs-5'>Total : </td>
                    <td>${sem2Attended}</td>
                    <td>${sem2Total}</td>
                    <td class='fw-bold'>${((sem2Attended/sem2Total)*100).toFixed(2)}% ( ${sem2Attended}/${sem2Total} )</td>
                `
                sem2.appendChild(tableRow2)
                const tableRow3=document.createElement('tr')

                tableRow3.innerHTML=`
                    <td></td>
                    <td class='text-end fw-bold fs-5'>Total : </td>
                    <td>${sem3Attended}</td>
                    <td>${sem3Total}</td>
                    <td class='fw-bold'>${((sem3Attended/sem3Total)*100).toFixed(2)}% ( ${sem3Attended}/${sem3Total} )</td>
                `   
                sem3.appendChild(tableRow3)
                const tableRow4=document.createElement('tr')

                tableRow4.innerHTML=`
                    <td></td>
                    <td class='text-end fw-bold fs-5'>Total : </td>
                    <td>${sem4Attended}</td>
                    <td>${sem4Total}</td>
                    <td class='fw-bold'>${((sem4Attended/sem4Total)*100).toFixed(2)}% ( ${sem4Attended}/${sem4Total} )</td>
                `
                sem4.appendChild(tableRow4)
                const tableRow5=document.createElement('tr')

                tableRow5.innerHTML=`
                    <td></td>
                    <td class='text-end fw-bold fs-5'>Total : </td>
                    <td>${sem5Attended}</td>
                    <td>${sem5Total}</td>
                    <td class='fw-bold'>${((sem5Attended/sem5Total)*100).toFixed(2)}% ( ${sem5Attended}/${sem5Total} )</td>
                `
                sem5.appendChild(tableRow5)

                // const tableRow6=document.createElement('tr')

                // tableRow6.innerHTML=`
                //     <td></td>
                //     <td class='text-end fw-bold fs-5'>Total : </td>
                //     <td>${sem6Attended}</td>
                //     <td>${sem6Total}</td>
                //     <td class='fw-bold'>${((sem6Attended/sem6Total)*100).toFixed(2)}% ( ${sem6Attended}/${sem6Total} )</td>
                // `
                // sem6.appendChild(tableRow6)
            })
}


const printCourses=()=>{
    fetch('./XML-DATA/StudentCoursesData.xml')
    .then((res)=>res.text())
    .then((xmlString)=>{
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const semesters = xmlDoc.querySelectorAll('semester');
        const sem1=document.querySelector('.c11')
        const sem2=document.querySelector('.c12')
        const sem3=document.querySelector('.c21')
        const sem4=document.querySelector('.c22')
        const sem5=document.querySelector('.c31')
        //const sem6=document.querySelector('.c32')
        for(let semester of semesters ){
            const newCourse=document.createElement('div')
            newCourse.classList.add("col-sm-12","col-md-6","col-lg-4","my-2");
            newCourse.innerHTML=`
            <div class="card border rounded shadow">
                <div class="card-header">
                    <h6 class='fw-bold'>${semester.querySelector('courseName').textContent}</h6>
                </div>
                <div class="card-body mx-auto">
                    <h6>Course Id : ${semester.querySelector('courseId').textContent}</h6>
                    <h6>Enrollment Id : ${semester.querySelector('enrollmentId').textContent}</h6>
                    <h6>Credits : ${semester.querySelector('credits').textContent}</h6>
                </div>
            </div>
            `;
            if(semester.getAttribute('id')=="1"){
                sem1.appendChild(newCourse)
            }else if(semester.getAttribute('id')=="2"){
                sem2.appendChild(newCourse)
            }
            else if(semester.getAttribute('id')=="3"){
                sem3.appendChild(newCourse)
            }
            else if(semester.getAttribute('id')=="4"){
                sem4.appendChild(newCourse)
            }
            else if(semester.getAttribute('id')=="5"){
                sem5.appendChild(newCourse)
            }
            // else if(semester.getAttribute('id')=="6"){
            //     sem5.appendChild(newCourse)
            // }
        }
    })
}


const printResults=()=>{
    fetch('./XML-DATA/StudentCoursesData.xml')
            .then((res)=>res.text())
            .then((xmlString)=>{
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
                const semesters = xmlDoc.querySelectorAll('semester');
                const sem1=document.querySelector('.r11')
                const sem2=document.querySelector('.r12')
                const sem3=document.querySelector('.r21')
                const sem4=document.querySelector('.r22')
                const sem5=document.querySelector('.r31')
                for(const semester of semesters){
                    const tableRow=document.createElement('tr')
                    tableRow.innerHTML=`
                        <th scope='row'>${semester.querySelector('courseId').textContent}</th>
                        <td>${semester.querySelector('courseName').textContent}</td>
                        <td>${semester.querySelector('enrollmentDate').textContent}</td>
                        <td>${semester.querySelector('grade').textContent}</td>
                    `;
                    if(semester.getAttribute('id')=="1"){
                        sem1.appendChild(tableRow)
                    }else if(semester.getAttribute('id')=="2"){
                        sem2.appendChild(tableRow)
                    }else if(semester.getAttribute('id')=="3"){
                        sem3.appendChild(tableRow)
                    }else if(semester.getAttribute('id')=="4"){
                        sem4.appendChild(tableRow)
                    }else if(semester.getAttribute('id')=="5"){
                        sem5.appendChild(tableRow)
                    }
                }
            })
}


const loadContent = (url) => {
    fetch(url)
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('content').innerHTML = data;
            if (window.width < 576) {
                const offcanvasSidebar = document.getElementById('offcanvasSidebar');
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasSidebar);
                bsOffcanvas.hide();
            }
        })
        .catch((err) => {
            console.log(err)
        })
}


document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('profile-link').addEventListener('click', (e) => {
        e.preventDefault()
        loadContent('Profile.html')
        printStudentData()
    })
    document.getElementById('attendance-link').addEventListener('click', (e) => {
        e.preventDefault()
        loadContent('Attendance.html')
        printAttendance()
    })
    document.getElementById('courses-link').addEventListener('click', (e) => {
        e.preventDefault()
        loadContent('Courses.html')
        printCourses()
    })
    document.getElementById('results-link').addEventListener('click', (e) => {
        e.preventDefault()
        loadContent('Results.html')
        printResults()
    })
    document.getElementById('profile-link-mobile').addEventListener('click', (e) => {
        e.preventDefault()
        loadContent('Profile.html')
        printStudentData()
    })
    document.getElementById('attendance-link-mobile').addEventListener('click', (e) => {
        e.preventDefault()
        loadContent('Attendance.html')
        printAttendance()
    })
    document.getElementById('courses-link-mobile').addEventListener('click', (e) => {
        e.preventDefault()
        loadContent('Courses.html')
        printCourses()
    })
    document.getElementById('results-link-mobile').addEventListener('click', (e) => {
        e.preventDefault()
        loadContent('Results.html')
        printResults()
    })
})

