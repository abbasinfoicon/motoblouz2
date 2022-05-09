/*==
custom-jquery index
01. Slides Slideplay
02. catMenu-slider
==*/


/*=====================================================================
==========================  Slides Slideplay  =========================
========================================================================*/
/*if ($(".slide-play").length) {
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    var playing = true;
    var pauseButton = document.getElementById('pause');

    function pauseSlideshow() {
        pauseButton.innerHTML = '<i class="fa fa-play"></i>';
        playing = false;
        clearInterval(slideInterval);
    }

    function playSlideshow() {
        pauseButton.innerHTML = '<i class="fa fa-pause"></i>';
        playing = true;
        slideInterval = setInterval(nextSlide, 2000);
    }

    pauseButton.onclick = function () {
        if (playing) {
            pauseSlideshow();
        } else {
            playSlideshow();
        }
    };
}*/
// tooltip
$( "#discount_amount" ).keyup(function() {
    var input = document.getElementById('discount_amount'),
        lowerBound = 0,
        upperBound = $("#form_inventaire").find('input[name="amount"]').val();

    input.onkeyup = function(event) {
        event.preventDefault();

        var value = parseInt(input.value, 10),
            keyCode;


        if (value > upperBound) {
if($(".discount_amount_upper").find('.discount_amount_custom').length === 0){

    $("#discount_amount").after('<span class="invalid-feedback discount_amount_custom" role="alert">\n' +
        '                                                                    le prix promo ne peut pas être supérieur au prix de vente initial.\n' +
        '                                                                </span>');
}



            value = upperBound;
        } else if (value < lowerBound) {
            console.log("in");
            value = lowerBound;
        }else{
            if($(".discount_amount_upper").find('.discount_amount_custom').length > 0){
                // $("#discount_amount").after('');
                $("#discount_amount").next("span").remove();
            }

        }

        input.value = value;
    }
});




$( window ).load(function() {
    if($("#form_address").find('#postal_custom').length){

        var postal = document.getElementById('postal_custom');

        var city_adress = document.getElementById('city_adress');
        var options = { types: ['(regions)'],
            componentRestrictions: {
                country: 'fr'
            }
        }

        var autocomplete = new google.maps.places.Autocomplete(postal, options);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var location = autocomplete.getPlace();
            geocoder = new google.maps.Geocoder();
            // console.log(location['geometry'])
            lat = location['geometry']['location'].lat();
            lng = location['geometry']['location'].lng();
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({ 'latLng': latlng }, function (results) {

                for (i = 0; i < results.length; i++) {
                    for (var j = 0; j < results[i].address_components.length; j++) {
                        for (var k = 0; k < results[i].address_components[j].types.length; k++) {
                            // console.log(results[i].address_components[j].types);
                            if (results[i].address_components[j].types[k] == "postal_code") {
                                zipcode = results[i].address_components[j].short_name;
                                postal.value = zipcode;
                            }
                            if (results[i].address_components[j].types[k] == "locality") {
                                city = results[i].address_components[j].short_name;
                                city_adress.value = city;
                            }
                        }
                    }
                }
            });
        });
    }

    if($("#commande-add-address").find('#postal_custom').length){

        var postal = document.getElementById('postal_custom');

        var city_adress = document.getElementById('city_address');
        var options = { types: ['(regions)'],
            componentRestrictions: {
                country: 'fr'
            }
        }

        var autocomplete = new google.maps.places.Autocomplete(postal, options);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var location = autocomplete.getPlace();
            geocoder = new google.maps.Geocoder();
            // console.log(location['geometry'])
            lat = location['geometry']['location'].lat();
            lng = location['geometry']['location'].lng();
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({ 'latLng': latlng }, function (results) {

                for (i = 0; i < results.length; i++) {
                    for (var j = 0; j < results[i].address_components.length; j++) {
                        for (var k = 0; k < results[i].address_components[j].types.length; k++) {
                            // console.log(results[i].address_components[j].types);
                            if (results[i].address_components[j].types[k] == "postal_code") {
                                zipcode = results[i].address_components[j].short_name;
                                postal.value = zipcode;
                            }
                            if (results[i].address_components[j].types[k] == "locality") {
                                city = results[i].address_components[j].short_name;
                                city_adress.value = city;
                            }
                        }
                    }
                }
            });
        });
    }
});

