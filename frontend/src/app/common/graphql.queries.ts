import { gql } from 'apollo-angular';
export const GET_BOOKS = gql`
  query {
    book {
      id
      title
      linkImg
      author
      description
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview(
    $comment: String!
    $rating: Int!
    $userId: Int!
    $bookId: Int!
  ) {
    createReview(
      createReview: {
        comment: $comment
        rating: $rating
        userId: $userId
        bookId: $bookId
      }
    ) {
      id
      comment
      rating
    }
  }
`;

export const GET_DATA_USER = gql`
  query user($userId: Int!) {
    user(id: $userId) {
      id
      username
      email
    }
  }
`;

export const GET_REVIEW_ONE_USER = gql`
  query reviewOneUser($userId: Int!) {
    reviewsOneUser(id: $userId) {
      id
      comment
      rating
    }
  }
`;

export const GET_REVIEWS_BY_BOOKID = gql`
  query getReviewsByBookId($bookId: Int!) {
    getReviewsByBookId(bookId: $bookId) {
      id
      comment
      rating
    }
  }
`;
