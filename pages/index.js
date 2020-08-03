import Layout from "../components/layout";

function HomePage() {
  return (
    <Layout>
      <h1>Welcome to Next.js baby!</h1>
      <p className="how">How are you?</p>
      <style jsx>{`
        h1 {
          background-color: skyblue;
          color: black;
        }
        .how {
          color: purple;
        }
      `}</style>

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

export default HomePage;
