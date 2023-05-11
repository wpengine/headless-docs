---
slug: /atlas-search/public-api/search
title: Using GraphQL Search API
description: Using Atlas Search API for search
---
# Search API

The Search API allows you to search for documents in an index based on specific parameters.

##  API Reference

### Queries

#### search
Searches for documents in an index based on the provided search query and parameters.

| Argument | Type | Description |
| --- | --- | --- |
| query | String! | The search query. |
| filter | String | A filter string to apply to the search query and filter out search results. |
| orderBy | [OrderBy] | An array of objects specifying the field and sort direction for ordering the documents. |
| offset | Int | The results offset used for pagination. Default is 0. |
| limit | Int | The results limit used for pagination. Default is 15. |
| fields | [SearchField] | The fields to search for in the documents. |
| tolerance | SearchOption | The search tolerance option. Selects either fuzzy or stemming. |

##### Response
Returns a SearchResult object containing the total number of documents returned and an array of SearchDocument objects representing the search results.

### Types

#### SearchField
Represents a field to search for in the document.

| Field | Type | Description |
| --- | --- | --- |
| name | String! | The field name. |
| weight | Int | The field weight. It affects the order in which documents are returned. |

#### SearchResult
Represents a search result hit.

| Field | Type | Description |
| --- | --- | --- |
| total | Int | The total number of documents returned. |
| documents | [SearchDocument] | An array of SearchDocument objects representing the search results. |

#### Number
A union type representing either an integer or a float.

#### SearchOption
A union type representing the search tolerance option (either fuzzy or stemming).

#### SearchFuzzyOption
Represents the fuzzy search option.

| Field | Type | Description                                 |
| --- | --- |---------------------------------------------|
| name | FuzzyName! | The name should only be the string 'fuzzy'. |
| distance | Int | The fuzzy distance. Its actually is the number of one-character changes needed to turn one term into another.           |

#### SearchStemmingOption
Represents the stemming search option.

| Field | Type | Description |
| --- | --- | --- |
| name | StemmingName! | The name should only be the string 'stemming'. |

#### FuzzyName
An enum type representing the fuzzy search option.

#### StemmingName
An enum type representing the stemming search option.

#### SearchDocument
Represents a search document.

| Field | Type | Description |
| --- | --- | --- |
| id | ID! | The Elastic search ID. |
| score | Float | The Elastic search score. |
| sort | [Number] | Values used by Elastic Search to sort documents. |
| data | Map! | The document data. |

#### OrderBy
Represents the field and direction for ordering the documents.

| Field | Type | Description |
| --- | --- | --- |
| field | String! | The field to order the documents by. |
| direction | OrderByDirection! | The sort direction (asc or desc). |

#### OrderByDirection
An enum type representing the sort direction (asc or desc).



##  Usage

###  Basic usage
To search for documents using the `search` query, the input looks like something like this:

```graphql
{
  "query": "Austin",
  "filter": "post_type:post,page",
  "orderBy": [
    { "field": "name", "direction": "asc" },
    { "field": "date", "direction": "desc" }
  ],
  "offset": 200,
  "limit": 100,
  "fields": [
    { "name": "title", "weight": 2 },
    { "name": "description", "weight": 1 }
  ],
  "tolerance": { "name": "fuzzy", "distance": 2 }
}
```

| Parameter  | Description                                                                                                                                                             |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| query      | The search query itself. We search for documents containing word 'Austin'                                                                                               |
| filter     | Additional filtering to apply to the search results. We search only ffor posts and page post_types                                                                      |
| orderBy    | Order by name asc and in case of a tie, then date desc                                                                                                                  |
| offset     | The number of results to skip for pagination. We asked to skip the first 200                                                                                            |
| limit      | The maximum number of results to return. Asked for 100                                                                                                                  |
| fields     | An array of objects specifying the fields to search for in the documents and their weights. Title has double weight than description, so it will come first as a result |
| tolerance  | The search tolerance option, such as fuzzy search with a specified distance. We used fuzzy with distance 2                                                              |

###  Using Query Operators

- Using `NOT` search operator:

```graphql
{
  "query": "Austin NOT Minnesota",
}
```

- Using `AND` search operator:

```graphql
{
  "query": "New York AND Texas",
}
```

- Using `OR` search operator:

```graphql
{
  "query": "New York OR Texas",
}
```

### Advanced Query Example
```graphql
{
  "query": "seats.count::>4 !seats.count:10 tags.name:Cars hello AND world OR 123 4.56",
}
```

It searches for records that match the following criteria:

- The `seats.count` field has a value greater than 4 and not 10
- The `tags.name` field contains the value Cars.
- The text **“hello”** appears in the record.
- The text **“world”** appears in the record.
- The record contains either the number **123** or the number **4.56**.