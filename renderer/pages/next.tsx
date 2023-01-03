import React from "react";
import Head from "next/head";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import { COLORS } from "../lib/variables";
import UserList from "../components/UserList";
// import Channel from "../components/chat";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      paddingTop: theme.spacing(4),
    },
  })
);

function Next() {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <Head>
        <title>마음연구소 채팅하기</title>
      </Head>

      <Wrapper>
        <Users>
          유저목록
          <UserList />
        </Users>
        <Chatting>{/* <Channel /> */}</Chatting>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100%;
  background-color: ${COLORS.secondary[600]};
`;

const Users = styled.div`
  width: 60vw;
  color: white;
`;

const Chatting = styled.div`
  width: 40vw;
  background-color: ${COLORS.secondary[200]};
`;

export default Next;
