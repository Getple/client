import { Dispatch, useCallback, useEffect } from 'react';
import qs from 'qs';
import { gql, useMutation } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';

// import { UserContext } from '../App';

const KAKAO_AUTH = gql`
  mutation kakaoAuth($code: String) {
    kakaoAuth(code: $code) {
      data {
        email
        isAdmin
        phoneNumber
        nickname
        thumbnail_image_url
        profile_image_url
      }
      joined
      accessToken
    }
  }
`;

const Kakao = () => {
  const [KakaoAuth] = useMutation(KAKAO_AUTH);
  const location = useLocation();
  const navigate = useNavigate();
  //const { setAccessToken, accessToken }: any = useContext(UserContext);

  const loginOrSignup = useCallback(async () => {
    try {
      // QueryString으로 인가코드 자른게 code
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      const { data } = await KakaoAuth({
        variables: {
          code,
        },
      });

      //   setAccessToken(data?.kakaoAuth?.accessToken);

      if (data?.kakaoAuth?.joined) {
        // User DB에서 로그인 데이터를 조회해서 있을때
        localStorage.setItem('user', JSON.stringify(data));
        // localStorage.setItem('islogined', JSON.stringify(true));
        localStorage.setItem(
          'access',
          JSON.stringify(data.kakaoAuth.accessToken),
        );

        navigate('/', { replace: true });
      } else if (!data?.kakaoAuth?.joined) {
        // User DB에서 로그인 데이터를 조회해서 없을때
        localStorage.setItem('user', JSON.stringify(data));
        // localStorage.setItem('islogined', JSON.stringify(false));
        localStorage.setItem(
          'access',
          JSON.stringify(data.kakaoAuth.accessToken),
        );

        navigate('/', { replace: true });
      }
    } catch (err: any) {
      alert(`${err.message} data from server!`);
    }
  }, []);

  useEffect(() => {
    loginOrSignup();
  }, []);
  return <div>카카오 로그인중...</div>;
};

export default Kakao;
