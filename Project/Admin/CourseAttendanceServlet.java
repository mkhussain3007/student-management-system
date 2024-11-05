import java.io.*;
import java.util.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class CourseAttendanceServlet extends HttpServlet
{
	public void doGet(HttpServletRequest request,HttpServletResponse response)
	{
		String courseId=request.getParameter("courseId");
		getAttendanceDetails(courseId,response);
	}
	public void getAttendanceDetails(String courseId,HttpServletResponse response)
	{
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
		        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wt-cbp", "root", "root");		
			Statement stmt=con.createStatement();
			ResultSet res=stmt.executeQuery("select e.studentId,s.studentName,e.classesAttended,e.totalClasses,e.enrollmentId from enrollments e join students s on s.studentId=e.studentId where courseId='"+courseId+"'order by s.studentId");
			String filePath="C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\WT-CBP\\Project\\Admin\\XML-DATA\\StudentsAttendance.xml";
			try(FileWriter writer=new FileWriter(filePath))
			{
                         	writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
				writer.write("<students>\n");
				while(res.next())
				{
					writer.write("<student>\n");
					writer.write("	<id>"+res.getString(1)+"</id>\n");
					writer.write("	<name>"+res.getString(2)+"</name>\n");
					writer.write("	<classesAttended>"+res.getInt(3)+"</classesAttended>\n");
					writer.write("	<totalClasses>"+res.getInt(4)+"</totalClasses>\n");
					writer.write("	<enrollmentId>"+res.getString(5)+"</enrollmentId>\n");
					writer.write("</student>\n");
				}
				writer.write("</students>");
				response.setContentType("text/plain");
		                response.getWriter().println("Data has been written to " + filePath);
			}
			res.close();
			con.close();
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}
}
		