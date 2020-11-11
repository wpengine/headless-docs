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
By running this command, you can also see current status of your build.


Remember, you can get your APP_NAME by listing your apps:

```
wpe alpha apps list
```


If you want to see standard output / error logs for you app, type:
```
wpe alpha logs get -a APP_NAME -e ENV_ID
```
You can get the environment ID by running ```wpe alpha apps get APP_NAME``` in the CLI.


If you want to delete your environment, run:
```
wpe alpha envs delete ENV_ID -a APP_NAME
```

When you re-run your URL, site should no longer be visible (changes might take few seconds to apply).
