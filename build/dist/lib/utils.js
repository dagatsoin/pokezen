export var getIdFromUrl = function (url) { return url.match(new RegExp(/([^\/]+)\/?$/))[1]; };
export var normalize = function (query) { return query.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); };
//# sourceMappingURL=utils.js.map