// // add product page
$( window ).load(function() {
    if($("#form_inventaire").find('#address').length){
        var postal = document.getElementById('address');
        var city_adress = document.getElementById('city');
        var options = {
            types: ['(regions)'],
            componentRestrictions: {
                country: 'fr'
            }
        }

        var autocomplete = new google.maps.places.Autocomplete(postal, options);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var location = autocomplete.getPlace();
            geocoder = new google.maps.Geocoder();
            // console.log(location['geometry'])
            lat = location['geometry']['location'].lat();
            lng = location['geometry']['location'].lng();
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({'latLng': latlng}, function (results) {

                for (i = 0; i < results.length; i++) {
                    for (var j = 0; j < results[i].address_components.length; j++) {
                        for (var k = 0; k < results[i].address_components[j].types.length; k++) {
                            // console.log(results[i].address_components[j].types);
                            if (results[i].address_components[j].types[k] == "postal_code") {
                                zipcode = results[i].address_components[j].short_name;
                                postal.value = zipcode;
                            }
                            if (results[i].address_components[j].types[k] == "locality") {
                                city = results[i].address_components[j].short_name;
                                city_adress.value = city;
                            }
                        }
                    }
                }
            });
        });
    }
});


// add profile page
$( window ).load(function() {
    // alert($("#form_profile").find('#code_postal').length);
    if($("#form_profile").find('#code_postal').length){
        var postal = document.getElementById('code_postal');
        var city_adress = document.getElementById('city');
        var options = {
            types: ['(regions)'],
            componentRestrictions: {
                country: 'fr'
            }
        }

        var autocomplete = new google.maps.places.Autocomplete(postal, options);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var location = autocomplete.getPlace();
            geocoder = new google.maps.Geocoder();
            // console.log(location['geometry'])
            lat = location['geometry']['location'].lat();
            lng = location['geometry']['location'].lng();
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({'latLng': latlng}, function (results) {

                for (i = 0; i < results.length; i++) {
                    for (var j = 0; j < results[i].address_components.length; j++) {
                        for (var k = 0; k < results[i].address_components[j].types.length; k++) {
                            // console.log(results[i].address_components[j].types);
                            if (results[i].address_components[j].types[k] == "postal_code") {
                                zipcode = results[i].address_components[j].short_name;
                                postal.value = zipcode;
                            }
                            console.log(results[i].address_components[j].types[k]);
                            if (results[i].address_components[j].types[k] == "locality") {

                                city = results[i].address_components[j].short_name;
                                city_adress.value = city;
                            }
                        }
                    }
                }
            });
        });
    }
});
/*=====================================================================
==========================  catMenu-slider  =========================
========================================================================*/
$('#catMenu-slider').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: false,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<img src='/assets/img/left-yellow.png' class='right-cirle-icon'>", "<img src='/assets/img/right-yellow.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 4
        },
        1265: {
            items: 5
        }
    }
});


/*=====================================================================
==========================  home-slider  =========================
========================================================================*/

$('.controls .fa').click(function () {
    $(this).addClass("hide").siblings().removeClass('hide');
});


var owl = $('#home-slider');
owl.owlCarousel({
    autoplay: true,
    lazyLoad: true,
    items: 1,
    nav: false,
    loop: true,
    autoplayHoverPause: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
});

$('.fa-play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000]);
    console.log('play');
})
$('.fa-pause').on('click', function () {
    owl.trigger('stop.owl.autoplay');
    console.log('stop');
});

