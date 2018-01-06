
Template.layout.onRendered(function nav (){
    $('.button-collapse').sideNav({
        closeOnClick: true
    }); // http://materializecss.com/side-nav.html
});

Template.layout.rendered = function() {
    this.$().dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    });
    $(document).ready(function () {
        $.getJSON("http://jsonip.com/?callback=?", function (data) {
            console.log(data);
            tab = [];
            tab.push(data.ip);
            UserID.insert(tab);

        });

    });
    function vst(){
        alert (UserID.find().count());

    }

};