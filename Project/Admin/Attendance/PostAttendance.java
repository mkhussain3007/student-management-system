import java.io.*;
import java.util.*;
import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/PostAttendance")
public class PostAttendance extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String presentIds = request.getParameter("present");
		String notPresentIds=request.getParameter("notPresent");
		String courseId=request.getParameter("courseId");
		String[] presentStudents=presentIds.split(",");
		String[] absentStudents=notPresentIds.split(",");
		response.setContentType("text/plain");
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
		        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wt-cbp", "root", "root");			
			Statement stmt=con.createStatement();
			for(int i=0;i<presentStudents.length;i++)
			{
				int res=stmt.executeUpdate("update enrollments set classesAttended=classesAttended+1,totalClasses=totalClasses+1 where enrollmentId='"+presentStudents[i].substring(6,10)+"_"+courseId+"';");
			}
			for(int i=0;i<absentStudents.length;i++)
			{
				int res=stmt.executeUpdate("update enrollments set totalClasses=totalClasses+1 where enrollmentId='"+absentStudents[i].substring(6,10)+"_"+courseId+"';");
			}
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
			catch(Exception e)
			{	
				response.getWriter().println(e.getMessage());
			}
			response.getWriter().println("Data has been written to " + filePath);
			res.close();
			con.close();	
		}
		catch(Exception e)
		{
			response.getWriter().println(e.getMessage());
		}	
	}
}