/*=====================================================================
==========================  online-carousel  =========================
========================================================================*/
$('#online-carousel').owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    navText: ["<img src='assets/img/left-circle.png' class='right-cirle-icon'>", "<img src='assets/img/right-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


/*=====================================================================
========================== Menu-owl carousel =========================
========================================================================*/
$('#menu-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 6000,
    smartSpeed: 700,
    nav: true,
    navText: ["<img src='/assets/img/mega-left-circle.png' class='right-cirle-icon'>", "<img src='/assets/img/mega-right-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


/*=====================================================================
========================== product-carousel Owl Carousel  =========================
========================================================================*/
$('#product-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: false,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    nav: true,
    navText: ["<img src='/assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='/assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 3
        },
        1265: {
            items: 4
        }
    }
});

/*=====================================================================
========================== Testimonials-user  =========================
========================================================================*/
$('#testimonials').owlCarousel({
    loop: true,
    rewind: true,
    autoplay: true,
    margin: 19,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
});

/*=====================================================================
========================== product-carousel Owl Carousel  =========================
========================================================================*/
$('#product-three').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: false,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    nav: true,
    navText: ["<img src='/assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='/assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 2
        },
        1265: {
            items: 3
        }
    }
});


/*=====================================================================
========================== product-carousel Owl Carousel  =========================
========================================================================*/
$('#product-four').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: false,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    nav: true,
    navText: ["<img src='assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 2
        },
        1265: {
            items: 3
        }
    }
});


/*=====================================================================
========================== product-carousel2 Owl Carousel  =========================
========================================================================*/
$('#product-carousel2').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: false,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7500,
    smartSpeed: 850,
    nav: true,
    navText: ["<img src='/assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='/assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 3
        },
        1265: {
            items: 4
        }
    }
});


/*=====================================================================
========================== explorer-carousel Owl Carousel  =========================
========================================================================*/
$('#explorer-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: false,
    margin: 10,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 8000,
    smartSpeed: 900,
    nav: true,
    navText: ["<img src='/assets/img/left-yellow-circle.png' class='right-cirle-icon'>", "<img src='/assets/img/right-yellow-circle.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        414: {
            items: 2
        },
        700: {
            items: 3
        },
        951: {
            items: 4
        },
        1265: {
            items: 6
        }
    }
});


/*=====================================================================
========================== foucs-addClass  =========================
========================================================================*/
$(document).ready(function () {

    $("#desktop-search").focus(function () {
        $('input[type="submit"]').css({'background-color': 'rgb(252, 103, 2)', 'z-index': '9999'});
        $('input[name="desktop_search"]').removeClass('colorChange').css('background-color','#fff');
        $('.rechercher').addClass('opS');
        // $('#searchResult').addClass('show');

    }).blur(function () {
        console.log("11");
        desktop_search_blur();
    });

    // make search dropdown clickable
    $("#searchResult-desktop").mouseover(function () {
        $("#desktop-search").unbind('blur');
    }).mouseout(function () {
        $("#desktop-search").bind('blur', function () {
            console.log("22");
            desktop_search_blur();
        });
    });

});

// desktop search blur
function desktop_search_blur() {
    $('.searchResult').removeClass('show');
    $('input[name="desktop_search"]').val('');
    $('input[name="desktop_search"]').addClass('colorChange');
    $('label[for="desktop-search"]').css('opcity', 'none');

    setTimeout(function () {
        $('input[type="submit"]').css({'background-color': 'transparent', 'z-index': '2'});
    }, 250);
    setTimeout(function () {
        $('input[name="desktop_search"]').css('background-color','transparent');
    }, 250);
}

/*=====================================================================
========================== OTP 4 DIGIT NO  =========================
========================================================================*/

$('.otp4no').keypress(function (e) {
    var arr = [];
    var kk = e.which;

    for (i = 48; i < 58; i++)
        arr.push(i);

    if (!(arr.indexOf(kk) >= 0))
        e.preventDefault();
});

