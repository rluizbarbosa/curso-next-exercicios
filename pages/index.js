import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
 
  return (
    <div className={styles.home}>
      <h1>Primeiro projeto do Curso de NextJs</h1>
      <p>Abaixo estão todos os links dos exercicios passados no modulo de Revisão react</p>
      <ul>
        <li>Basics
          <ul>
            <li><Link href={'basics/botao'}>Botão</Link></li>
            <li><Link href={'basics/componenteComFilho'}>ComponenteComFilho</Link></li>
            <li><Link href={'basics/fragment1'}>Fragment1</Link></li>
            <li><Link href={'basics/fragment2'}>Fragment2</Link></li>
          </ul>
        </li>
        <li>Classe
          <ul>
            <li><Link href={'classe/contador'}>Contador</Link></li>
          </ul>
        </li>
        <li>Comunicação
          <ul>
            <li><Link href={'comunicacao/direta'}>Direta</Link></li>
            <li><Link href={'comunicacao/indireta1'}>Indireta1</Link></li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li><Link href={'css/integracao1'}>Integracao1</Link></li>
            <li><Link href={'css/integracao2'}>Integracao2</Link></li>
            <li><Link href={'css/usandoEstilo'}>UsandoEstilo</Link></li>
          </ul>
        </li>
        <li>Estado
          <ul>
            <li><Link href={'estado/contador'}>Contador</Link></li>
            <li><Link href={'estado/formulario'}>Formulario</Link></li>
            <li><Link href={'estado/mega'}>Mega</Link></li>
            <li><Link href={'estado/mouse'}>Mouse</Link></li>
          </ul>
        </li>
        <li>Modulo
          <ul>
            <li><Link href={'modulo/teste'}>Teste</Link></li>
          </ul>
        </li>
        <li>Render
          <ul>
            <li><Link href={'render/condicional1'}>Condicional1</Link></li>
            <li><Link href={'render/condicional2'}>Condicional1</Link></li>
            <li><Link href={'render/repeticao1'}>Repeticao1</Link></li>
            <li><Link href={'render/repeticao2'}>Repeticao2</Link></li>
          </ul>
        </li>
        <li>Ts
          <ul>
            <li><Link href={'ts/exemplo'}>Exemplo</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
