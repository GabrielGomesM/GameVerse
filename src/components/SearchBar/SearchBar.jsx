import "./SearchBar.css";
function SearchBar({ valor, onChange, onBuscar, onLimpar }) {
  return (
    <form
      id="busca"
      className="busca"
      onSubmit={(evento) => {
        evento.preventDefault();
        onBuscar();
      }}
    >
      <div className="busca-campo">
        <span className="busca-icone" aria-hidden="true">
          🔎
        </span>
        <input
          type="search"
          value={valor}
          placeholder="Pesquisar jogos..."
          aria-label="Pesquisar jogos"
          onChange={(evento) => onChange(evento.target.value)}
        />
      </div>

      <button type="submit" className="botao botao-principal">
        Pesquisar
      </button>

      {valor.length > 0 && (
        <button type="button" className="botao botao-secundario" onClick={onLimpar}>
          Limpar
        </button>
      )}
    </form>
  );
}
export default SearchBar;