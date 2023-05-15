---
slug: /atlas-search/public-api/search
title: Using GraphQL Search API
description: Using Atlas Search API for search
---

# Search API

The Search API allows you to search for documents in an index based on specific parameters.

## API Reference

The search schema defines the GraphQL query type for searching documents in an index. It includes various parameters to customize the search query.

### Query

| Field  | Description                                                      |
| ------ | ---------------------------------------------------------------- |
| search | Searches for documents in an index based on specific parameters. |

#### Search Parameters

| Parameter | Type              | Description                                                                                           |
| --------- | ----------------- | ----------------------------------------------------------------------------------------------------- |
| query     | String!           | The search query.                                                                                     |
| filter    | String            | Filter string that will be added to the search query and filter out search results.                   |
| orderBy   | [OrderBy]         | Used for ordering the search results. By default, a weight policy is applied.                         |
| offset    | Int               | Results offset used for pagination.                                                                   |
| limit     | Int               | Results limit used for pagination.                                                                    |
| fields    | [SearchField]     | Specifies the fields to search for in the documents.                                                  |
| tolerance | SearchOption = {} | Selects either Fuzzy or Stemming search option. Can be provided later to override the global setting. |

#### SearchField Input

| Field  | Type    | Description                                                         |
| ------ | ------- | ------------------------------------------------------------------- |
| name   | String! | The field name to search for in the document.                       |
| weight | Int     | The weight of the field, affecting the order of returned documents. |

#### OrderBy Input

| Field     | Type             | Description                          |
| --------- | ---------------- | ------------------------------------ |
| field     | String!          | The field to order the documents by. |
| direction | OrderByDirection | The sort direction (asc or desc).    |

#### SearchOption Input

| Field         | Type              | Description                                                                                                                                                                |
| ------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | SearchOptionEnum! | The search option name (fuzzy or stemming).                                                                                                                                |
| fuzzyDistance | Int               | Optional fuzzy distance. Applicable only if the fuzzy search option is selected. Its actually is the number of one-character changes needed to turn one term into another. |

#### SearchResult Type

| Field     | Type             | Description                                |
| --------- | ---------------- | ------------------------------------------ |
| total     | Int              | The total number of documents returned.    |
| documents | [SearchDocument] | The list of documents matching the search. |

#### SearchDocument Type

| Field | Type    | Description                                         |
| ----- | ------- | --------------------------------------------------- |
| id    | ID!     | The Elasticsearch ID of the document.               |
| score | Float   | The Elasticsearch score of the document.            |
| sort  | [Float] | Values used by Elasticsearch to sort the documents. |
| data  | Map!    | The document data.                                  |

### Enumerations

#### SearchOptionEnum

| Name     | Description                 |
| -------- | --------------------------- |
| fuzzy    | The fuzzy search option.    |
| stemming | The stemming search option. |

#### OrderByDirection

| Name | Description               |
| ---- | ------------------------- |
| asc  | Sort in ascending order.  |
| desc | Sort in descending order. |

## Usage

### Basic Usage

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
    { "name": "description" }
  ],
  "tolerance": { "name": "fuzzy", "distance": 2 }
}
```

| Parameter | Description                                                                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| query     | The search query itself. We search for documents containing word 'Austin'.                                                                                                 |
| filter    | Additional filtering to apply to the search results. We search only for posts and page post_types.                                                                         |
| orderBy   | Order by name asc and, in case of a tie, date desc.                                                                                                                        |
| offset    | The number of results to skip for pagination. We asked to skip the first 200.                                                                                              |
| limit     | The maximum number of results to return. We asked for 100.                                                                                                                 |
| fields    | An array of objects specifying the fields to search for in the documents and their weights. Title has double the weight of description, so it will come first as a result. |
| tolerance | The search tolerance option, such as fuzzy search with a specified distance. We used fuzzy with distance 2.                                                                |

### Using Query Operators

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

This example searches for records that match the following criteria:

- The `seats.count` field has a value greater than 4 and not 10
- The `tags.name` field contains the value Cars.
- The text **“hello”** appears in the record.
- The text **“world”** appears in the record.
- The record contains either the number **123** or the number **4.56**.
