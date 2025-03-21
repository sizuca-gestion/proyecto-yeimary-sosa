"use client";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { formatDate, getAge } from "@/src/utils";

// Global config
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export async function generateCVPdf(data, session) {
  try {
    const pdf = pdfMake.createPdf({
      pageMargins: 0,
      content: [
        {
          image: `data:image/jpeg;base64,${data.avatar}?${Date.now()}`,
          width: 157,
          height: 157,
          absolutePosition: { x: 25, y: 45 },
        },
        {
          fillColor: "#f4d643",
          table: {
            widths: [410],
            body: [
              [
                {
                  text: data.name,
                  style: "h3",
                  margin: [40, 20, 20, 0],
                },
              ],
              [
                {
                  text: data.profession,
                  style: "h4",
                  margin: [40, 0, 20, 40],
                },
              ],
            ],
          },
          absolutePosition: { x: 180, y: 65 },
          layout: {
            vLineWidth: () => 0,
            hLineWidth: () => 0,
          },
        },
        {
          table: {
            widths: ["35%", "65%"],
            heights: 200,
            body: [
              [
                {
                  text: ``,
                  fillColor: "#2a2d37",
                },
                {
                  text: ``,
                  fillColor: "#ffffff",
                },
              ],
            ],
          },
          layout: {
            vLineWidth: () => 0,
            hLineWidth: () => 0,
          },
        },
        {
          table: {
            widths: ["35%", "65%"],
            heights: 641.995,
            body: [
              [
                {
                  margin: 15,
                  fillColor: "#2a2d37",
                  table: {
                    widths: ["100%"],
                    body: [
                      [
                        {
                          text: `Instrucción: ${data.education_level}`,
                          color: "white",
                        },
                      ],
                      [
                        {
                          text: `Edad: ${getAge(data.birth_date)}`,
                          color: "white",
                        },
                      ],
                      [
                        {
                          text: session.user.email,
                          color: "white",
                        },
                      ],
                      [
                        {
                          text: `C.I. ${data.national_id}`,
                          color: "white",
                        },
                      ],
                      [
                        {
                          text: data.address,
                          color: "white",
                        },
                      ],
                      [
                        {
                          text: "Habilidades",
                          style: "h4",
                          border: [false, false, false, true],
                          bold: true,
                          color: "white",
                          marginTop: 15,
                        },
                      ],
                      [
                        {
                          text: data.summary,
                          color: "white",
                          marginTop: 15,
                        },
                      ],
                      [
                        {
                          text: "Áreas de interés",
                          style: "h4",
                          border: [false, false, false, true],
                          bold: true,
                          color: "white",
                          marginTop: 15,
                        },
                      ],
                      ...data.area_of_interest.map((area, index) => [
                        {
                          text: `• ${area}`,
                          color: "white",
                          marginTop: index === 0 ? 15 : 0,
                        },
                      ]),
                    ],
                  },
                  layout: {
                    vLineWidth: () => 0,
                    hLineWidth: (rowIndex) =>
                      [6, 8].includes(rowIndex) ? 2 : 0,
                    hLineColor: (rowIndex) =>
                      [6, 8].includes(rowIndex) ? "#ffffff" : undefined,
                  },
                },
                {
                  margin: 15,
                  table: {
                    widths: ["100%"],
                    body: [
                      [
                        {
                          text: "Experiencia",
                          style: "h4",
                          border: [false, false, false, true],
                          bold: true,
                        },
                      ],
                      ...data.experience
                        .slice(0, 3)
                        .map((experience) => {
                          return [
                            [
                              {
                                marginTop: 15,
                                text: `${formatDate(
                                  experience.start_date,
                                  "MMM YYY"
                                ).toUpperCase()} - ${formatDate(
                                  experience.end_date,
                                  "MMM YYY"
                                ).toUpperCase()}`,
                                style: "secondary",
                              },
                            ],
                            [
                              {
                                text: `${experience.company} | ${experience.location}`,
                                style: "secondary",
                              },
                            ],
                            [
                              {
                                text: experience.position,
                                style: "h5",
                                bold: true,
                              },
                            ],
                            [
                              {
                                text: experience.description,
                                style: "secondary",
                              },
                            ],
                          ];
                        })
                        .flat(),
                      [
                        {
                          text: "Certificaciones",
                          style: "h4",
                          border: [false, false, false, true],
                          bold: true,
                          marginTop: 10,
                        },
                      ],
                      ...data.certifications
                        .slice(0, 3)
                        .map((certifications) => {
                          return [
                            [
                              {
                                marginTop: 15,
                                text: `${formatDate(
                                  certifications.start_date,
                                  "MMM YYY"
                                ).toUpperCase()} (${
                                  certifications.duration
                                } horas)`,
                                style: "secondary",
                              },
                            ],
                            [
                              {
                                text: `${certifications.issuer}`,
                                style: "secondary",
                              },
                            ],
                            [
                              {
                                text: certifications.description,
                                style: "secondary",
                              },
                            ],
                          ];
                        })
                        .flat(),
                    ],
                  },
                  layout: {
                    vLineWidth: () => 0,
                    hLineWidth: (rowIndex) => {
                      return rowIndex === 1 ||
                        rowIndex ===
                          data.experience.slice(0, 3).flat().length * 4 + 2
                        ? 2
                        : 0;
                    },
                    hLineColor: (rowIndex) => {
                      return rowIndex === 1 ||
                        rowIndex ===
                          data.experience.slice(0, 3).flat().length * 4 + 2
                        ? "#f4d643"
                        : undefined;
                    },
                  },
                },
              ],
            ],
          },
          layout: {
            vLineWidth: () => 0,
            hLineWidth: () => 0,
          },
          pageBreak: "after",
        },
        {
          table: {
            widths: ["100%"],
            heights: 641.995,
            body: [
              [
                {
                  margin: 15,
                  table: {
                    widths: ["100%"],
                    body: [
                      [
                        {
                          text: "Datos Adicionales",
                          style: "h4",
                          border: [false, false, false, true],
                          bold: true,
                        },
                      ],
                      [
                        {
                          text: "¿Realizas actividades de voluntariado? Menciónalas",
                          bold: true,
                          marginTop: 10,
                        },
                      ],
                      [
                        {
                          text: `${data.has_relative_working}`,
                          style: "secondary",
                          marginTop: 10,
                        },
                      ],
                      [
                        {
                          text: "¿Tienes negocio propio? Menciona de qué se trata",
                          bold: true,
                          marginTop: 10,
                        },
                      ],
                      [
                        {
                          text: `${data.has_commercial_relationship}`,
                          style: "secondary",
                          marginTop: 10,
                        },
                      ],
                      [
                        {
                          text: `¿Usted tiene algún familiar o amigo trabajando dentro de la empresa? Especifique nombre y cargo`,
                          bold: true,
                          marginTop: 10,
                        },
                      ],
                      [
                        {
                          text: `${data.has_volunteered}`,
                          style: "secondary",
                          marginTop: 10,
                        },
                      ],
                      [
                        {
                          text: `¿Tú o algún familiar mantiene relaciones comerciales (como proveedor o cliente) con SIZUCA? Especifique cuál`,
                          bold: true,
                          marginTop: 10,
                        },
                      ],
                      [
                        {
                          text: `${data.has_own_business}`,
                          style: "secondary",
                          marginTop: 10,
                        },
                      ],
                    ],
                  },
                  layout: {
                    vLineWidth: () => 0,
                    hLineWidth: (rowIndex) => {
                      return rowIndex === 1 ||
                        rowIndex ===
                          data.experience.slice(0, 3).flat().length * 4 + 2
                        ? 2
                        : 0;
                    },
                    hLineColor: (rowIndex) => {
                      return rowIndex === 1 ||
                        rowIndex ===
                          data.experience.slice(0, 3).flat().length * 4 + 2
                        ? "#f4d643"
                        : undefined;
                    },
                  },
                },
              ],
            ],
          },
          layout: {
            vLineWidth: () => 0,
            hLineWidth: () => 0,
          },
        },
      ],
      styles: {
        h3: {
          fontSize: 24,
        },
        h4: {
          fontSize: 18,
        },
        h5: {
          fontSize: 14,
        },
        faMail: {
          font: "FontAwesomeMailIcon",
        },
        secondary: {
          color: "#666666",
        },
      },
    });
    const filename = `CV-${data.name}.pdf`;

    pdf.download(filename);
  } catch (error) {
    console.error(error);
  }
}
