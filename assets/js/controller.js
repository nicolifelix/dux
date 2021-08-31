/*
 * Projeto: DUX LP
 * Desenvolvimento: LAB2B
 */

var attrController = $('main[data-controller]').attr('data-controller');

var Controller = {
    getController: function () {
        if ($('main[data-controller]').length > 0) {
            eval('Controller.' + attrController + '();');
        }
    },
    global: function(){
        Util.corousel();
        Util.aosEfect();
    },

};

jQuery(document).ready(function ($) {
    Controller.global();
});

(console.info || console.log).call(console, "%c<Dev by 🧪 LAB2B Team/>", "color: MediumVioletRed ; font-weight: bold;");
