import { useCallback, useEffect } from 'react';
import qs from 'qs';
import { gql, useMutation } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';

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
    }
  }
`;

const Kakao = () => {
  const [KakaoAuth] = useMutation(KAKAO_AUTH);
  const location = useLocation();
  const navigate = useNavigate();
  const loginOrSignup = useCallback(async () => {
    try {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      const {
        data: { kakaoAuth },
      } = await KakaoAuth({
        variables: {
          code,
        },
      });
      if (kakaoAuth?.joined) {
        // User DB에서 로그인 데이터를 조회해서 있을때
        localStorage.setItem('user', JSON.stringify(kakaoAuth));
        localStorage.setItem('islogined', JSON.stringify(true));
        navigate('/');
      } else {
        // User DB에서 로그인 데이터를 조회해서 없을때
        localStorage.setItem('islogined', JSON.stringify(false));
        navigate('/');
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
