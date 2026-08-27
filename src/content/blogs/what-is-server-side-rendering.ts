import { type Blog } from "./types";

const post: Blog = {
  slug: "what-is-server-side-rendering",
  title: "What is SSR, SSG, ISR in Next.js. React Server side components",
  desc: "React has some issues with SEO as it just bundles the whole javascript code and send it to the client.To overcome this nextjs comes with solution of server side rendering. Next.js renders the whole page server side then sends to the client due to which search engine bots can easily crawl that webpage and it helps in the seo.",
  category: "next js",
  image: "/blogs/what-is-server-side-rendering.png",
  createdAt: "2023-08-01T18:15:15.921Z",
  updatedAt: "2023-08-31T06:50:10.237Z",
  content: `<p>React is a popular and powerful javascript library which helps developers to create single page applications. But it has some issues with SEO as it just bundles the whole javascript code and send it to the client. then client executes that javascript and renders the web page. Drawback over here is when crawl bots try to crawl these pages they find unexecuted javascript code which is of no use. Which affects the ranking of that website</p><p></p><p>To overcome this nextjs comes with solution of server side rendering (Not only next.js but remix also offers similar features). Next.js renders the whole page server side then sends to the client due to which search engine bots can easily crawl that webpage and it helps in the seo.</p><p></p><h2>SSR: Server Side Rendering</h2><p>To overcome this nextjs comes with solution of server side rendering (Not only next.js but remix also offers similar features). Next.js renders the whole page server side then sends to the client due to which search engine bots can easily crawl that webpage and it helps in the seo as bot can see rendered HTML page.</p><p></p><img src="/blogs/what-is-server-side-rendering-body-1.png"><p>Inside next.js page component you can export a function called <em>getServerSideProps. </em>In this function you can query database in request time and pass this data in form of props to the page component which saves the client side data fetching time. In <em>getServerSideProps </em>you get a context object which provides request object. You can get the Query parameters, headers and cookies with this object.</p><p>This becomes useful when you have some data which is publically available and you want to show it to every user with minimum delay. Because this data can be cached easily which also reduces database queries.</p><p></p><blockquote><p>Pro Tip: Use SSR when the data gets frequently modified.</p></blockquote><p></p><p><strong>Example Use Case: </strong>Let's Suppose you want to show a blogpost, you can just take the requested slug from context object and fetch the blogpost on server-side then you can generate a html page with this data and send it back to the user. So unlike react here bots can see rendered HTML page instead of some javascript.</p><p></p><pre><code>export default function Page({ data }) {
  return &lt;pre&gt;{data}&lt;/pre&gt;
}

export const getServerSideProps = async (context) =&gt; {
  const res = await &lt;Query your database&gt;
  const data = await res.json()
  return { props: { data } }
}</code></pre><p></p><h2>SSG: Static Site Generation</h2><p>In server-side rendering on every request (if cache miss) server requests the data from the database. But considering the previous use case of blogs website, there is a high chance that the content of the blog is not going to change so it will again and again query same data. Solution for this is Static Site Generation.</p><p>In Static Site Generation a page is rendered on the build time. When we run <em>next build </em>it fetches the data and renders the static page. This page is served over CDN for faster delivery.</p><p>In next.js you can export a function called <em>getStaticProps </em>which works same as getServerSideProps just it runs only one time that too when its build phase.</p><pre><code class="language-javascript">export const getStaticProps = async () =&gt; {
  const res = await &lt;Query your database&gt;
  const data = await res.json()
  return { props: { data } }
}</code></pre><p></p><p>But what if we have to generate multiple static pages based on the query params or our paths are depends on some external data. we can solve this issue with <em>getStaticPaths. </em>Which is used with <em>getStaticProps </em>which help to fetch the data and <em>getStaticPaths will decide for which paths we have to fetch the data</em>.</p><pre><code class="language-javascript">export async function getStaticPaths() {
  // Get the paths you want to pre-render based on posts
  const paths = posts.map((post) =&gt; ({
    params: { id: post.id },
  }))
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}</code></pre><p></p><blockquote><p>Pro Tip: Use this when the data is stale and hardly it is going to change in future.</p></blockquote><p></p><p><strong>Example Use Case: </strong>In Blog Website, Documentations or Any kind of data which you can pre render before user requests it.</p><p></p><h2>ISR: Incremental Static Regeneration</h2><p>With SSG we can create static pages expecting that the data is never going to change. But what if the data changes are we going to rebuild the entire application? well we can do that but it is not a good way to handle it. This problem can be solved using Incremental Static Regeneration.</p><p></p><p><strong>Solution 1: </strong>You can regenerate that page in a particular time interval.</p><pre><code class="language-javascript">export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()
 
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}</code></pre><p></p><p>It solves the problem but not that efficiently. Considering we have to change the data immediately (Updating the availability of ecommerce item) this method will fail. Also we are still making much requests to the database than required.</p><blockquote><p>It is useful when you have to cache and fetch data periodically. like leaderboard section which updates after every day (GFG).</p></blockquote><p></p><p><strong>Solution 2: </strong>With On-Demand Revalidation</p><p>You can create an API endpoint which is accessible by you only, which will call below method.</p><pre><code class="language-javascript">res.revalidate('/blogs/post');</code></pre><p></p><p>Or,</p><p>It's another use case will be for Ecommerce Websites. If you have updated a price of a product you can revalidate that specific product page immediately without any delay in the api which you are calling and will save some extra queries for you.</p><p></p>`,
};

export default post;
