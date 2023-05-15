# Index documentation

### Overview

The index API includes two mutations for creating or updating a document and deleting a document.

- The `index` mutation accepts a `DocumentInput` as a parameter and returns a `DocumentMutationResponse`.
- The `delete` mutation accepts an `id` as a parameter and returns a `DocumentMutationResponse`.

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
4. To ensure a document has a unique identifier in the `DocumentInput` object, follow these guidelines:
   1. The `id` field of the `DocumentInput` object should be used to provide a unique identifier for the document. This field is optional, allowing flexibility in case an identifier is not initially available.
   2. If an `id` is provided in the `DocumentInput` object, the system checks whether a document with that `id` already exists. If it does, the existing document is updated with the new data instead of creating a new document.
   3. In cases where no `id` is provided in the `DocumentInput` object, the system automatically generates a unique identifier for the document. This ensures that each document has a unique identifier, even if one is not explicitly provided.
      By following these guidelines, you can effectively handle document creation and updates, ensuring uniqueness of identifiers and appropriate handling based on the presence of an `id` in the `DocumentInput` object.
5. Optionally, you can include metadata by using the `meta` field. This allows you to provide additional information that will be logged on the server. Metadata can be helpful for analyzing and understanding the logs more effectively.

#### GraphQL Examples to Create or Update a Document

Here’s an example mutation to create a new document:

```graphql
mutation {
  index(
    input: {
      data: {
        title: "New document title"
        body: "New body text for the document."
      }
      meta: {
        system: "Atlas Search"
        action: "manual index"
        source: "atlasce.wpengine.com"
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

To create a new document with a provided `id` or update an existing document, you can use the index mutation. The behavior depends on whether a document with the provided id already exists:

- If a document with the provided `id` doesn't exist, a new document will be created with the specified `id`.
- If a document with the provided `id` already exists, the existing document will be updated with the new data.

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

In this example, we’re updating an existing document with the `id` of `my-document-id`. We are mutating the title and body fields of the document. The mutation returns a `DocumentMutationResponse` object that includes the `id` and `data` of the updated document.

The same behavior would occur even if the document did not already exist. In that case, it would be created with the provided `id` and the `DocumentMutationResponse` would include this `id`.

### Deleting a Document

To delete a document from the index, you need to:

1. Use the delete operation.
2. Provide the `id` of the document you want to delete.
3. Optionally provide metadata by using the `meta` field. This allows you to provide additional information that will be logged on the server. Including metadata can be helpful for analyzing and understanding the logs more effectively.

#### GraphQL Example to Delete a Document

Here’s an example mutation to delete a document:

```graphql
mutation {
  delete(
     id: "my-document-id",
     meta: {
        system: "Atlas Search",
        action: "reset-data",
        source: "atlasce.wpengine.com"
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

We are deleting a document with the `id` of `my-document-id` The mutation returns a `DocumentMutationResponse` object that includes the `id` and `data` fields of the deleted document.
