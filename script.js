
const usuarios = [
  { nome: "João Dias", cpf: "123.456.789-00", endereco: "Rua Itália, 345" },
  { nome: "Maria Oliveira", cpf: "234.567.890-11", endereco: "Rua França, 876" },
  { nome: "José Santos", cpf: "345.678.901-22", endereco: "Rua Canadá, 679" },
  { nome: "Júlia Costa", cpf: "456.789.012-33", endereco: "Rua Dinamarca, 121" },
  { nome: "Pedro Almeida", cpf: "567.890.123-44", endereco: "Rua Estônia, 211" },
  { nome: "Fernanda Pereira", cpf: "678.901.234-55", endereco: "Rua Brigadeiro, 333" },
  { nome: "Miguel Lima", cpf: "789.012.345-66", endereco: "Rua General Abreu, 444" },
  { nome: "Laura Martins", cpf: "890.123.456-77", endereco: "Rua Silva, 585" },
  { nome: "Gustavo Teixeira", cpf: "345.777.512-07", endereco: "Rua Jardim Japão, 777" }
];

function showModal(nome, cpf, endereco) {
  document.getElementById("modalNome").innerText = nome;
  document.getElementById("modalCpf").innerText = cpf;
  document.getElementById("modalEndereco").innerText = endereco;

  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}
 
var modal = document.getElementById("myModal");
var span = document.querySelector(".close");

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

window.onload = function() {
  const tableBody = document.querySelector("#userTable tbody");
  usuarios.map((usuario) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${usuario.nome}</td>
      <td>${usuario.cpf}</td>
      <td>${usuario.endereco}</td>
      <td>
        <button onclick="showModal('${usuario.nome}', '${usuario.cpf}', '${usuario.endereco}')">
          Ver Informações
        </button>
      </td>
    `;

    tableBody.appendChild(tr);
  });
};