/*=====================================================================
========================== Toltips Custom  =========================
========================================================================*/

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/*$(".fa-question-circle").click(function () {
    $(this).next('.toptip-hover').toggleClass('show');
});

$(".close-toltip").click(function () {
    $(this).parents('.toptip-hover').removeClass('show');
});

$(document).on('click', (e) => {
    console.log('id...', e.target.id);
    if (e.target.id != 'toltip-show-id' && e.target.id != 'icon-que' && e.target.id != 'p-id') {
        $("#toltip-show-id").removeClass('show');

        console.log('id', e.target.id);
        //console.log('class',e.target.class);
    }

});*/

$('.toltip').mouseenter(function () {
    $(this).addClass('arrow-bottom');
    $(this).next('.tooltip-custom').css('display', 'block');
});

$('.toltip').mouseleave(function () {
    $(this).removeClass('arrow-bottom');
    $(this).next('.tooltip-custom').css('display', 'none');
});

/*$(function () {
    if ($(".add-wishlist").length) {
        $('.whistlist-toltip').text('Supprimer de vos favoris');
    }
    if ($(".remove-wishlist").length) {
        $('.whistlist-toltip').text('Ajouter à vos favoris');
    }
});*/


$(document).ajaxComplete(function () {
    var whislist_text = $('.wishlist-toltip');

    if ($('.add-wishlist').length) {
        whislist_text.text('Ajouter à mes favoris');
    } else {
        whislist_text.text('Supprimer de mes favoris');

    }
    if ($('.remove-wishlist').length) {
        whislist_text.text('Supprimer de mes favoris');
    } else {
        whislist_text.text('Ajouter à mes favoris');

    }
});


$(function(){
    var clone_div = $('.clone-div').find('.row');

    // $(".dublicate-section").on('click', function(){
    //     clone_div.clone().insertAfter(".clone-div:last");
    // });

    $(".dublicate-section").bind("click", function () {

        var index = $("#container select").length + 1;

        //Clone the DropDownList
        var ddl = clone_div.clone();

        //Set the ID and Name
        ddl.attr("id", "equipement_motard_" + index);
        ddl.attr("name", "equipement_motard_" + index);


        ddl.attr("id", "pilote_tout_terrain_" + index);
        ddl.attr("name", "pilote_tout_terrain_" + index);

        //[OPTIONAL] Copy the selected value
        var selectedValue = $("#equipement_motard option:selected").val();
        var selectedValue1 = $("#pilote_tout_terrain option:selected").val();

        ddl.find("#equipement_motard").find("option[value = '" + selectedValue + "']").attr("selected", "selected");
        ddl.find("#pilote_tout_terrain").find("option[value = '" + selectedValue1 + "']").attr("selected", "selected");
        //Append to the DIV.
        $("#container").append(ddl);
        // $("#container").append("<br /><br />");
    });
});

/*=====================================================================
========================== right-social icon  =========================
========================================================================*/
$(".right-sideIcon .fa-angle-double-left").click(function () {
    $(".right-sideIcon").toggleClass("slide");
    $(this).toggleClass("fa-angle-double-right");
});


/*=====================================================================
========================== Mega MENU  =========================
========================================================================*/
$(document).ready(function () {
    $(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation()
    });


});

// dropdown-menu?

(function ($) {
    $(document).ready(function () {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });
})(jQuery);

/*=====================================================================
==========================  Middle-Office-Factures-Toggle  =========================
========================================================================*/

$(function () {
    $(".detail-facture").on("click", function () {
        $(this).siblings().not().next().removeClass('open').prev().removeClass('open');
        $(this).toggleClass("open").next(".detail-facture-show").toggleClass("open");

        if ($(!this).hasClass('open')) {
            $(this).next(".detail-facture-show").removeClass("open");
        }
    });

    $(".close-tr").on("click", function () {
        $(".detail-facture").removeClass("open").next(".detail-facture-show").addClass('close-animation');

        /* $(".detail-facture-show").delay(500).removeClass("open").removeClass('close-animation');*/

        setTimeout(function () {
            $(".detail-facture-show").removeClass("open").removeClass('close-animation');
        }, 500);

    });
});

