# Developer Workflow

Now that you have an app deployed to the platform, any changes you make to your branch will be automatically deployed. To try this out, let's make a change to the site.

Open `pages/index.tsx` and replace it with the following:

```tsx
const Home = () => (
  <h1>My First Deployed App on WP Engine's Headless Platform!</h1>
);

export default Home;
```

Save the file and then run:

```
git add .
git commit -m "updated site header"
git push
```

After a few minutes, your site will be updated on the URL listed when you run:

```
wpe alpha apps get APP_NAME
```

Remember, you can get your APP_NAME by listing your apps:

```
wpe alpha apps list
```
