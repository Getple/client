import Dropdown from '../../components/commons/dropdown';
import {
  ContainerWrapper,
  Container,
  Title,
  Label,
  Input,
  SelectBox,
  Textarea,
  SubmitButton,
} from './postFormStyle';

interface PostFormProps {
  selectedSport: string;
  selectedLocation: string;
  setSeletctedSport: React.Dispatch<React.SetStateAction<string>>;
  setSeletctedLocation: React.Dispatch<React.SetStateAction<string>>;
  isShow: {
    sport: boolean;
    location: boolean;
  };
  handleDropdown: (type: string) => void;
}

const PostFormPresenter = (props: PostFormProps): JSX.Element => {
  const {
    selectedSport,
    selectedLocation,
    setSeletctedSport,
    setSeletctedLocation,
    isShow,
    handleDropdown,
  } = props;
  const SPORTS = [
    '축구',
    '풋살',
    '야구',
    '농구',
    '탁구',
    '배드민턴',
    '테니스',
    '골프',
  ];
  const LOCATION = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
    '세종특별자치시',
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
  ];

  return (
    <ContainerWrapper>
      <Container>
        <Title>새 글 쓰기</Title>
        <Label>제목</Label>
        <Input />
        <Label>모집 인원</Label>
        <Input />
        <Label>전화번호</Label>
        <Input />
        <Label>종목 선택</Label>
        <SelectBox
          onClick={() => handleDropdown('sport')}
          placeholder="종목을 선택해주세요."
          defaultValue={selectedSport && selectedSport}
        />
        {isShow.sport && (
          <Dropdown menuList={SPORTS} setSeletctedMenu={setSeletctedSport} />
        )}
        <Label>모집 지역</Label>
        <SelectBox
          onClick={() => handleDropdown('location')}
          placeholder="종목을 선택해주세요."
          defaultValue={selectedLocation && selectedLocation}
        />
        {isShow.location && (
          <Dropdown
            menuList={LOCATION}
            setSeletctedMenu={setSeletctedLocation}
          />
        )}
        <Label>모집 내용</Label>
        <Textarea placeholder="모집에 대한 내용을 입력해주세요"></Textarea>
        <SubmitButton>등록하기</SubmitButton>
      </Container>
    </ContainerWrapper>
  );
};

export default PostFormPresenter;
