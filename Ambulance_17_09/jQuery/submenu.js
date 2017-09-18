
(function($){
    $(document).ready(function(){

        var w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


        $(".main-list").click(function(){

            $(document).ready(function(){

                        var leftPositionParent = $(this).find(".sublist:visible").offset().left;
                        var widthParent = $(this).find(".sublist:visible").width();

                        if((leftPositionParent + widthParent) > w){
                            var delta = w - (leftPositionParent + widthParent);
                            $(this).find(".sublist:visible").offset({left: leftPositionParent + delta-10});
                            arr.unshift(leftPositionParent);
                        }

            });

        });

        $("ul.dropdown-menu [data-toggle=dropdown]").on("click",function(event){

            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');


            $(document).ready(function(){

                var leftPosition = $(this).find(".subsublist:visible").offset().left;
                var widthElement = $(this).find(".subsublist:visible").width();
                var leftPositionParent = $(this).find(".subsublist:visible").parent().parent().offset().left;

                if((leftPosition + widthElement) > w){

                    var delta = w - (leftPosition + widthElement);
                    $(this).find(".subsublist:visible").parent().parent().offset({left: leftPositionParent + delta-3});
                    $(this).find(".subsublist:visible").offset({left: leftPosition + delta-3});
                    if($(this).find(".subsublist:visible").parent().parent().offset().left < 0){
                        $(this).find(".subsublist:visible").parent().parent().offset({left: 0});
                        $(this).find(".subsublist:visible").offset({left: 200});
                    }
                }
            });

        });

       $(window).resize(function(){
           var changeWidth;
           if((changeWidth>w)||((changeWidth<w)){
                   location.reload();
           }
        });
    });
})(jQuery);
