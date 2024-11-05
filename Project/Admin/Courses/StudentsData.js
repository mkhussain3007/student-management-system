const studentsData=document.getElementById('studentsData')
fetch('../XML-DATA/CourseStudents.xml')
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
            const enrollmentId=student.querySelector('enrollmentId').textContent
            tableRow.innerHTML=`
                <td><img src='${`https://automation.vnrvjiet.ac.in/eduprime3/Docs/VNRVJIET/User/${student.querySelector('id').textContent}.jpg?v=504911430000000000`}' width="40px"></img></td>
                <th scope="row">${student.querySelector('id').textContent}</th>
                <td>${student.querySelector('name').textContent}</td>
                <td>${enrollmentId}</td>
                <td>
                    <input type='text' value='${student.querySelector('grade').textContent}' class='form-control' disabled>
                </td>
                <td>
                    <button class="enableBtn btn btn-dark m-1"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="saveBtn btn btn-dark m-1">Save</button>
                </td>
            `
            const enableBtn = tableRow.querySelector('.enableBtn');
            const saveBtn = tableRow.querySelector('.saveBtn');
            const gradeInput = tableRow.querySelector('input');
        
            // Event listener to enable the input field
            enableBtn.addEventListener('click', () => {
                gradeInput.disabled = false;
            });
        
            // Event listener to save and print to console
            saveBtn.addEventListener('click', () => {
                // const formData=new FormData();
                // formData.append('enrollmentId',enrollmentId)
                // formData.append('newGrade',gradeInput.value)
                // console.log(formData)
                fetch('PostGradeServlet?enrollmentId='+enrollmentId+'&newGrade='+gradeInput.value+'&courseId='+enrollmentId.substring(5))
                .then((res)=>{
                    return res.text()
                })
                .then((data)=>console.log(data))
                .catch((err)=>console.log(err))
                gradeInput.disabled=true
            });
        
            studentsData.appendChild(tableRow)
        }
    })
    .catch((err)=>console.log(err))
