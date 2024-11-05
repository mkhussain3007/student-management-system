import java.util.*;
import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class PostGradeServlet extends HttpServlet
{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException
	{
		String enrollmentId=request.getParameter("enrollmentId");
		String newGrade=request.getParameter("newGrade");
		String courseId=request.getParameter("courseId");
		updateGrade(newGrade,enrollmentId,courseId,response);
	}
	public void updateGrade(String newGrade,String enrollmentId,String courseId,HttpServletResponse response) throws IOException
	{
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
		        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wt-cbp", "root", "root");			
			Statement stmt=con.createStatement();
			int res=stmt.executeUpdate("update enrollments set grade='"+newGrade+"' where enrollmentId='"+enrollmentId+"';");
			if(res!=0)
			{
				response.setContentType("text/plain");
		                response.getWriter().println("Grade has updated");
			}
			else
			{
				response.setContentType("text/plain");
		                response.getWriter().println("Error Updating");
			}
			ResultSet res1=stmt.executeQuery("select e.studentId,s.studentName,e.grade,e.enrollmentId from enrollments e join students s on s.studentId=e.studentId where courseId='"+courseId+"'order by s.studentId");
			String filePath="C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\WT-CBP\\Project\\Admin\\XML-DATA\\CourseStudents.xml";
			try(FileWriter writer=new FileWriter(filePath))
			{
                         	writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
				writer.write("<students>\n");
				while(res1.next())
				{
					writer.write("<student>\n");
					writer.write("<id>"+res1.getString(1)+"</id>\n");
					writer.write("<name>"+res1.getString(2)+"</name>\n");
					writer.write("<grade>"+res1.getString(3)+"</grade>\n");
					writer.write("<enrollmentId>"+res1.getString(4)+"</enrollmentId>\n");
					writer.write("</student>\n");
				}
				writer.write("</students>");
				response.setContentType("text/plain");
		                response.getWriter().println("Data has been written to " + filePath);
			}
			res1.close();
			con.close();
		}
		catch(Exception e)
		{
			response.setContentType("text/plain");
			response.getWriter().println(e.getMessage());
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}
}