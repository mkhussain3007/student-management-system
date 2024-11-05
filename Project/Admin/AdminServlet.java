import java.util.*;
import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class AdminServlet extends HttpServlet
{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException
	{
		getDetails(response);
	}
	public void getDetails(HttpServletResponse response)
	{
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/wt-cbp", "root", "root");
			Statement stmt=con.createStatement();
			ResultSet res=stmt.executeQuery("SELECT studentId,studentName,branchId,branchName,section FROM students order by branchId,section,studentId;");
			String filePath="C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\WT-CBP\\Project\\Admin\\XML-DATA\\StudentsData.xml";
			try (FileWriter writer = new FileWriter(filePath)) {
                writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
		writer.write("<branches>\n");
                String currentBranchId = "";
                String currentSection = "";
                boolean branchOpen = false;
                boolean sectionOpen = false;

                while (res.next()) {
                    String branchId = res.getString("branchId");
                    String section = res.getString("section");

                    if (!branchId.equals(currentBranchId)) {
                        if (branchOpen) {
                            if (sectionOpen) {
                                writer.write("  </section>\n");
                                sectionOpen = false;
                            }
                            writer.write("</branch>\n");
                        }
                        writer.write("<branch id='" + branchId + "' name='" + res.getString("branchName") + "'>\n");
                        currentBranchId = branchId;
                        branchOpen = true;
                    }

                    if (!section.equals(currentSection)) {
                        if (sectionOpen) {
                            writer.write("  </section>\n");
                        }
                        writer.write("  <section id='" + section + "'>\n");
                        currentSection = section;
                        sectionOpen = true;
                    }

                    writer.write("    <student>\n");
                    writer.write("      <id>" + res.getString("studentId") + "</id>\n");
                    writer.write("      <name>" + res.getString("studentName") + "</name>\n");
                    writer.write("    </student>\n");
                }

                // Close any remaining open tags
                if (sectionOpen) {
                    writer.write("  </section>\n");
                }
                if (branchOpen) {
                    writer.write("</branch>\n");
                }
		writer.write("</branches>");
            } catch (IOException | SQLException e) {
                e.printStackTrace();
            }
			response.getWriter().println("Data has been written to " + filePath);
			ResultSet res1=stmt.executeQuery("SELECT * FROM courses order by branchId,semesterId;");
			filePath="C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\WT-CBP\\Project\\Admin\\XML-DATA\\CoursesData.xml";
			try (FileWriter writer = new FileWriter(filePath)) {
            writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
	    writer.write("<branches>\n");
            String currentBranchId = "";
            String currentSemesterId = "";
            boolean branchOpen = false;
            boolean semesterOpen = false;

            while (res1.next()) {
                String branchId = res1.getString("branchId");
                String semesterId = res1.getString("semesterId");

                if (!branchId.equals(currentBranchId)) {
                    if (branchOpen) {
                        if (semesterOpen) {
                            writer.write("  </semester>\n");
                            semesterOpen = false;
                        }
                        writer.write("</branch>\n");
                    }
                    writer.write("<branch id='" + branchId + "'>\n");
                    currentBranchId = branchId;
                    branchOpen = true;
                }

                if (!semesterId.equals(currentSemesterId)) {
                    if (semesterOpen) {
                        writer.write("  </semester>\n");
                    }
                    writer.write("  <semester id='" + semesterId + "'>\n");
                    currentSemesterId = semesterId;
                    semesterOpen = true;
                }

                writer.write("    <course>\n");
                writer.write("      <courseId>" + res1.getString("courseId") + "</courseId>\n");
                writer.write("      <courseName>" + res1.getString("courseName") + "</courseName>\n");
                writer.write("      <credits>" + res1.getString("credits") + "</credits>\n");
                writer.write("      <status>" + res1.getString("status") + "</status>\n");
                writer.write("    </course>\n");
            }

            // Close any remaining open tags
            if (semesterOpen) {
                writer.write("  </semester>\n");
            }
            if (branchOpen) {
                writer.write("</branch>\n");
            }
		writer.write("</branches>");
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
			response.getWriter().println("Data has been written to " + filePath);	
			res.close();		
			con.close();
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}
}