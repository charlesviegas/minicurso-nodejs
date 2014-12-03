module.exports = function (app) {
    var PresentesController = {
        index: function (req, res) {
            res.render("presentes", {presentes: req.session.lista.presentes});
        },
        incluir: function (req, res) {
            var lista = req.session.lista;
            var presente = {
                nome: req.body.nome,
                valor: req.body.valor
            };
            lista.presentes.push(presente);
            res.redirect("/presentes");
        },
        comprar: function (req, res) {
            var id = req.params.id;
            req.session.lista.presentes[id].comprado = true;
            res.redirect("/presentes");
        }
    };
    return PresentesController;
};