/*=====================================================================
========================== Mega MENU  =========================
========================================================================*/

/*if ($(window).width() < 767) {
    $('.catMenu-slider .category-list').addClass('dropdown-menu');
} else {
    $('.catMenu-slider .category-list').removeClass('dropdown-menu');
}*/


/*=====================================================================
==========================  File Upload Image  =========================
========================================================================*/

$(function () {
    $('.file-input').on('change', function (e) {
        var file = this.files[0];
        $('#file-list-' + $(this).data('id')).append('<span class="imgTitle-show"><img src="/assets/img/close-red-small.jpg" class="img-close">' + file.name + '</span>')
    });


    $('.file-input-button').on('click', function (e) {
        $('#file-input-' + $(this).data('id')).trigger('click');
    });


    $(".onClick").click(function () {
        $(this).addClass('show');
    });

    $(".imgTitle-show").click(function () {
        $(this).parent('.img-close').prepend();
    });

    $('input[id="color"]').blur(function () {
        if (!$(this).val()) {
            $(".onClick").addClass('show');
        }
    });

    $('input[id="color"]').focus(function () {
        $(".onClick").removeClass('show');
    });

    // if ($(".bootstrap-tagsinput").find("span").length == 0) {
    //     alert("asdfsad");
    // }

});


if ($(".one-custom").find("span").length == 0) {
    $(".one-custom").find(".equal-hight-custom").removeClass("equal-hight");
}


/*=====================================================================
========================== messages-input-filed =========================
========================================================================*/

updateList = function () {
    var input = document.getElementById('file-input');
    var output = document.getElementById('fileList');

    output.innerHTML = '<ul>';
    for (var i = 0; i < input.files.length; ++i) {
        output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
    }
    output.innerHTML += '</ul>';
}

//
// var objDiv = document.getElementById("parentDiv");
// objDiv.scrollTop = objDiv.scrollHeight;


/*=====================================================================
========================== equal-height  =========================
========================================================================*/
$(document).ready(function () {
    $('.owl-carousel').each(function () {
        var highestBox = 0;

        $(this).find('.card-body').each(function () {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });

        $(this).find('.card-body').height(highestBox);
    });
});

// sous-categorie->card-body equal height
$(document).ready(function () {
    $('.sous-categorie').each(function () {
        var highestBox = 0;

        $(this).find('.card-body').each(function () {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });

        $(this).find('.card-body').height(highestBox);
    });
});


/*=====================================================================
========================== Product-Slider-with-zoom  =========================
========================================================================*/
$(document).ready(function () {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<img src="/assets/img/left-yellow-circle.png" class="right-cirle-icon">',
                '<img src="/assets/img/right-yellow-circle.png" class="right-cirle-icon">'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 3,
            dots: true,
            nav: true,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 3,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
});


/*=====================================================================
========================== reSize change image menu  =========================
========================================================================*/
var imgPath = 'assets/img/';

$(window).resize(function () {
    if ($(window).width() < 767) {
        $('.incSize .bars-icon').attr("src", imgPath + "menu-icon-black.png");
    }
    if ($(window).width() > 767) {
        $('.incSize .bars-icon').attr("src", imgPath + "menu-icon.png");
    }
});

