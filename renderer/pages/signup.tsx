import React, { useState } from "react";
import Head from "next/head";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "../components/Link";
import { Input } from "../styles/input";
import { InputWrapper } from "./home";
import { loginEmail, signUpEmail } from "../server/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      paddingTop: theme.spacing(4),
    },
  })
);

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles({});

  const onClickSignUp = () => {
    signUpEmail(email, password);
    alert("회원가입 완료");
  };

  return (
    <React.Fragment>
      <Head>
        <title>마음연구소 회원가입</title>
      </Head>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          마음연구소
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          회원가입
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

        <Button onClick={onClickSignUp} variant="contained" color="secondary">
          <Link href="/signup" style={{ color: "white" }}>
            회원가입하기
          </Link>
        </Button>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
