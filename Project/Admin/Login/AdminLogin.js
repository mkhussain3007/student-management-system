document.getElementById('adminForm').onsubmit=(e)=>{
   e.preventDefault()
   fetch('AdminServlet')
   .then((res)=>{
      return res.text()
   })
   .then((data)=>{
      console.log(data)
      window.location.href="../AdminHome.html"
   })
   .catch((err)=>console.log(err))
}