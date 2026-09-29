import "./Sobre.css";
function Sobre() {
  return (
    <main className="sobre">
      <div className="container sobre-conteudo">
        <h1 className="sobre-titulo">Sobre o GameVerse</h1>

        <p>
          O GameVerse é uma página criada para explorar o universo dos games de uma forma simples,
          organizada e interativa. O projeto reúne informações sobre diversos jogos, permitindo que
          os usuários conheçam novos títulos, encontrem seus jogos favoritos e descubram detalhes
          importantes antes de escolher o que jogar.
        </p>
        <p>
          Através da plataforma, é possível pesquisar diferentes jogos e visualizar informações como
          nome, imagem, avaliação, data de lançamento, gêneros e plataformas disponíveis. Dessa
          forma, o usuário pode navegar pelo catálogo e conhecer uma grande variedade de
          experiências disponíveis no mundo dos games.
        </p>
        <p>
          A página foi desenvolvida pensando tanto em jogadores que já possuem seus títulos
          favoritos quanto em pessoas que estão procurando algo novo para jogar. A busca facilita a
          localização dos jogos, enquanto os cards organizam as informações de maneira visual e
          fácil de entender.
        </p>
        <p>
          O GameVerse também foi desenvolvido com uma interface moderna, limpa e responsiva,
          permitindo uma boa experiência de navegação em computadores, tablets e celulares. O design
          utiliza tons de roxo, branco e cores neutras para criar uma identidade visual relacionada
          ao universo dos games sem deixar a página visualmente carregada.
        </p>
        <p>
          As informações apresentadas são obtidas através de uma API pública de jogos, fazendo com
          que os dados sejam carregados dinamicamente. Isso permite que a aplicação trabalhe com uma
          grande quantidade de informações sem precisar cadastrar manualmente cada jogo.
        </p>
        <p>
          Mais do que apenas um catálogo, o GameVerse representa uma experiência de exploração. Seja
          para encontrar um jogo que você já conhece, descobrir um novo título ou simplesmente
          navegar pelo universo dos games, a proposta é tornar essa descoberta mais fácil, agradável
          e divertida.
        </p>

        <a className="sobre-destaque" href="/">
          <span>Explore. Pesquise. Descubra seu próximo jogo.</span>
          <span className="sobre-destaque-seta">→</span>
        </a>
      </div>
    </main>
  );
}
export default Sobre;