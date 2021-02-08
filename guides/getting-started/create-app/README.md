# Create Your First App

For our first app, we're going to use [Next.js](https://nextjs.org/docs/).

Create a new folder named `my-headless-app` and `cd` into the folder:

```bash
$ mkdir my-headless-app
$ cd my-headless-app
```

Initialize a Node app via `npm`:

```bash
$ npm init -y
```

Install the required dependencies for Next.js and TypeScript support:

```bash
$ npm i next react react-dom
$ npm i -D typescript @types/react @types/node
```

Open `package.json` and replace the `scripts` property with the following:

```text
"scripts": {
  "build": "next build",
  "dev": "next dev",
  "start": "next start -p 8080",
  "wpe-build": "next build"
},
```

Create a folder named `pages`. Next.js uses this folder to determine routes for your application.

```bash
$ mkdir pages
```

Create a simple React component in the file `./pages/index.tsx`:

```typescript
const Home = () => <h1>Hello, Headless!</h1>;

export default Home;
```

Start your development server to make sure everything is working correctly:

```bash
$ npm run dev
```

When you navigate to `http://localhost:3000`, you should see your app running!

Next, let's [deploy the app](/guides/getting-started/deploy-app) to the Headless Platform. :rocket:
