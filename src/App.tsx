import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Kakao from './pages/kakao';
import styled from 'styled-components';
import Main from './pages/main';
import PostForm from './pages/postForm';
import Detail from './pages/detail';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { createContext, useState } from 'react';
import { createUploadLink } from 'apollo-upload-client';
import { useEffect } from 'react';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { access } from 'fs';

// export const UserContext = createContext({});

function App() {
  // const initialState = {
  //   setAccessToken: setAccessToken,
  //   accessToken: accessToken,
  // };

  // useEffect(() => {
  //   // const token = localStorage.getItem('access');
  //   console.log('again');
  // });

  // const httpLink = createHttpLink({
  //   uri: 'http://localhost:4000/',
  // });

  // // function getToken() {
  // //   const token = localStorage.getItem('token');
  // //   return token;
  // // }

  // const authLink = setContext(async (_, { headers }) => {
  //   // get the authentication token from local storage if it exists
  //   const token = await localStorage.getItem('access');
  //   // return the headers to the context so httpLink can read them
  //   // console.log((await token) && `${getToken}`);
  //   console.log(token);
  //   console.log('hello');
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : '',
  //     },
  //   };
  // });

  // const client = new ApolloClient({
  //   link: authLink.concat(httpLink),
  //   cache: new InMemoryCache(),
  // });

  // console.log('AppTest', authLink);
  // const uploadLink = createUploadLink({
  //   uri: 'http://localhost:4000',
  //   headers: authLink,
  // });

  // ! &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  // const uploadLink = createUploadLink({
  //   uri: 'http://localhost:4000',
  //   headers: {
  //     // authorization: localStorage.getItem('access')
  //     //   ? `Bearer ${localStorage.getItem('access')}`
  //     //   : '',
  //     authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // const client = new ApolloClient({
  //   link: ApolloLink.from([uploadLink]),
  //   cache: new InMemoryCache(),
  // });

  return (
    <BrowserRouter>
      <ContaienrWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/kakao" element={<Kakao />} />
          <Route path="/postForm" element={<PostForm />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </ContaienrWrapper>
      <Footer />
    </BrowserRouter>
  );
}

const ContaienrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: auto;
`;

export default App;
