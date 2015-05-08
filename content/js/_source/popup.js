

        // PopUp open function
        $('[data-popup-open]').on('click', function (e) {
            $('.popup-overlay').removeClass('hidden');
            $('.popup-overlay').addClass('visible');

            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').removeClass('hidden');
            $('[data-popup="' + targeted_popup_class + '"]').addClass('visible');

            e.preventDefault();
        });

        // PopUp close function
        $('.popup-overlay , .close').click(function () {
            $('.popup-overlay').removeClass('visible');
            $('.popup-overlay').addClass('hidden');
            $('.popup').removeClass('visible');
            $('.popup').addClass('hidden');
        });


        $('[data-url]').click(function () {
            // add loading image to div
            $('#ajaxloader').html('<img src="http://preloaders.net/preloaders/362/Tube%20pressure.gif" />');

            // run ajax request
            var ajaxurl = $(this).data('url')
            $.ajax({
                type: 'GET',
                dataType: 'html',
                url: ajaxurl,
                success: function (html) {
                    $('#ajaxloader').html(html);
                }
            });
        });
