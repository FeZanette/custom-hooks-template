import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { Title, PostContainer } from "../style";
import { Card } from "../components/Card/Card";
import { useCapturarPostagens } from "../hooks/useCapturarPostagens";
import { useResquestData } from "../hooks/useRequestData";

const CommentsPage = () => {
  // const postagens = useCapturarPostagens();
  const [postagens, error, isLoading] = useResquestData(
    [],
    `${BASE_URL}comments`
  );

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isLoading === true && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro. Tente novamente mais tarde.</p>}
        {!isLoading && !error && postagens && postagens.leght === 0 && <p>Lista vazia.</p>}
        {postagens.map((post) => {
          //console.log(post);
          return (
            <Card
              key={post.id}
              text={post.body}
              backgroudColor={"#1dc690"}
              textColor={"#ffffff"}
            />
          );
        })}
      </PostContainer>
    </div>
  );
};

export default CommentsPage;
