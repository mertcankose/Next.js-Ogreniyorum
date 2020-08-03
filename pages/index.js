import Layout from "../components/layout";
import unfetch from "isomorphic-fetch";
import Link from "next/link";
import slug from 'slug';

function HomePage({ characters }) {
  return (
    <Layout>
      <h1>RİCK AND MORTY!</h1>
      <p className="how">Are you ready?</p>
      <style jsx>{`
        h1 {
          background-color: skyblue;
          color: black;
        }
        .how {
          color: black;
        }
      `}</style>

      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link href="/character/[slug]" as={`/character/${slug(character.name)}-${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      {/*
      {// only body of the index page}
      <style global jsx>{`
        html {
          color:deepskyblue;
        }
        body {
          background-color: yellow;
        }
      `}</style>
        */}
    </Layout>
  );
}

export async function getStaticProps() {
  //data fetch
  const response = await unfetch("https://rickandmortyapi.com/api/character/");
  const data = await response.json();
  //console.log(data);
  return {
    props: {
      characters: data,
    },
  };
}

export default HomePage;
