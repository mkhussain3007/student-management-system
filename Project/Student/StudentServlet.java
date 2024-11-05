import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class StudentServlet extends HttpServlet 
{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException 
	{
        	String studentId = request.getParameter("studentId");
	        getStudentDetails(studentId, response);
	}
	public void getStudentDetails(String studentId, HttpServletResponse response) throws IOException 
	{
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
		        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wt-cbp", "root", "root");			
			Statement stmt=con.createStatement();
			ResultSet res=stmt.executeQuery("select * from students where studentId= '"+studentId+"';");	
	                if (res.next()) 
			{         
				String id=res.getString(1),
				name=res.getString(2),
				fatherName=res.getString(3),
				motherName=res.getString(4),
				bloodGroup=res.getString(5),
				address=res.getString(6),
				parentNo=res.getString(7),
				studentNo=res.getString(8),
				email=res.getString(9),
				branchId=res.getString(10),
				branchName=res.getString(11);
				String filePath="C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\WT-CBP\\Project\\Student\\XML-DATA\\StudentData.xml";
				try (FileWriter writer = new FileWriter(filePath)) 
				{
                           		writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
                     			writer.write("<student>\n");
		                	writer.write("  <id>" + id + "</id>\n");
                    			writer.write("  <name>" + name + "</name>\n");
					writer.write("	<fatherName>"+fatherName+"</fatherName>\n");
					writer.write("	<motherName>"+motherName+"</motherName>\n");
					writer.write("	<address>"+address+"</address>\n");
					writer.write("	<parentNo>"+parentNo+"</parentNo>\n");
					writer.write("	<studentNo>"+studentNo+"</studentNo>\n");
					writer.write("	<email>"+email+"</email>\n");
					writer.write(" <branchName>"+branchName+"</branchName>\n");
                    			writer.write("  <branchId>" + branchId + "</branchId>\n"); 
                    			writer.write("</student>");             
					response.setContentType("text/plain");
		                	response.getWriter().println("Data has been written to " + filePath);
            			}
				res.close();	
				getStudentCompleteDetails(studentId);
			}
			else 
			{
                		response.setContentType("text/plain");
                		response.getWriter().println("Student not found");
            		}
		        con.close();
	        } 
		catch (Exception e) 
		{
	         	System.out.println("Error: " + e.getMessage());
            		e.printStackTrace();
        	}
	}
	public void getStudentCompleteDetails(String studentId) throws IOException 
	{
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
		        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wt-cbp", "root", "root");			
			Statement stmt=con.createStatement();
				String filePath="C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\WT-CBP\\Project\\Student\\XML-DATA\\StudentCoursesData.xml";
				try (FileWriter writer = new FileWriter(filePath)) 
				{
                           		writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
                     			writer.write("<courses>\n");
                    			ResultSet res=stmt.executeQuery("select e.courseId,c.courseName,e.grade,e.enrollmentDate,e.enrollmentId,e.semesterId,e.classesAttended,e.totalClasses,c.credits,c.status from enrollments e join courses c on e.courseid=c.courseid where 	e.studentId='"+studentId+"' order by c.semesterId;");
					while(res.next())
					{
						String semesterId=res.getString("semesterId"),courseId=res.getString(1),courseName=res.getString(2),grade=res.getString(3),
								enrollmentDate=res.getString(4),enrollmentId=res.getString(5),status=res.getString(10);
						int classesAttended=res.getInt(7),totalClasses=res.getInt(8),credits=res.getInt(9);
						writer.write("	<semester id=\""+semesterId+"\">\n");
						writer.write("		<courseId>"+courseId+"</courseId>\n");
						writer.write("		<courseName>"+courseName+"</courseName>\n");
						writer.write("		<grade>"+grade+"</grade>\n");
						writer.write("		<enrollmentDate>"+enrollmentDate+"</enrollmentDate>\n");
						writer.write("		<enrollmentId>"+enrollmentId+"</enrollmentId>\n");
						writer.write("		<classesAttended>"+classesAttended+"</classesAttended>\n");
						writer.write("		<totalClasses>"+totalClasses+"</totalClasses>\n");
						writer.write("		<credits>"+credits+"</credits>\n");
						writer.write("		<status>"+status+"</status>\n");
						writer.write("	</semester>\n");
					}
					writer.write("</courses>");
					res.close();
            			} 
		        con.close(); 
		}
		catch (Exception e) 
		{
	         	System.out.println("Error: " + e.getMessage());
            		e.printStackTrace();
        	}
			
	}
}