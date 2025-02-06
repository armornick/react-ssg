A tiny experiment to see how you can manually use React as a static site generator with hydration.

ESbuild is used to compile the client-side scripts and styles.

References:

-   https://react.dev/reference/react-dom/server/renderToPipeableStream
-   https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-an-entire-document
-   https://esbuild.github.io

## Thoughts so far (2025-02-06)

Using React as static site generator is actually pretty easy. I would defintely use it for
generating simple HTML/CSS only sites. Hydrating is also a lot simpler than I thought.

However, my example here requires that you manually add every page to the PAGE_MAP so it
gets tedious really fast, probably. As such, I would defintely use a real framework if
my site had any complex interactivity. I could also generate the client-side script
automatically but that sounds like a huge pain to maintain.
