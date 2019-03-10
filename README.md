# yelp-feelers-Orlando

## Endpoints

### users overview
|Method|Endpoint|Action|Front-end Request|Back-end Response
|------------|------------|------------|------------|------------|
|GET|'/stores'|get all taco stores|
|GET|'/stores/:id/reviews'|get all reviews from a store with id|



### data structure
|      |Store|Reviewer|Original Review|Adjusted Review|
|------|-------|-------|--------------|---------------|
|Fields|id: String!<br/>reviewer: Reviewer!<br/>review: String!<br/>score: Int!<br/>date_created: Date!<br/>date_updated: Date!|
