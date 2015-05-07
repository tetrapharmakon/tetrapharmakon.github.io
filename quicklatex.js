$(function() {
  var preamble = $('.preamble').first().text();
  $('.latex').each(function(){
    var formula = $(this).text();

      if(formula!='') {

        var qlQuery = 'formula=' + encodeURIComponent(formula)
                    + '&fsize='  + '19px'
                    + '&fcolor=' + '000000'
                    + '&out='    + '2';
        if (preamble!='')
          qlQuery += '&preamble=' + encodeURIComponent(preamble);
        qlQuery += "&errors=1";      
        //qlQuery += '&rnd='+Math.random()*100;

        var yqlQuery = "q="
          + encodeURIComponent( 'select * from htmlpost where '
            + "url='http://www.quicklatex.com/latex3.f/' "
            + 'and postdata="' + qlQuery + '" '
            + 'and xpath="/"' )
          + '&format=json'
          + '&env=' + encodeURIComponent( 'store://datatables.org/alltableswithkeys' );

        var that = $(this);

        $.ajax({
          url: 'http://query.yahooapis.com/v1/public/yql',
          dataType: 'json',
          data: yqlQuery,
          timeout: 5000,
          success: function (response) {
            output = response.query.results.postresult.html.body;
            console.log (output);
            if (output.length) {
              //Parse server response
              var pattern = /^(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s?([\S\s]*)/;
              var regs   = output.match(pattern);   
              var status = regs[1];
              var imgurl = regs[2].slice(0,-3)+'svg';
              //var valign = regs[3];
              var imgw   = regs[4];
              var imgh   = regs[5];
              var errmsg = regs[6];                               

              if(status=='0') {
                that.replaceWith('<figure style="text-align:center;"><img src="'+imgurl+'" '
                                    + 'width="'+imgw+'" '
                                    + 'height="'+imgh+'"/></figure>');
              } else {
                console.log("Server Returns Error Message:"+errmsg);                     
              }
            }
          },
          error: function (xhr,textStatus) {
            console.log("Cannot connect to quicklatex.com\n"+xhr.statusText);
          }
        });
      }
  });
});