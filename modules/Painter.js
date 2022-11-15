class Painter {
  constructor(firstName, lastName, style) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.style = style;
    this.paintingsList = [];
  }
  set addPainting(painting) {
    this.paintingsList.push(painting);
  }
  get printHtml() {
    return `<h1>${this.firstName} ${this.lastName}</h1>
<h2>${this.style}</h2>
<ul>${this.paintingsList.map(
      (el) => `
    <li>
        Naam: <span>${el.name}</span><br>
        Canvas: <em>${el.size}</em><br>
        Prijs: <strong>${el.price.toLocaleString()} €</strong>
    </li>`
    )}
</ul>`;
  }
}

export default Painter;
