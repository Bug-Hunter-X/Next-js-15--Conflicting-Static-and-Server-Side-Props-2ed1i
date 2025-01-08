```javascript
// pages/index.js

// Choose either getServerSideProps OR getStaticProps, not both
export async function getServerSideProps(context) {
  // Fetch data based on context
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <div>Hello World {data && data.message}</div>
  );
}
```