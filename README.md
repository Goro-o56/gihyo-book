This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## styled-components
$ npm install styled-components
$ npm install --save-dev @types/styled-components

## ESLint
$ npm install --save-dev prettier eslint typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import


## Storybook
$ npx sb init
$ npm install --save-dev @storybook/addon-postcss tsconfig-paths-webpack-plugin @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/plugin-proposal-private-property-in-object tsconfig-paths-webpack-plugin @mdx-js/react
$ npm run storybook


## nodeでハマることがある
$ n ls-remote --all
$ sudo n version
あたりを駆使して乗り越えろ
16.14.0だとStorybookのビルド通ります ✋✋✋
<npm audit fix --force は全てが終わるのでやってはいけない>

## ReactHookForm
フォームのバリデーションに使う
npm install react-hook-form

depの警告がでるのでnpm audit fixしてみる
=>何も起きない 21個の爆弾を抱えながら進める

## swr
npm install swr

## ReactContentLoader

ローディングのプレースホルダーを作成できる
$ npm install react-content-loader
$ npm install --save-dev @types/react-content-loader

## Material Iconsの導入
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled