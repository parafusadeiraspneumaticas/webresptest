$( document ).ready(function() {
    // Demo #1
    jQuery('#demo1').skdslider({
        delay: 5000,
        animationSpeed: 2000,
        showNextPrev: false,
        showPlayButton: false,
        autoSlide: true,
        animationType: 'fading'
    });

    jQuery('#responsive').change(function(){
        $('#responsive_wrapper').width(jQuery(this).val());
        $(window).trigger('resize');
    });
    
    // products
    $("#defaultOpenTab").click();
});

// show lateral menu
function openMenu(obj) {
    document.documentElement.classList.add('menu-ativo');
}

// hidden lateral menu
function closeMenu(obj) {
    document.documentElement.classList.remove('menu-ativo');
}

// Ao clicar na área cinza, o menu lateral será fechado
document.documentElement.onclick = function (event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};

function openTab(evt, tabName) {
    var i, detalhesProduto, aba;
    
    detalhesProduto = document.getElementsByClassName("detalhes-produto");
    for (i = 0; i < detalhesProduto.length; i++) {
        detalhesProduto[i].style.display = "none";
    }
    
    aba = document.getElementsByClassName("aba");
    for (i = 0; i < aba.length; i++) {
        aba[i].className = aba[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "inline-block";
    evt.currentTarget.className += " active";
}
