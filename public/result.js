
async function downloadData() {
    const response = await fetch("/results");

    // Przypisz wynik do zmiennej
    const users = await response.json();
    generateHTML(users)

}

downloadData()

function deleteUser(id) {
    console.log(id)


    fetch(`/results/${id}`, {
        method: "DELETE",
    }).then(() => { 
        downloadData()
        // Znajdujemy element o podanym id
        //const element = document.getElementById(id);
        // Usuwamy element z DOM-u
        //element.parentNode.removeChild(element);
    })
}

function generateHTML(users) {
    const html = `
    <img src="/duck.jpg" alt="Opis obrazu"style="width: 200px; height: 150px;">

    <h1>Wyniki:</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nick</th>
        <th>Age</th>
        <th>E-mail</th>
      </tr>
    </thead>
    <tbody>
      ${users.map((user) => `
        <tr id=${user.id}>
          <td>${user.id}</td>
          <td>${user.nick}</td>
          <td>${user.age}</td>
          <td>${user.email}</td>
          <td>
            <button onclick="deleteUser('${user.id}')">DELETE</button>
          </td>
        </tr>
      `)}
    </tbody>
  </table>
`;
    document.body.innerHTML = html;
}

