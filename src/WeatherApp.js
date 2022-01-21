import React from 'react';
import TitleComponent from './ui/components/TitleComponent';
import WeatherForm from './ui/components/WeatherForm';
import * as S from './styles';

export default function WeatherApp() {
    return (
        <S.Wrapper>
          <S.MainContainer>
              <S.Row>
               <TitleComponent />
               <WeatherForm />
              </S.Row>
            </S.MainContainer>
        </S.Wrapper>
    );
}
