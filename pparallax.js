  $(function(){
    var $doc = $(document);
    var $half_h = $(".pp-half-height");
    var $full_h = $(".pp-full-height");
    var $plus_h = $(".pp-full-height-plus");
    var $sections = $(".pp-section");
    var $slow = $(".pp-section .pp-slow");
    var $fast = $(".pp-section .pp-fast");
    var $goup = $(".pp-section .pp-go-up");
    var $godown = $(".pp-section .pp-go-down");
    var $stay = $(".pp-section .pp-go-down");

    var resize_cb = function(){
      var viewport_h = window.innerHeight;
      $half_h.each(function(){
        var $t = $(this);
        var height_minus_percent = $t.attr('data-height-minus-percent');
        height_minus_percent = height_minus_percent ? height_minus_percent : 0;
        var height_minus_fixed   = $t.attr('data-height-minus');
        height_minus_fixed = height_minus_fixed ? height_minus_fixed : 0;
        var height_minus = (height_minus_percent * window.innerHeight / 100) + height_minus_fixed;
        $t.css({"height": (viewport_h/2) - height_minus});
      });
      $full_h.each(function(){
        var $t = $(this);
        var height_minus_percent = $t.attr('data-height-minus-percent');
        height_minus_percent = height_minus_percent ? height_minus_percent : 0;
        var height_minus_fixed   = $t.attr('data-height-minus');
        height_minus_fixed = height_minus_fixed ? height_minus_fixed : 0;
        var height_minus = (height_minus_percent * window.innerHeight / 100) + height_minus_fixed;
        $t.css({"height": viewport_h - height_minus});
      });
      $plus_h.each(function(){
        var $t = $(this);
        $t.css({"height": viewport_h*1.5});
      });
    };

    var section_onposition_cb = function(){
        var $t = $(this);
    }

    var scroll_section_cb = function(){
        var viewport_h = window.innerHeight;
        var viewport_w = window.innerWidth;

        var min = viewport_h - (viewport_h*1.5)
        var max = 0;

        var $t = $(this);
        var $section_y = $doc.scrollTop() - $t.offset().top;
        var $half_section_y = ($doc.scrollTop() - $t.offset().top)/2;
        if(Math.abs($section_y) <= viewport_h){
          var $slt  = $t.find(".pp-slowest");
          var $slr  = $t.find(".pp-slower");
          var $sl   = $t.find(".pp-slow");
          var $fa   = $t.find(".pp-fast");
          var $stst = $t.find(".pp-slowest-stay");
          var $sst  = $t.find(".pp-slow-stay");
          var $fst  = $t.find(".pp-fast-stay");
          var $gup  = $t.find(".pp-go-up");
          var $gdo  = $t.find(".pp-go-down");
          var $rtl  = $t.find(".pp-right-to-left");
          var $rtlslow = $t.find(".pp-right-to-left-slow");
          var $rtlslower = $t.find(".pp-right-to-left-slower");
          var $rtlslowerst = $t.find(".pp-right-to-left-slower-stay");
          var $rtlslowest = $t.find(".pp-right-to-left-slowest");
          var $rtlfast = $t.find(".pp-right-to-left-fast");
          var $rtlfaster = $t.find(".pp-right-to-left-faster");
          var $rtlfastest = $t.find(".pp-right-to-left-fastest");
          var $ltr  = $t.find(".pp-left-to-right");
          var $ltrslow    = $t.find(".pp-left-to-right-slow");
          var $ltrslower  = $t.find(".pp-left-to-right-slower");
          var $ltrslowerst = $t.find(".pp-left-to-right-slower-stay");
          var $ltrslowest = $t.find(".pp-left-to-right-slowest");
          var $ltrfast    = $t.find(".pp-left-to-right-fast");
          var $ltrfaster  = $t.find(".pp-left-to-right-faster");
          var $ltrfastest = $t.find(".pp-left-to-right-fastest");
          var $fi   = $t.find(".pp-fade-in");
          var $fo   = $t.find(".pp-fade-out");
          var $vc   = $t.find(".pp-vertical-center");
          var $vc2  = $t.find(".pp-vertical-center-2");
          $slt.css({"top": $section_y*0.8});
          $slr.css({"top": $section_y*0.72});
          $sl.css({"top": $section_y*0.5});
          $fa.css({"top": ($section_y*-0.5) - viewport_h * 0.5});
          $stst.css({"top": Math.max($half_section_y*0.8, $section_y)}); 
          $sst.css({"top": Math.max($half_section_y*0.5, $section_y)}); 
          $fst.css({"top": Math.max($half_section_y*-0.2, $section_y)});
          $vc.css({"top": Math.max(($t.height()-$vc.height())/2, 0)});
          $vc2.css({"top": Math.max(($t.height()-$vc2.height())/2, 0)});
          //$gup.css({"top": Math.max($half_section_y/2, $section_y)});
          //$gdo.css({"top": Math.max($half_section_y, $section_y)});
          $ltr.css({"left": $section_y*viewport_w*0.5/viewport_h});
          $ltrslow.css({"left": $section_y*viewport_w*0.3/viewport_h});
          $ltrslower.css({"left": $section_y*viewport_w*0.1/viewport_h});
          $ltrslowerst.css({"left": Math.min($section_y*viewport_w*0.1/viewport_h, 0)});
          $ltrslowest.css({"left": $section_y*viewport_w*0.05/viewport_h});
          $ltrfast.css({"left": $section_y*viewport_w*0.7/viewport_h});
          $ltrfaster.css({"left": $section_y*viewport_w*0.9/viewport_h});
          $ltrfastest.css({"left": $section_y*viewport_w*0.95/viewport_h});
          $rtl.css({"left": -$section_y*viewport_w*0.5/viewport_h});
          $rtlslow.css({"left": -$section_y*viewport_w*0.3/viewport_h});
          $rtlslower.css({"left": -$section_y*viewport_w*0.1/viewport_h});
          $rtlslowerst.css({"left": Math.max(-$section_y*viewport_w*0.1/viewport_h, 0)});
          $rtlslowest.css({"left": -$section_y*viewport_w*0.05/viewport_h});
          $rtlfast.css({"left": -$section_y*viewport_w*0.7/viewport_h});
          $rtlfaster.css({"left": -$section_y*viewport_w*0.9/viewport_h});
          $rtlfastest.css({"left": -$section_y*viewport_w*0.95/viewport_h});
          $fi.css({"opacity": 1+($section_y/viewport_h)});
          $fo.css({"opacity": 1-($section_y/viewport_h)*2});
          if(!$t.hasClass("pp-on-viewport")){
            $t.addClass("pp-on-viewport");
            var onentercb = $t.attr('data-pp-onenterviewport');
            if(onentercb){
              eval($t.attr('data-pp-onenterviewport')+";");
            }
          }
        } else {
          // la section está fuera de la vista
          //$t.find(".pp-move").css({"top": 0});
          //$t.find(".pp-background").css({"top": 0});
          if($t.hasClass("pp-on-viewport")){
            $t.removeClass("pp-on-viewport");
            var onexitcb = $t.attr('data-pp-onexitviewport');
            if(onexitcb){
              eval($t.attr('data-pp-onexitviewport')+";");
            }
          }
        }
    }
    var scroll_cb = function(ev){
      var viewport_h = window.innerHeight;
      $sections.each(scroll_section_cb);
      if(ev) ev.preventDefault();
    } 
    
    $(window).resize(resize_cb);
    $(document).scroll(scroll_cb);
    resize_cb();
    scroll_cb();
  });

function _throttle(delay, func){
  var throttle_timeout = false; 
    return function(){
        if(throttle_timeout){
        } else {
          throttle_timeout = setTimeout(function(){
            func();
            throttle_timeout = false;
          },delay); 
        }
      };
}
