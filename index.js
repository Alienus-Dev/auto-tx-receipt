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
    let mesesPagos = document.getElementById('mesesPagos').value.toUpperCase()
    let proprietario = document.getElementById('proprietario').value.toUpperCase()
    let cidade = document.getElementById('cidade').value.toUpperCase()
    let data = document.getElementById('data').value.toUpperCase()

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
      mesesPagos
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
          text: 'RECIBO DE CAUÇÃO',
          fontSize: 18,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        '\n',

        {
          text: `EU, ${PDF.getFormData().nomeLocador}, RECEBI DO SR. ${PDF.getFormData().nomeLocatario} A IMPORTÂNCIA DE R$: ${PDF.getFormData().valorRs} (${PDF.getFormData().valorPorExtenso}), REFERENTE A ${PDF.getFormData().mesesPagos == 'UM' ? `${PDF.getFormData().mesesPagos} MÊS` : `${PDF.getFormData().mesesPagos} MESES`} DE CAUÇÃO DO IMÓVEL LOCALIZADO NA ${PDF.getFormData().enderecoRuaOuAvenidaImovel} ${PDF.getFormData().enderecoImovel}, DO PROPRIETÁRIO: ${PDF.getFormData().proprietario}.`,
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