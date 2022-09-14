# TypeScript Thursday: ReactQuery

TypeScript + ReactQuery workshop

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Workshop

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/` directory (except `pages/api`, see below) refers to pages in the we SPA. You can edit these to change the application.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Tip: In the bottom right corner of the application, there's a ReactQuery icon. These are the [ReactQuery DevTools](https://react-query-v3.tanstack.com/devtools) and are very helpful to observe the states of your API calls.

## Tasks

1. Utilize the `useGetPaginatedApplications` hook in `pages/application/index.tsx` and use the pagination hook to enable pagination of the results.
2. Impl. a similar query function and hook to support sorting by the `?sort=prop` query param, where `prop` can be one of `[namespace,name,state]`. Determin one of these to use.
   1. [OPTIONAL]: Impl. a user interface to be able to toggle which property to sort by.
3. Impl. the /errors page using ReactQuery to get the errors from the API. See the /applications page for inspiration.
4. Impl. the /dashboard page, which uses _both_ the applications and errors endpoint to show a summary of all available entities. Feel free to use pagination or sorting as you wish, or not at all.

## Resources

- In-depth discussion and explanation of ReactQuery's QueryContext: https://tkdodo.eu/blog/leveraging-the-query-function-context
