# NextNest

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

# Important!!

## Remember to use Node Version 16

# Todos:

---

## Automatic Swagger API Documentation

Visit the API's documentation at [localhost:3333/api/swagger](http://localhost:3333/api/swagger)

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

## Used this article to create a postgres database with pgadmin inside of docker compose

[Run PostgreSQL and pgAdmin in docker for local development using docker compose](https://belowthemalt.com/2021/06/09/run-postgresql-and-pgadmin-in-docker-for-local-development-using-docker-compose/)

---

# Prisma

## Prisma has issues with segmentation faults, so I had to downgrade from node v18 to node v16

[Check out this open github issue here](https://github.com/prisma/prisma/issues/10649)

## command to run migrations based on the schema inside of the prisma folder

we write dev so it is dev only

```bash
npx prisma migrate dev --preview-feature
```

## Use Prisma Studio as GUI for viewing and managing database

```bash
npx prisma studio
```

## Generate the prisma client to use it in your code

Run this command after every change done to prisma models

```bash
npx prisma generate
```
