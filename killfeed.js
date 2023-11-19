$(function() {
    var tKillNames = ["zurly", "injectings"]; // add or remove "teammates"
    var ctKillNames = ["code", "stocks", "eth", "hahalarp", "zui"]; // add or remove "enemies"
    var weapons = ["ak47", "deagle", "awp" /*, "g3sg1", "m4a4"*/]; // add or remove images of weapons
    var $killFeedContainer = $('.kill-feed');
    var $killFeedElement = $('.kill-feed > div').hide();

    function handleKillFeed() {
        var $newFeedElement = $killFeedElement.clone();
        $newFeedElement.find('.weapons img:first-child').attr('src', './images/' + weapons[Math.floor(Math.random() * weapons.length)] + '.png'); //drawing a weapon
        $newFeedElement.find('.t').text(tKillNames[Math.floor(Math.random() * tKillNames.length)]); // drawing a "teammate"
        $newFeedElement.find('.ct').text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]); // drawing a "enemy"
        $killFeedContainer.append($newFeedElement.show().delay(2000).fadeOut(1000, function() { // drawing a container
            $(this).remove()
        }))
    }
    $(document).on("contextmenu", function(e) {
        e.preventDefault()
    });
    window.setInterval(handleKillFeed, 750)// time between kills
}); 
