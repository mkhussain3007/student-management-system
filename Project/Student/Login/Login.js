document.getElementById('loginForm').onsubmit=(event)=>{
    event.preventDefault()
    let studentId=document.getElementById('username').value
    fetch('StudentServlet?studentId='+studentId)
    .then((res)=>{
        console.log('Response received!'); // Debugging statement
        return res.text()
})
    .then((data)=>{
        window.location.href="../StudentHome.html"
        console.log(data);
    })
    .catch((err)=>console.log(err))
}