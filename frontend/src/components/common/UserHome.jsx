import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import TeacherHome from '../user/teacher/TeacherHome';
import AdminHome from '../admin/AdminHome';
import StudentHome from '../user/student/StudentHome';

const UserHome = () => {
  const user = useContext(UserContext);
  let content;

  switch (user.userData.type) {
    case 'Teacher':
      content = <TeacherHome />;
      break;
    case 'Admin':
      content = <AdminHome />;
      break;
    case 'Student':
      content = <StudentHome />;
      break;
    default:
      content = <p>User role not recognized</p>;
  }

  return <Container>{content}</Container>;
};

export default UserHome;
