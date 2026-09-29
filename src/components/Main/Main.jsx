import { useEffect, useState } from "react";
import "./Main.css";
import GameCard from "../GameCard/GameCard";
import Loading from "../Loading/Loading";
import SearchBar from "../SearchBar/SearchBar";
import { buscarJogos } from "../Services/api";
function Main() {
  const [jogos, setJogos] = useState([]);
  const [termo, setTermo] = useState("");
  const [termoBuscado, setTermoBuscado] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  useEffect(() => {
    let ativo = true;
    async function carregar() {
      setCarregando(true);
      setErro(false);
      try {
        const resultado = await buscarJogos(termoBuscado);
        if (ativo) setJogos(resultado);
      } catch {
        if (ativo) {
          setJogos([]);
          setErro(true);
        }
      } finally {
        if (ativo) setCarregando(false);
      }
    }
    carregar();
    return () => {
      ativo = false;
    };
  }, [termoBuscado]);
  function handleBuscar() {
    setTermoBuscado(termo);
  }
  function handleLimpar() {
    setTermo("");
    setTermoBuscado("");
  }
  return (
    <main className="main">
      <section className="hero">
        <div className="container">
          
          <h1 className="hero-titulo">Explore o universo dos games</h1>
          <p className="hero-descricao">
            Pesquise títulos, veja notas, datas de lançamento, gêneros e plataformas de milhares de
            jogos.
          </p>

          <SearchBar
            valor={termo}
            onChange={setTermo}
            onBuscar={handleBuscar}
            onLimpar={handleLimpar}
          />
        </div>
      </section>

      <section className="catalogo container" id="catalogo">
        <div className="catalogo-cabecalho">
          <h2>{termoBuscado ? `Resultados para "${termoBuscado}"` : "Jogos populares"}</h2>
          {!carregando && !erro && <span className="catalogo-total">{jogos.length} jogos</span>}
        </div>

        {carregando && <Loading />}

        {!carregando && erro && (
          <p className="mensagem mensagem-erro">Não foi possível carregar os jogos.</p>
        )}

        {!carregando && !erro && jogos.length === 0 && (
          <p className="mensagem">Nenhum jogo encontrado.</p>
        )}

        {!carregando && !erro && jogos.length > 0 && (
          <div className="catalogo-grade">
            {jogos.map((jogo) => (
              <GameCard key={jogo.id} jogo={jogo} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
export default Main;