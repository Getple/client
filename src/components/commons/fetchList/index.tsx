import styled from 'styled-components';
import Card from './card';

export interface PostType {
  id: string;
  title: string;
  personnel: string;
  phoneNumber: string;
  event: string;
  region: string;
  content: string;
  createdAt: number;
}

interface FetchListProps {
  array: PostType[];
}

const FetchList = (props: FetchListProps): JSX.Element => {
  return (
    <Container>
      {props.array.map((post) => (
        <Card key={post.id} card={post} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  float: left;
`;

export default FetchList;
