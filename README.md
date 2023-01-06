# Exploring Next.js

## Live-site: [restapi-nextjs-explore.vercel.app](https://restapi-nextjs-explore.vercel.app/)

## What is learned/implemented so far:
### 1. Next.js is a framework of React.js which is created by Vercel.
### 2. It provides default routing, built-in CSS, Server Side Rendering (SSR), TypeScript support as well as all other react dependencies and features.
### 3. It is better for SEO because of SSR feature and component like <Head> that includes <meta> & <title> tags.
### 4. SSG vs SSR: SSG (Static Site Generation) helps to pre-render a page at compile time, which means a user won't have to wait for loading the page whereas SSR (Server Side Rendering) helps to pre-render a page on the server which is then loaded as per client request and also makes the load speed faster. For data fetching, there are 3 different functions in Next.js which are only used in the Page: `getStaticProps`, `getStaticPaths` and `getServerSideProps`.
### 5. For using default routing,
###### i) To create a JS-file inside a folder of the Page and for nested page, create a new folder inside the folder.
###### ii) To make a dynamic page, create a JS-file with squire brackets inside a folder of the Page, such as [dPage].js
### 6. Page and Component both are used in Next.js
### 7. Next.js app can be easily deployed to the Vercel.
