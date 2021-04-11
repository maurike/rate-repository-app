import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    {
        repositories {
            edges {
                node {
                    id
                    fullName
                    description
                    language
                    forksCount
                    stargazersCount
                    ratingAverage
                    reviewCount
                    ownerAvatarUrl
                }
            }
        }
    }
`;

export const GET_AUTHORIZED_USER = gql`
    {
        authorizedUser {
            id
            username
        }
    }
`;