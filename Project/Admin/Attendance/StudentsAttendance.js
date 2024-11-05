const studentsData=document.getElementById('studentsData')
let courseId=""
fetch('../XML-DATA/StudentsAttendance.xml')
    .then((res)=>{
        return res.text()
    })
    .then((xmlString)=>{
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const students=xmlDoc.querySelectorAll('student')
        for(const student of students){
            let tableRow=document.createElement('tr')
            tableRow.id=student.querySelector('enrollmentId').textContent
            courseId=(student.querySelector('enrollmentId').textContent).substring(5)
            tableRow.innerHTML=`
                <td><img src='${`https://automation.vnrvjiet.ac.in/eduprime3/Docs/VNRVJIET/User/${student.querySelector('id').textContent}.jpg?v=504911430000000000`}' width="40px"></img></td>
                <th scope="row">${student.querySelector('id').textContent}</th>
                <td>${student.querySelector('name').textContent}</td>
                <td>${student.querySelector('classesAttended').textContent}</td>
                <td>${(student.querySelector('classesAttended').textContent/student.querySelector('totalClasses').textContent)*100}%</td>
                <td><input type='checkbox' class='select-student' data-id="${student.querySelector('id').textContent}"></td>
            `
            studentsData.appendChild(tableRow)
        }
    })
    .catch((err)=>console.log(err))
document.getElementById('submitAttendance').addEventListener('click',()=>{
    const presentStudents = document.querySelectorAll('.select-student:checked');
    const uncheckedElements = document.querySelectorAll('.select-student:not(:checked)');
    let notPresent=""
    Array.from(uncheckedElements).map(student=>{
        notPresent+=student.getAttribute('data-id')+","
    })
    let present=""
    Array.from(presentStudents).map(student=>{
        present+=student.getAttribute('data-id')+","
    })
fetch('PostAttendance?present='+present+'&notPresent='+notPresent+'&courseId='+courseId)
.then(res => {
  console.log('Response received!');
  if (!res.ok) {
    throw new Error('Network response was not ok ' + res.statusText);
  }
  return res.text();
})
.then(data => {
  console.log(data);
})
.catch(err => console.error('Error:', err));

})
