class encuesta{
    votoAF=0;
    votoEC=0;
    votoAB=0;
    pregunta="";

    Verrespuesta(votoAF,votoEC,votoAB,pregunta){
        const div= document.createElement('div');

        div.classList= 'container';
        div.innerHTML= `<h3>${pregunta}</h3>
                        <table class="table table-striped mt-2 mx-2">
                            <tr>
                                <td>Votos a favor: ${votoAF}</td>
                            </tr>
                            <tr>
                                <td>Votos en contra: ${votoEC}</td>
                            </tr>
                            <tr>
                                <td>Votos que se abstienen de responder: ${votoAB}</td>
                            </tr>
                        </table>
                        <hr>`
        return div;
    }
}