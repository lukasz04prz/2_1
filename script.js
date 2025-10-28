(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", async function () {
    answer.textContent = "Processing..."

    const post = await (await fetch('https://jsonplaceholder.typicode.com/posts', { headers: { "Content-Type": "application/json" },   method: "POST", body: JSON.stringify({ title: "...", body: "...", userId: 1 }) })).json();

    answer.innerHTML = `Dodano nowy post o ID = ${post.id}`;
      })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
