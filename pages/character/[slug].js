import Layout from "../../components/layout";
import Head from "next/head";
import unfetch from "isomorphic-fetch";
import slug from "slug";

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Character</title>
      </Head>
      <div>
        <h1>{character.name}</h1>
      </div>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await unfetch("https://rickandmortyapi.com/api/character/");
  const data = await response.json();

  return { 
    paths: data.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //console.log(params); //{ slug: 'abadango-cluster-princess-6' }
  const id = params.slug.split('-').slice(-1)[0]; //splite gerek yoktu
  const response = await unfetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return {
    props: {
      character: data,
    },
  };
}

export default CharacterDetail;
