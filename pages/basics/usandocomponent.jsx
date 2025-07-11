import Titulo from '../../components/Titulo';

export default function usandoComponent(){
    return (
        <>
            <Titulo 
                primario ="Pagina de cadastro" 
                secundario="incluir, alterar e excluir coisas!" />
            <Titulo 
                primario ="Pagina de cadastro" 
                secundario="incluir, alterar e excluir coisas!"
                pequeno={true} />
            <Titulo 
                primario ="Pagina de cadastro" 
                secundario="incluir, alterar e excluir coisas!"
                pequeno />
        </> 
    )
}