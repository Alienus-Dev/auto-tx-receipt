const PDF = {
  font: {
    calibri: pdfMake.fonts = {
      Calibri: {
        normal: 'calibri.ttf',
        bold: 'calibri-bold.ttf',
        italics: 'calibri-italic.ttf',
        bolditalics: 'calibri-bold-italic.ttf',
      }
    }
  },

  getFormData: () => {
    let nomeLocador = document.getElementById('nomeLocador').value.toUpperCase()
    let nomeLocatario = document.getElementById('nomeLocatario').value.toUpperCase()
    let enderecoImovel = document.getElementById('enderecoImovel').value.toUpperCase()
    let valorRs = document.getElementById('valorRs').value.toUpperCase()
    let valorPorExtenso = document.getElementById('valorPorExtenso').value.toUpperCase()
    let proprietario = document.getElementById('proprietario').value.toUpperCase()
    let cidade = document.getElementById('cidade').value.toUpperCase()
    let data = document.getElementById('data').value.toUpperCase()
    let cpfLocador = document.getElementById('cpfLocador').value.toUpperCase()
    let rgLocador = document.getElementById('rgLocador').value.toUpperCase()
    let cpfLocatario = document.getElementById('cpfLocatario').value.toUpperCase()
    let rgLocatario = document.getElementById('rgLocatario').value.toUpperCase()

    if (document.getElementById('ruaImovel').selected) {
      enderecoRuaOuAvenidaImovel = 'RUA: '
    } else {
      enderecoRuaOuAvenidaImovel = 'AVENIDA: '
    }

    return {
      nomeLocador,
      nomeLocatario,
      enderecoImovel,
      valorRs,
      valorPorExtenso,
      proprietario,
      cidade,
      enderecoRuaOuAvenidaImovel,
      data,
      cpfLocador,
      rgLocador,
      cpfLocatario,
      rgLocatario
    }
  }
}

const createPDF = () => {
  submit.onclick = () => {
    const PDFRecibo = {
      content: [
        {
          image: 'logoAldaBrito.png',
          width: 240,
          alignment: 'center',
          margin: [0, 0, 0, 0],
        },
        {
          text: 'RECIBO DE ALUGUEL',
          fontSize: 18,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        '\n',

        {
          text: `EU, ${PDF.getFormData().nomeLocador}, REGISTRADO(A) NO CPF: ${PDF.getFormData().cpfLocador} E RG: ${PDF.getFormData().rgLocador}, RECEBI DO SR.(A) ${PDF.getFormData().nomeLocatario} REGISTRADO(A) NO CPF: ${PDF.getFormData().cpfLocatario} E RG: ${PDF.getFormData().rgLocatario}, A IMPORTÂNCIA DE R$: ${PDF.getFormData().valorRs} (${PDF.getFormData().valorPorExtenso}), DO IMÓVEL LOCALIZADO NA ${PDF.getFormData().enderecoRuaOuAvenidaImovel} ${PDF.getFormData().enderecoImovel}, DO PROPRIETÁRIO(A): ${PDF.getFormData().proprietario}.`,
        },
        '\n', '\n',

        {
          text: `${PDF.getFormData().cidade}, ${PDF.getFormData().data}`,
          alignment: 'center',
        },
        '\n',

        {
          text: `___________________________________\n${PDF.getFormData().nomeLocador}`,
          alignment: 'center',
        }
      ],

      defaultStyle: {
        font: 'Calibri',
        fontSize: 15,
      },
    }

    pdfMake.createPdf(PDFRecibo).open()
  }
}