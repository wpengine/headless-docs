# Developer Workflow

Now that you have an app deployed to the platform, any changes that you make to your branch will be automatically deployed. To try this out, let's make a change to the site.

Open `pages/index.tsx`, and replace it with:

```tsx
const Home = () => (
  <h1>My First Deployed App on WP Engine's Headless Platform!</h1>
);

export default Home;
```

Save the file then run:

```
git add .
git commit -m "updated site header"
git push
```

After a few minutes, your site will be updated on the URL listed when you run:

```
wpe alpha apps get APP_ID
```

Remember, you can get your APP_ID by listing your apps:

```
wpe alpha apps list
```
