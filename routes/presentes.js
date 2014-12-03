module.exports = function (app) {
    var presentes = app.controllers.presentes;
    app.get("/presentes", presentes.index);
    app.get("/comprar/:id", presentes.comprar);
    app.post("/presentes", presentes.incluir);
};