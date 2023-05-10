# Index documentation

### Overview

The index API includes two mutations for creating or updating a document, and deleting a document.

- The `index` mutation accepts a `DocumentInput` and returns a `DocumentMutationResponse`.
- The `delete` mutation accepts an `id` as a parameter and also returns a `DocumentMutationResponse`.

### Authentication

Clients calling the index API are required to add an authentication header with the valid authentication token.

```
Authorization: Token {ACCESS_TOKEN}
```

### Creating or Updating a Document

To create or update a document in the index using the mutation, you need to:

1. Use the `index` operation.
2. Provide a `DocumentInput` object as a parameter.
3. In the `DocumentInput` object, provide the necessary document data as a `JSON` object.
4. Provide a unique identifier for the document in the `id` field of the `DocumentInput` object. If no id is provided, one will be generated for the document.

Here’s an example mutation to create a new document:

```graphql
mutation {
  index(
    input: {
      data: {
        title: "New document title"
        body: "New body text for the document."
      }
    }
  ) {
    code
    success
    message
    document {
      id
      data
    }
  }
}
```

In this example, we’re creating a new document with a title and body text. The mutation returns a `DocumentMutationResponse` object that includes the `id` of the new document, as well as the `data`..

To update an existing document, you need to provide the `id` of the document you want to update in the `DocumentInput`object. Here’s an example mutation to update an existing document:

```graphql
mutation {
  index(
    input: {
      id: "my-document-id"
      data: {
        title: "Updated document title"
        body: "New body text for the document."
      }
    }
  ) {
    code
    success
    message
    document {
      id
      data
    }
  }
}
```

In this example, we’re updating an existing document with the `id` of `my-document-id”` We are mutating the title and body fields of the document. The mutation returns a `DocumentMutationResponse` object that includes the updated document’s `id` and `data`.

### Deleting a Document

To delete a document from the index, you need to:

1. Use the delete operation.
2. Provide the `id` of the document you want to delete.

Here’s an example mutation to delete a document:

```graphql
mutation {
  delete(id: "my-document-id") {
    code
    success
    message
    document {
      id
      data
    }
  }
}
```

We are deleting a document with the `id` of `"my-document-id"` The mutation returns a `DocumentMutationResponse` object that includes the `id`, `data` fields of the deleted document.
