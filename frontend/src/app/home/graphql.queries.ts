import { gql } from 'apollo-angular';
export const GET_BOOKS = gql`
  query {
    book{
      id
      title
      linkImg
      author
      description
    }
  }
`;
