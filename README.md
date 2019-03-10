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
|Fields|id: String!  reviewer: Reviewer!  review: String!  score: Int!  date_created: Date!  date_updated: Date!|
