const addBranchEventListeners = () => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            loadContent(card.id);
        });
    });
};
addBranchEventListeners();

const fetchStudents=(courseId)=>{
    console.log(courseId)
    fetch('CourseStudentsServlet?courseId='+courseId)
    .then((res)=>{
        return res.text()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>console.log(err))
}
let content=document.getElementById('content')
const originalContent=content.innerHTML
const loadContent=(currentBranch)=>{
    content.innerHTML=''
    // const button=document.createElement('button')
    // button.classList.add('btn','btn-dark')
    // button.innerHTML='Back'
    // button.addEventListener('click',(e)=>{
    //     content.innerHTML=originalContent
    //     addBranchEventListeners();
    // })
    // content.appendChild(button)
    fetch('../XML-DATA/CoursesData.xml')
    .then((res)=>res.text())
    .then((xmlString)=>{
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const branchData = xmlDoc.querySelector(`branch[id="${currentBranch}"]`);
        const semesters=branchData.querySelectorAll('semester')
        for(let i=0;i<semesters.length;i++)
        {
            const heading=document.createElement('h3')
            heading.innerHTML=`Semester - ${i+1}`;
            heading.classList.add('mt-4','mb-3','fw-bold','fs-2')
            content.appendChild(heading)
            const semDiv=document.createElement('div')
            semDiv.classList.add('row','mx-auto')
            const courses=semesters[i].querySelectorAll('course')
            for(const course of courses){
                const courseDiv=document.createElement('div')
                courseDiv.classList.add('col-12','col-md-6','col-lg-4','my-2')
                courseDiv.innerHTML=`
                    <div class="card" id=${course.querySelector('courseId').textContent}>
                        <div class="card-header">
                            <h4 class='fw-bold'>${course.querySelector('courseId').textContent}</h4>
                        </div>
                        <div class="card-body">
                            <p>${course.querySelector('courseName').textContent}</p>
                            <p>Credits : ${course.querySelector('credits').textContent}</p>
                        </div>
                    </div>
                `
                courseDiv.querySelector('.card').addEventListener('click', () => {
                    fetchStudents(course.querySelector('courseId').textContent);
                    window.location.href ='./Students.html'
                    // `./Students.html?courseId=${course.querySelector('courseId').textContent}`;
                });
                semDiv.appendChild(courseDiv)
            }
            content.appendChild(semDiv)
            const hr=document.createElement('hr')
            content.appendChild(hr)
        }
    })
}