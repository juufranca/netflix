let data_hora = new Date();
let dia_semana = data_hora.getDay();

    switch(dia_semana) {
        case 0: alert("Domingo dia de descanso merecido.");
            break;
                case 1: alert("Segunda ta muito longe.");
                break;
         case 2: alert("Calma ainda é terça.");
         break;
                case 3: alert("Estamos quase.");
                 break;
         case 4: alert("Não chegou ainda.");
         break;
                case 5: alert("Chegou a sexta-feira, isso é legal");
                break;
         case 6: ("Maravilha, sábado chegou");
         break;

                default: alert("Que semana longa");
    }