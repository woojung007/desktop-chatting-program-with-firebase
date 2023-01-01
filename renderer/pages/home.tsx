import React, { useState } from "react";
import Head from "next/head";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "../components/Link";
import { Input } from "../styles/input";
import styled from "@emotion/styled";
import { loginEmail } from "../server/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      paddingTop: theme.spacing(4),
    },
  })
);

// 로그인 페이지
function Home() {
  const classes = useStyles({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = () => {
    loginEmail(email, password);
    alert("로그인 성공");
  };

  return (
    <React.Fragment>
      <Head>
        <title>마음연구소 로그인</title>
      </Head>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          마음연구소
        </Typography>
        <Typography variant="h6" gutterBottom>
          로그인
        </Typography>

        <InputWrapper>
          <Input
            placeholder="이메일을 입력하세요"
            onChange={({ target }) => setEmail(target.value)}
          />

          <Input
            placeholder="비밀번호를 입력하세요"
            onChange={({ target }) => setPassword(target.value)}
          />
        </InputWrapper>

        <Typography gutterBottom>
          <Button onClick={onClickLogin} variant="contained" color="primary">
            <Link href="/next" style={{ color: "white" }}>
              로그인하기
            </Link>
          </Button>
        </Typography>
        <Button variant="contained" color="secondary">
          <Link href="/signup" style={{ color: "white" }}>
            회원가입하기
          </Link>
        </Button>
      </div>
    </React.Fragment>
  );
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
