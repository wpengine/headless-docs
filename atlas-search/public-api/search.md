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
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>search</td>
      <td>Searches for documents in an index based on specific parameters.</td>
    </tr>
  </tbody>
</table>

#### Search Parameters

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
      <td>The search query.</td>
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
      <td>SearchOption = {}</td>
      <td>Selects either Fuzzy or Stemming search option. Can be provided later to override the global setting.</td>
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
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>query</td>
      <td>The search query itself. We search for documents containing the word 'Austin'.</td>
    </tr>
    <tr>
      <td>filter</td>
      <td>Additional filtering to apply to the search results. We search only for posts and page post_types.</td>
    </tr>
    <tr>
      <td>orderBy</td>
      <td>Order by name asc and, in case of a tie, date desc.</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>The number of results to skip for pagination. We asked to skip the first 200.</td>
    </tr>
    <tr>
      <td>limit</td>
      <td>The maximum number of results to return. We asked for 100.</td>
    </tr>
    <tr>
      <td>fields</td>
      <td>An array of objects specifying the fields to search for in the documents and their weights. Title has double the weight of description, so it will come first as a result.</td>
    </tr>
    <tr>
      <td>tolerance</td>
      <td>The search tolerance option, such as fuzzy search with a specified distance. We used fuzzy with distance 2.</td>
    </tr>
  </tbody>
</table>

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
