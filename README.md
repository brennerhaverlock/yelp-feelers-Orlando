# yelp-feelers-Orlando

## Endpoints

### users overview
|Method|Endpoint|Action|Front-end Request|Back-end Response
|------------|------------|------------|------------|------------|
|GET|'/stores'|get all taco stores||[Store]|
|GET|'/stores/:id/reviews'|get all reviews from a store with id|(id in url)|{<br/>&nbsp;...Store<br/>&nbsp;reviews: {<br/>&nbsp;...Original Review<br/>&nbsp;adju_score: Int!<br/>&nbsp;}<br/>}



### data structure
|      |Store|Reviewer|Original Review|
|------|-------|-------|--------------|
|Fields|id: String!<br/>name: String!<br/>true_score: Int!<br/>adju_score: Int!|id: Int!<br/>username: String!|id: String!<br/>reviewer: Reviewer!<br/>review: String!<br/>score: Int!<br/>date_created: Date!<br/>date_updated: Date!|
