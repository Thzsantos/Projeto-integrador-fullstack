import { useState } from "react";

import "../../styles/VerProdutos.css";

import mainCadeira from "../../assets/img/MainCadeira.svg";
import cadeira2 from "../../assets/img/MainCadeira2.svg";
import cadeira3 from "../../assets/img/MainCadeira3.svg";
import cadeira4 from "../../assets/img/MainCadeira4.svg";

const imagens = [
  mainCadeira,
  cadeira2,
  cadeira3,
  cadeira4
];

export default function VerProdutos() {

  const [imagemAtual, setImagemAtual] = useState(0);

  return (
    <main className="ver-produtos">

      <section className="produto-container">

        <div className="produto-galeria">

          <div className="produto-imagem">
            <img
              src={imagens[imagemAtual]}
              alt="Cadeira Presidente Brizza"
            />
          </div>

          <div className="produto-miniaturas">

            {imagens.map((imagem, index) => (
              <button
                key={index}
                className={imagemAtual === index ? "ativa" : ""}
                onClick={() => setImagemAtual(index)}
              >
                <img
                  src={imagem}
                  alt={`Visualização ${index + 1}`}
                />
              </button>
            ))}

          </div>

        </div>

        <div className="produto-informacoes">

          <h1>PRESIDENTE BRIZZA</h1>

          <p className="produto-subtitulo">
            Conforto e sofisticação para o seu dia dia no trabalho.
          </p>

          <div className="produto-ficha">

            <div>
              <strong>Referência:</strong>
              <span>10</span>
            </div>

            <div>
              <strong>Categoria:</strong>
              <span>Cadeiras Presidente</span>
            </div>

            <div>
              <strong>Cores disponíveis:</strong>
              <span>Sob consulta</span>
            </div>

            <div>
              <strong>Peso máximo:</strong>
              <span>150Kg</span>
            </div>

            <div>
              <strong>Revestimento:</strong>
              <span>Tela mech e tecido</span>
            </div>

            <div className="produto-descricao">

              <strong>Descrição técnica:</strong>

              <p>
                Rodízios: PA ou PU<br />
                Estrutura: Alumínio, Aço Cromado, Standard Diretor ou Itália<br />
                Mecanismo: Autocompensador, Relax, Back, Slider ou Syncron<br />
                Braços: Regulável, Regulável PU, Shift ou Shift PU<br />
                Encosto: Fixo ou Regulável<br />
                Apoio de cabeça: Opcional
              </p>

            </div>

          </div>

          <a
            className="produto-orcamento"
            href="mailto:contato@empresa.com?subject=Orçamento Presidente Brizza"
          >
            SOLICITAR ORÇAMENTO
          </a>

        </div>

      </section>

    </main>
  );
}