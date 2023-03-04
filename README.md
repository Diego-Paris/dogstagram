# NextNest

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

---

# Notes

## Generated the frontend(NextJS) using the following commands

```bash
npm install --save-dev @nrwl/next
nx g @nrwl/next:app frontend
```

## Generated the backend(NestJS) using the following commands

```bash
npm install --save-dev @nrwl/nest
nx g @nrwl/nest:app backend
```

## How to run both apps for development

```bash
nx serve frontend
nx serve backend
```

## How to run apps for production

```bash
nx serve frontend --prod
nx serve backend --prod
```

## How to auto format all apps

```bash
nx format:check     # returns all un-formatted files, doesn't format
nx format:write     # returns all unformatted files AND formats them
```

## How to lint both apps

```bash
nx lint frontend
nx lint backend
```

## How to test both apps

```bash
nx test frontend
nx test backend
```

## How to add resource to the nestjs backend

```bash
nx g @nrwl/nest:resource users --project=backend    # add --dry-run to see changes without writing to disk

# IMPORTANT:
# For some reason, generating the users resource works as expected, EXCEPT it does not
# automatically import the UsersModule into the AppModule. You will have to do this manually
# or else it will not work. Use the UsersModule as an example for future resources.

```
