---
slug: /atlas-search/public-api/find
title: Using GraphQL Search API
description: Using Atlas Find API for search
---

# Find API Documentation

**NOTE:** This API and its endpoints are in BETA. Beta Services as described by Section 2.e. of the terms of services located [here](https://wpengine.com/legal/terms-of-service/)

## Overview

The Find API allows you to search for documents in an index based on specific parameters.

## API Reference

The schema defines the GraphQL query type for searching documents in an index. It includes various parameters to customize the search query.

### Query

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>find</td>
      <td>Searches for documents in an index based on specific parameters.</td>
    </tr>
  </tbody>
</table>

#### Find Parameters

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>query</td>
      <td>String!</td>
      <td>The search query. This is required.</td>
    </tr>
    <tr>
      <td>filter</td>
      <td>String</td>
      <td>Filter string that will be added to the search query and filter out search results.</td>
    </tr>
    <tr>
      <td>orderBy</td>
      <td>[OrderBy]</td>
      <td>Used for ordering the search results. By default, a weight policy is applied.</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>Int</td>
      <td>Results offset used for pagination.</td>
    </tr>
    <tr>
      <td>limit</td>
      <td>Int</td>
      <td>Results limit used for pagination.</td>
    </tr>
    <tr>
      <td>fields</td>
      <td>[SearchField]</td>
      <td>Specifies the fields to search for in the documents.</td>
    </tr>
    <tr>
      <td>tolerance</td>
      <td>SearchOption = \{ name: stemming \}</td>
      <td>Selects either Fuzzy or Stemming search option. By default, find will use stemming.</td>
    </tr>
  </tbody>
</table>

#### SearchField Input

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>String!</td>
      <td>The field name to search for in the document.</td>
    </tr>
    <tr>
      <td>weight</td>
      <td>Int</td>
      <td>The weight of the field, affecting the order of returned documents.</td>
    </tr>
  </tbody>
</table>

#### OrderBy Input

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>field</td>
      <td>String!</td>
      <td>The field to order the documents by.</td>
    </tr>
    <tr>
      <td>direction</td>
      <td>OrderByDirection</td>
      <td>The sort direction (asc or desc).</td>
    </tr>
     <tr>
      <td>unmappedType</td>
      <td>String</td>
      <td>Option to ignore unmapped type.</td>
    </tr>
  </tbody>
</table>

#### SearchOption Input

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>SearchOptionEnum!</td>
      <td>The search option name (fuzzy or stemming).</td>
    </tr>
    <tr>
      <td>fuzzyDistance</td>
      <td>Int</td>
      <td>Optional fuzzy distance. Applicable only if the fuzzy search option is selected. It represents the number of one-character changes needed to turn one term into another.</td>
    </tr>
  </tbody>
</table>

#### SearchResult Type

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>total</td>
      <td>Int</td>
      <td>The total number of documents returned.</td>
    </tr>
    <tr>
      <td>documents</td>
      <td>[SearchDocument]</td>
      <td>The list of documents matching the search.</td>
    </tr>
  </tbody>
</table>

#### SearchDocument Type

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>ID!</td>
      <td>The Elasticsearch ID of the document.</td>
    </tr>
    <tr>
      <td>score</td>
      <td>Float</td>
      <td>The Elasticsearch score of the document.</td>
    </tr>
    <tr>
      <td>sort</td>
      <td>[Float]</td>
      <td>Values used by Elasticsearch to sort the documents.</td>
    </tr>
    <tr>
      <td>data</td>
      <td>Map!</td>
      <td>The document data.</td>
    </tr>
  </tbody>
</table>

### Enumerations

#### SearchOptionEnum

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fuzzy</td>
      <td>The fuzzy search option.</td>
    </tr>
    <tr>
      <td>stemming</td>
      <td>The stemming search option.</td>
    </tr>
  </tbody>
</table>

#### OrderByDirection

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>asc</td>
      <td>Sort in ascending order.</td>
    </tr>
    <tr>
      <td>desc</td>
      <td>Sort in descending order.</td>
    </tr>
  </tbody>
</table>

## Basic Usage

To search for documents using the `find` query. Below, you can see examples:

### Find query basic example

```graphql
query FindSimpleQuery {
  find(query: "hello") {
    total
    documents {
      id
      score
      sort
      data
    }
  }
}
```

### Find query advance example

```graphql
query FindAdvanceQuery {
  find(
    query: "Austin"
    filter: "post_type:post,page"
    fields: [{ name: "title", weight: 2 }, { name: "description" }]
    orderBy: [{ field: "published_at", direction: desc, unmappedType: "date" }]
    limit: 100
    offset: 200
    tolerance: { name: fuzzy, fuzzyDistance: 2 }
  ) {
    total
    documents {
      id
      score
      sort
      data
    }
  }
}
```

You can write the same query with separated variables:

```graphql
query FindAdvanceQuery(
  $query: String!
  $filter: String
  $fields: [SearchField!]
  $orderBy: [OrderBy!]
  $limit: Int!
  $offset: Int!
  $tolerance: SearchOption!
) {
  find(
    query: $query
    filter: $filter
    fields: $fields
    orderBy: $orderBy
    limit: $limit
    offset: $offset
    tolerance: $tolerance
  ) {
    total
    documents {
      id
      score
      sort
      data
    }
  }
}
```

GraphQL Variables

```json
{
  "query": "Austin",
  "filter": "post_type:post,page",
  "orderBy": [
    { "field": "published_at", "direction": "desc", "unmappedType": "date" }
  ],
  "offset": 200,
  "limit": 100,
  "fields": [{ "name": "title", "weight": 2 }, { "name": "description" }],
  "tolerance": { "name": "fuzzy", "fuzzyDistance": 2 }
}
```

The query returns a `SearchResult` object that includes fields:

- `total` - an integer of the total documents matching the query. Independent to offset and limit arguments.
- `documents` - an array of search documents with fields:
  - `id` is unique id of the document in the index
  - `score` is a relevance score, which determines how closely each document matches the query
  - `sort` is an array associated with a document. The first element represents the sorting score or relevance score of the document. The second element represents a timestamp or any other value used for sorting.

## Advanced Usage

### Logical operators: AND, OR, NOT

Using `NOT` search operator:

```graphql
query FindNotQuery {
  find(query: "Austin NOT Minnesota") {
    total
    documents {
      id
      score
      sort
      data
    }
  }
}
```

Using `AND` search operator:

```graphql
query FindAndQuery {
  find(query: "New York AND Texas") {
    total
    documents {
      id
      score
      sort
      data
    }
  }
}
```

Using `OR` search operator:

```graphql
query FindOrQuery {
  find(query: "New York OR Texas") {
    total
    documents {
      id
      score
      sort
      data
    }
  }
}
```

### Search field value with greater, less or equal operator

```graphql
query FindRangeQuery {
  find(query: "seats.count:(>4 AND <20)") {
    total
    documents {
      id
      score
      sort
      data
    }
  }
}
```

The `seats.count` field has a value greater than 4 and lower than 20.

```graphql
query FindRangeQuery {
  find(query: "categories.name:Cars") {
    total
    documents {
      id
      score
      sort
      data
    }
  }
}
```

The `categories.name` field contains the value Cars.
