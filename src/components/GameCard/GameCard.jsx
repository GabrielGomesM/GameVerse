import "./GameCard.css";
function formatarData(data) {
  if (!data) return "Data não informada";
  const partes = data.split("-");
  if (partes.length !== 3) return data;
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
function GameCard({ jogo }) {
  const generos = jogo.genres.map((genero) => genero.name).join(", ");
  const plataformas = jogo.platforms.slice(0, 4);
  return (
    <article className="card">
      <div className="card-imagem">
        {jogo.background_image ? (
          <img src={jogo.background_image} alt={`Capa do jogo ${jogo.name}`} loading="lazy" />
        ) : (
          <div className="card-imagem-vazia">Sem imagem</div>
        )}
        <span className="card-nota">★ {jogo.rating ? jogo.rating.toFixed(1) : "—"}</span>
      </div>

      <div className="card-corpo">
        <h3 className="card-titulo">{jogo.name}</h3>
        <p className="card-linha">
          <strong>Lançamento:</strong> {formatarData(jogo.released)}
        </p>
        <p className="card-linha">
          <strong>Gênero:</strong> {generos || "Não informado"}
        </p>

        <div className="card-plataformas">
          {plataformas.length > 0 ? (
            plataformas.map((plataforma) => (
              <span key={plataforma.id} className="card-tag">
                {plataforma.name}
              </span>
            ))
          ) : (
            <span className="card-tag">Plataforma não informada</span>
          )}
        </div>
      </div>
    </article>
  );
}
export default GameCard;