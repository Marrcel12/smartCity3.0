$SCRIPT_ROOT = {{ request.script_root|tojson|safe }};
$(document).ready(function(){
    function update_values() {
        $.getJSON(
            $SCRIPT_ROOT+"/update",
            function(data) {
                $(".places").text("Wolnych miejsc: "+data.wolne)
            });
    }
    // do a first call at load time
    update_values();
    // then repeat it every second
    window.setInterval(update_values, 500);
});