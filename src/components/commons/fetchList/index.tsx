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
    <List>
      {props.array.map((post) => (
        <Card key={post.id} card={post} />
      ))}
    </List>
  );
};

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, max-content));
  grid-gap: 16px;
  padding: 20px;
  justify-content: center;
`;

export default FetchList;
