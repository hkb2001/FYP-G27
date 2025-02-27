/****** Script Date: 02-14-2024 03:38:18 PM ******/

CREATE TABLE Student (
  ID int PRIMARY KEY IDENTITY(1,1) DEFAULT '' NOT NULL,
  Age int DEFAULT '' NOT NULL
);
/****** Script Date: 02-14-2024 03:38:18 PM ******/

CREATE TABLE Teacher (
  ID int PRIMARY KEY IDENTITY(1,1) DEFAULT '' NOT NULL,
  Name NVARCHAR(100) DEFAULT ''
);
/****** Script Date: 02-14-2024 03:38:18 PM ******/

CREATE TABLE Department (
  ID int PRIMARY KEY IDENTITY(1,1) DEFAULT '' NOT NULL,
  Name NVARCHAR(100) DEFAULT '' NOT NULL
);
/****** Script Date: 02-14-2024 03:38:18 PM ******/

CREATE TABLE Student_Teacher_relationship (
  StudentID INT,
  TeacherID INT,
  PRIMARY KEY (StudentID, TeacherID),
  FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
  FOREIGN KEY (TeacherID) REFERENCES Teacher(TeacherID)
);
/****** Script Date: 02-14-2024 03:38:18 PM ******/

CREATE TABLE Student_Department_relationship (
  StudentID INT,
  DepartmentID INT,
  PRIMARY KEY (StudentID, DepartmentID),
  FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
  FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);
