# Prompthesy

I Ching readings with a conversational interpretation layer. Built on Next.js 15 (app directory), HeroUI v2, Tailwind CSS and Prisma (Postgres).

## Local development

Requirements: Node.js 20+, Docker.

```bash
cp .env.example .env   # points at the local Postgres below
npm install            # also runs `prisma generate`
npm run db:up          # Postgres 16 in Docker on localhost:5433
npm run db:deploy      # apply migrations
npm run db:seed        # trigrams, hexagrams, lines
npm run dev            # http://localhost:3000
```

Useful scripts:

| Script | What it does |
| --- | --- |
| `npm run db:migrate` | Create/apply a migration after changing `prisma/schema.prisma` |
| `npm run db:reset` | Drop the local DB, re-apply migrations and re-seed |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:down` | Stop the Postgres container (data is kept in a Docker volume) |
| `npm test` | Unit tests (Vitest) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint with `--fix` |

---

This project started from the Next.js & HeroUI template. This is a template for creating applications using Next.js 15 (app directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/heroui/next-app-template)

## Technologies Used

- [Next.js 15](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/heroui-inc/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
