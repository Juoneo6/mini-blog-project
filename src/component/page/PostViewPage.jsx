import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as _ from './PostViewstyle';
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

function PostViewPage(props) {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => {
    return item.id == postId;
  });

  const [comment, setComment] = useState("");

  return (
    <_.Wrapper>
      <_.Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate("/");
          }}
        />
        <_.PostContainer>
          <_.TitleText>{post.title}</_.TitleText>
          <_.ContentText>{post.content}</_.ContentText>
        </_.PostContainer>

        <_.CommentLabel>댓글</_.CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
            }}
          />
          <Button
            title="댓글 작성하기"
            onClick={() => {
              navigate("/");
            }}
          />
      </_.Container>
    </_.Wrapper>
  );
}

export default PostViewPage;
