import { SendSharp } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto;
  width: 60%;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 80%;
  }
`;
const ReviewPart = styled.div`
  display: flex;
  flex: 5;
  justify-content: center;
  flex-direction: column;
`;
const ReviewCard = styled.div`
  margin: 10px 5px;
  display: flex;

  flex-direction: column;
`;
const UserName = styled.h2`
  display: flex;
  font-size: medium;
  font-weight: bold;
  margin: 0 5px;
`;
const Review = styled.p`
  margin: 0 5px;
  display: flex;
  font-family: monospace;
  text-rendering: auto;

  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  font-family: monospace;
  text-rendering: auto;
  color: fieldtext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
`;
const Date = styled.p`
  display: flex;
  margin: 0 5px;
  font-size: small;
`;
const FormBox = styled.form`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const Input = styled.textarea`
  width: 100%;
  height: 40px;

  border: 0;
  border-bottom: 2px solid;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  height: 45px;
  background-color: #f7ca00;
  color: white;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
`;
export const ReviewBox = (props) => {
  return (
    <>
      <Container>
        <ReviewPart>
          <h1>Reviews</h1>
          <FormBox action="#">
            <Input placeholder="Write here..." row="20" />
            <Button>
              <SendSharp />
            </Button>
          </FormBox>
          {props.reviewData.length > 0 ? (
            props.reviewData.map((review, index) => {
              return (
                <React.Fragment key={index}>
                  <ReviewCard>
                    <UserName>{review.username}</UserName>

                    <Date>{review.Date}</Date>
                    <Review>{review.review}</Review>
                  </ReviewCard>
                </React.Fragment>
              );
            })
          ) : (
            <>
              <h1 style={{ textAlign: "center" }}>No review yet</h1>
            </>
          )}
        </ReviewPart>
      </Container>{" "}
    </>
  );
};