$(document).ready(function () {
    // register form date of birth
    $(document).on('keypress', '[id*=dob]', function () {
        var number = $(this).val();
        // alert(number.length);
        if (number.length == 2) {
            $(this).val($(this).val() + '-');
        } else if (number.length == 5) {
            $(this).val($(this).val() + '-');
        }
    });

    $(document).on('keypress', '[id*=card-number]', function (e) {
        //onlyNumberKey(e);

        $(this).val(function (index, value) {
            return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
        });
    });

    $(document).on('keypress', '[id*=card-exp-date]', function () {
        var value = $(this).val();
        if (value.length == 2) {
            $(this).val($(this).val() + '/');
        }
    });


    // register for field validation
    $(document).on("keyup", '.maxi_ten', function (e) {
        if ($(this).attr("name") == "phone") {
            console.log("phone");
            var b = /[0]{1}[0-9]{9}/g;
            var e = $(this).val();
            var c = $(this).val().length;
            console.log(c);
            if (c > 10) {
                $(this).val(e.substring(0, 10))
            }
        } else if ($(this).attr("name") == "code_postal") {
            console.log("code_postal");
            var b1 = /[0]{1}[0-9]{9}/g;
            var e1 = $(this).val();
            var c1 = $(this).val().length;
            console.log(c1);
            if (c1 > 5) {
                $(this).val(e1.substring(0, 5))
            }
        } else if ($(this).attr("name") == "postcode") {
            console.log("postcode");
            var b1 = /[0]{1}[0-9]{9}/g;
            var e1 = $(this).val();
            var c1 = $(this).val().length;
            console.log(c1);
            if (c1 > 5) {
                $(this).val(e1.substring(0, 5))
            }
        } else if ($(this).attr("name") == "dob") {
            console.log("dob");
            var b2 = /[0]{1}[0-9]{9}/g;
            var e2 = $(this).val();
            var c2 = $(this).val().length;
            console.log(c2);
            if (c2 > 10) {
                $(this).val(e2.substring(0, 10))
            }
        } else if ($(this).attr("name") == "number") {
            console.log("card number");
            var b2 = /[0]{1}[0-9]{9}/g;
            var e2 = $(this).val();
            var c2 = $(this).val().length;
            console.log(c2);
            if (c2 > 19) {
                $(this).val(e2.substring(0, 19))
            }
        } else if ($(this).attr("name") == "exp_date") {
            console.log("card number");
            var b2 = /[0]{1}[0-9]{9}/g;
            var e2 = $(this).val();
            var c2 = $(this).val().length;
            console.log(c2);
            if (c2 > 5) {
                $(this).val(e2.substring(0, 5))
            }
        } else if ($(this).attr("name") == "cvc") {

            console.log("card cvc number");
            var b2 = /^[0-9]*$/g;
            var e2 = $(this).val();
            var c2 = $(this).val().length;
            console.log(c2);
            if (c2 > 3) {
                $(this).val(e2.substring(0, 3))
            }
        }

    });


});

// only number key
function onlyNumberKey(evt) {
    // Only ASCII charactar in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {

        return false;
    }

    return true;
}

// only number, space key
function onlyNumberSpaceKey(evt) {
    // Only ASCII charactar in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        if (ASCIICode == 32) {
            return true;
        }

        return false;
    }

    return true;
}

// only number, forward slash key
function onlyNumberForwardSlashKey(evt) {
    // Only ASCII charactar in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        if (ASCIICode == 47) {
            return true;
        }

        return false;
    }

    return true;
}


/*=====================================================================
========================== Product-Slider-with-zoom  =========================
========================================================================*/
$(document).ready(function () {
    var bigimage = $(".big");
    var thumbs = $("#thumbs");
    var bigPopup = $("#big-popup");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: true,
            dots: false,
            //loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<img src="/assets/img/left-yellow-circle.png" class="right-cirle-icon">',
                '<img src="/assets/img/right-yellow-circle.png" class="right-cirle-icon">'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 3,
            dots: true,
            nav: true,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 3,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });

    // replace p tag with pre
    $('p#prod-desc').replaceWith(function () {
        return $("<pre />").append($(this).contents());
    });
});


/*=====================================================================
========================== validerScroll-top  =========================
========================================================================*/

/*$(function() {
    $('.validerScroll-top').bind('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
});*/

function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
}


