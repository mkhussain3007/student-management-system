document.getElementById('branches').addEventListener('click',(e)=>{
    if(e.target.tagName='LI' && e.target.id){
        const loadId=e.target.id;
        console.log(loadId)
        const branchId=loadId.substr(0,loadId.length-2)
        const section=loadId.substr(loadId.length-1,)
        //console.log(branchId,section)
        loadContent(branchId,section)
    }
})
const content=document.getElementById('content')
const loadContent=(branchId,section)=>{
    fetch('../XML-DATA/StudentsData.xml')
    .then((res)=>res.text())
    .then((xmlString)=>{
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const branchData = xmlDoc.querySelector(`branch[id="${branchId}"]`);
        const sectionData = branchData.querySelector(`section[id="${section}"]`);
        const studentList=sectionData.querySelectorAll('student')
        const table=document.createElement('table')
        table.classList.add('table','table-hover')
        table.innerHTML=`
            <tr class="table-dark text-center">
                <th>Picture</th>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Branch</th>
            </tr>        
        `
        for(const student of studentList){
            const tableRow=document.createElement('tr')
            tableRow.innerHTML=`
                <td class='text-center'><img src='${`https://automation.vnrvjiet.ac.in/eduprime3/Docs/VNRVJIET/User/${student.querySelector('id').textContent}.jpg?v=504911430000000000`}' width="40px"></img></td>
                <td class='text-center'>${student.querySelector('id').textContent}</td>
                <td class='text-center'>${student.querySelector('name').textContent}</td>
                <td class='text-center'>${branchId}</td>
            `;   
        table.appendChild(tableRow)
        }
        content.innerHTML=table.outerHTML
    })
}

