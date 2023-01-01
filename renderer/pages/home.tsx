import React from "react";
import Head from "next/head";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Link from "../components/Link";
import { Input } from "../styles/input";
import styled from "@emotion/styled";

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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = () => setOpen(true);

  return (
    <React.Fragment>
      <Head>
        <title>마음연구소 로그인</title>
      </Head>
      <div className={classes.root}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          마음연구소
        </Typography>
        <Typography variant="h6" gutterBottom>
          로그인
        </Typography>
        {/* <img src="/images/logo.png" /> */}

        <InputWrapper>
          <Input placeholder="이메일을 입력하세요" />
          <Input placeholder="비밀번호를 입력하세요" />
        </InputWrapper>

        <Typography gutterBottom>
          <Button variant="contained" color="primary" onClick={handleClick}>
            <Link href="/next" style={{ color: "white" }}>
              로그인하기
            </Link>
          </Button>
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleClick}>
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
