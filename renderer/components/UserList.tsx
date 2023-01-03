import styled from "@emotion/styled";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    try {
      const result = await getDocs(collection(getFirestore(), "users"));
      const data = result.docs.map((el) => el.data());
      setUserList(data);
    } catch (e) {
      console.error("Error getUsers : ", e);
    }
  };

  useEffect(() => {
    getUsers();
  }, [userList]);

  return (
    <div>
      <div>유저</div>

      <UserListWrapper>
        {userList?.map((el: any, idx) => (
          <div key={idx}>
            <div>{el.name}</div>
            <div>{el.email}</div>
          </div>
        ))}
      </UserListWrapper>
    </div>
  );
};

const UserListWrapper = styled.div`
  width: 300px;
  height: 300px;
  /* background-color: pink; */
`;

export default UserList;
