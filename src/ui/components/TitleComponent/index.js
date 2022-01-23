import React from "react";
import * as S from "./styles";

export default function TitleComponent() {
  return (
    <S.Container>
      <div>
        <S.Title> Weather Finder </S.Title>
        <S.Subtitle>Find out temperature, conditions and more...</S.Subtitle>
      </div>
    </S.Container>
  );
}
