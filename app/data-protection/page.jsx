"use client";
import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

function DataProtectionPage() {
  return (
    <Container>
      <Stack paddingY={3} spacing={2}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          PROTECCIÓN DE DATOS
        </Typography>

        <Typography variant="h4" color="primary">
          ¿Cuál es el compromiso de mi organización con respecto a la protección
          de datos personales?
        </Typography>

        <Typography lineHeight="1.75rem">
          El buen funcionamiento de un Canal de Denuncias consiste en la
          confidencialidad de todas las informaciones obtenidas. Reiteramos que
          el objetivo del canal es investigar posibles conductas antiéticas y,
          de esta forma, garantizar un ambiente seguro y profesional para la
          manifestación de la información, con anonimato y confidencialidad
          garantizados. Por lo tanto, todas las informaciones son protegidas y
          cualquier información personal proporcionado se tratará de acuerdo con
          la legislación vigente.
        </Typography>

        <Typography variant="h4" color="primary">
          ¿Qué son datos personales?
        </Typography>

        <Typography lineHeight="1.75rem">
          De acuerdo con la ley, se consideran datos personales a cualquier
          información relativa a una persona individual identificada o
          identificable. Por ejemplo: un nombre, un número de identificación o a
          elementos específicos de su identidad física, fisiológica, psíquica,
          económica, cultural o social.
        </Typography>

        <Typography lineHeight="1.75rem">
          El objetivo del canal no es obtener informaciones personales, sin
          embargo, debido a la naturaleza de la denuncia, eso puede suceder. En
          este caso, todas las informaciones serán protegidas y tratadas de
          acuerdo con la ley.
        </Typography>

        <Typography variant="h4" color="primary">
          ¿Qué información debo incluir en mi relato?
        </Typography>

        <Typography lineHeight="1.75rem">
          Usted debe incluir en su relato toda la información necesaria para el
          recuento objetivo del caso, detallando la situación, cuándo, cómo y
          dónde ocurrió, y quiénes son las personas involucradas. Además, la
          información sobre testigos y evidencias / pruebas que pueden obtenerse
          es valiosa y debe ser informada.
          <br />
          Usted no debe incluir en su relato cualquier detalle de su vida
          personal o de los involucrados (como por ejemplo, detalles sobre el
          estado de salud, orientación sexual, elección religiosa, entre otros),
          a menos que sea necesaria para la comprensión y la comprensión el
          análisis del caso.
        </Typography>

        <Typography variant="h4" color="primary">
          ¿Quién tendrá acceso a mi relato o mis datos?
        </Typography>

        <Typography lineHeight="1.75rem">
          Las informaciones registradas en el canal son recibidas por una
          empresa independiente y especializada, Aliant, asegurando el sigilo
          absoluto y el tratamiento adecuado de cada situación por la alta
          dirección de su organización, sin conflictos de intereses.
          <br />
          Gerdau garantiza su confidencialidad, para que el tratamiento de la
          denuncia ocurra preservando su identidad. Únicamente en caso de
          detección ilícita, sus datos pueden ser comunicados a terceros (Jueces
          y tribunales, fuerzas de seguridad o administración pública), para la
          protección rigurosa de los intereses públicos.
          <br />
          Aliant y su organización se ajustan a la legislación sobre protección
          de datos personales.
        </Typography>

        <Typography variant="h4" color="primary">
          ¿Qué se hará con mi relato y cuándo será excluido?
        </Typography>

        <Typography lineHeight="1.75rem">
          Las informaciones de las denuncias presentadas a la GDPR se almacena
          hasta que se haya concluido el proceso de escrutado y deliberación
          sobre el caso, observándose aún plazos y exigencias legales
          específicas.
        </Typography>

        <Typography lineHeight="1.75rem">
          Sólo la información consolidada, utilizada para la generación de
          estadísticas de la operación, se mantiene por tiempo indefinido.
        </Typography>

        <Typography variant="h4" color="primary">
          ¿Cuál es mi deber?
        </Typography>

        <Typography lineHeight="1.75rem">
          Su deber es utilizar este canal con buenas inteciones y registrar
          informaciones verdaderas, presentadas con riqueza de detalles y
          soporte de evidencias, siempre que sea posible.
        </Typography>

        <Typography variant="h4" color="primary">
          ¿Cuáles son mis derechos?
        </Typography>

        <Typography lineHeight="1.75rem">
          • Derecho a ser excluido: Si se desea, puede solicitar que su
          información personal sea excluida física y lógicamente de las bases de
          datos del Canal. Si desea solicitar la exclusión de información sobre
          algún registro que haya hecho, por favor, acceda al campo "Acompañar
          relato" presente en este sitio, informe su protocolo y un resumen de
          la situación que desea excluir.
        </Typography>

        <Typography>
          • Derecho a ser excluido: Si se desea, puede solicitar que su
          información personal sea excluida física y lógicamente de las bases de
          datos del Canal. Si desea solicitar la exclusión de información sobre
          algún registro que haya hecho, por favor, acceda al campo "Acompañar
          relato" presente en este sitio, informe su protocolo y un resumen de
          la situación que desea excluir.
        </Typography>

        <Typography>
          • Derecho a la transparencia: Si se desea, puede solicitar información
          acerca del procesamiento y almacenamiento de sus datos, incluyendo:
          tiempo de retención, datos de contacto del responsable por los datos
          personales de la organización, justificación para mantener el dato
          personal almacenado.
        </Typography>

        <Typography>
          Esta solicitud puede ser hecha directamente al responsable de los
          datos personales en su organización (Oficial de Protección de Datos /
          Data Privacy Officer), o vía el menú "Acompañar relato" de este sitio
          (consulte su protocolo y en el campo de observaciones registre su
          solicitud de información).
        </Typography>

        <Typography>
          Reiteramos que las informaciones registradas en el Canal son
          recibidas, verificadas y analizadas de forma exenta, sigilosa y sin
          conflictos de interés. Se observan diversos cuidados para preservar la
          privacidad de denunciantes y denunciados.
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button
            component={Link}
            href="/incidents/add"
            variant="contained"
            color="primary"
          >
            Registrar Incidente
          </Button>

          <Button component={Link} href="/" variant="contained" color="primary">
            Volver al Inicio
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default DataProtectionPage;
