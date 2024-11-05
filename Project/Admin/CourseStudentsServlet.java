import java.util.*;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class CourseStudentsServlet extends HttpServlet
{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException
	{
		String courseId=request.getParameter("courseId");
		getStudentDetails(courseId,response);
	}
	public void getStudentDetails(String courseId,HttpServletResponse response) throws IOException	
	{
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
		        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wt-cbp", "root", "root");		
			Statement stmt=con.createStatement();
			ResultSet res=stmt.executeQuery("select e.studentId,s.studentName,e.grade,e.enrollmentId from enrollments e join students s on s.studentId=e.studentId where courseId='"+courseId+"'order by s.studentId");
			String filePath="C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\WT-CBP\\Project\\Admin\\XML-DATA\\CourseStudents.xml";
			try(FileWriter writer=new FileWriter(filePath))
			{
                         	writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
				writer.write("<students>\n");
				while(res.next())
				{
					writer.write("<student>\n");
					writer.write("<id>"+res.getString(1)+"</id>\n");
					writer.write("<name>"+res.getString(2)+"</name>\n");
					writer.write("<grade>"+res.getString(3)+"</grade>\n");
					writer.write("<enrollmentId>"+res.getString(4)+"</enrollmentId>\n");
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
			response.setContentType("text/plain");
			response.getWriter().println(e.getMessage());
		}
	}
}

