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
        answer.textContent = "Loading...";
        const post = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());
        const title = document.createElement('h3');
        const body = document.createElement('span');
        title.textContent = post.title;
        body.textContent = post.body;

        answer.innerHTML = "";
        answer.appendChild(title);
        answer.appendChild(body);
      })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
