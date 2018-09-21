

$(window).load(function() {
   var files;
   //make ajax request for list of file links
   for(var i = 0; i < files.length; i++) {

      var s1 = '<div class="col-md-4 col-sm-6 portfolio-item architecture">'+
         '<a href="#portfolioModal10" class="portfolio-link" data-toggle="modal">'+
              '<div class="portfolio-hover">'+
                  '<div class="portfolio-hover-content">'+
                  '</div>'+
              '</div>'+
              '<img src="img/edinburgh_architecture.jpg" class="img-responsive" alt="">'+
          '</a>'+
      '</div>';
      var s2 = '<!-- Portfolio Modal 10 -->'+
      '<div class="portfolio-modal modal fade" id="portfolioModal10" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">'+
         '<div class="modal-dialog">'+
              '<div class="modal-content">'+
                  '<div class="close-modal" data-dismiss="modal">'+
                      '<div class="lr">'+
                          '<div class="rl">'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
                  '<div class="container">'+
                      '<div class="row">'+
                          '<div class="col-lg-8 col-lg-offset-2">'+
                              '<div class="modal-body">'+
                                 '<img class="img-responsive img-centered" src="img/edinburgh_architecture.jpg" alt="">'+
                              '</div>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
         '</div>'+
      '</div>';
      $(".gallary-thumbs").append(s1);
      $("#modals").append(s2);
   }

}
//add portfolio modals as well

)
