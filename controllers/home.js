module.exports = function (app) {
    var HomeController = {
        index: function (req, res) {
            res.render("home");
        },
        entrar: function (req, res) {
            var lista = {
                noivo : req.body.noivo,
                noiva : req.body.noiva,
                presentes : []
            };
            req.session.lista = lista;
            res.redirect("/presentes");
        }
    };
    return HomeController;
};