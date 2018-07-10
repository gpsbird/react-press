import gql from 'graphql-tag';

export default gql`
    query Posts($after: String, $first: Int, $last: Int, $before: String) {
        allPost(first: $first, last: $last, before: $before, after: $after, sortBy: "timestamp") {
            edges {
                node {
                    id
                    title
                    timestamp
                    postPicUrl
                    body
                    author {
                        gravatarUrl
                        fullName
                        id
                    }
                }
            }
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
            totalCount
        }
    }
`;
