/* Interface i type mozna uzywac zamiennie, ale trzeba sie trzymac konsewentnie jednej wersji.
Interface jest w postaci obiektu i mozna stworzyc kilka o tej samej nazwie, ktore zostana polaczone
(mozna nadpisywac importowane).
 */
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
;
