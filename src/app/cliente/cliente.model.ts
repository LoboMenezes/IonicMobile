export class Cliente {
    _id: number;
    nome: string;
    email: string;
    pws: string;
    ativo: boolean;

    validar(confpws:string) {
        let erros:string = "";
        
            if(this.nome == ""){
                erros += "Nome em Branco. <br>";
            }   if(this.email ==""){
                erros += "Email em Branco. <br>"
                }   if(this.pws == ""){
                    erros += "Senha em Branco. <br>"
                } else if(this.pws != confpws){
                        erros += "A senha ta errada!.";
                }
                    if (erros != "")
                        throw erros;

                    return true;

    }
}
