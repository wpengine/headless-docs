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

In this example, we’re creating a new document with a title and body text. The mutation returns a `DocumentMutationResponse` object that includes the `id` of the new document, as well as the `data`.

To create a new document with a provided id or update an existing document, you can use the index mutation. The behavior depends on whether a document with the provided id already exists:

- If a document with the provided id doesn't exist, a new document will be created with the specified id.
- If a document with the provided id already exists, the existing document will be updated with the new data.

To create a new document with a provided `id` or update an existing document, you need to provide the `id` of the document you want to update in the `DocumentInput`object. Here’s an example mutation to update an existing document:

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

In this example, we’re updating an existing document with the `id` of `my-document-id”` We are mutating the title and body fields of the document. The mutation returns a `DocumentMutationResponse` object that includes the updated document’s `id` and `data`. The exact
same behaviour would have happened if the document didn't exist ( so it would have created with the provided `id` and then return this `id` in the response) 

In this example, we are updating an existing document with the `id` `my-document-id`. We are modifying the title and body fields of the document. The mutation returns a `DocumentMutationResponse` object, which contains the `id` and `data` of the updated document. 
The same behavior applies even if the document does not already exist. In that case, it would be created with the provided `id` and the `DocumentMutationResponse` would include this `id`.

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
