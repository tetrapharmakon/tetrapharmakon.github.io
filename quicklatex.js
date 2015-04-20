$(function() {
  $('.quicklatex').each(function(){
    // Extract parameters
    var preamble = $(this).data("preamble");
    var formula = $(this).data("code"); //(($.trim($(this).text())).match(/^\\\[([\S\s]*)\\\]$/))[1];
    //var bkgcolor  = "fdf6e3";
    //var latexmode = $('#latexmode').val();    

      if(formula!="") {
        var qlQuery = 'formula=' + encodeURIComponent(formula)
                    + '&fsize='  + '18px'
                    + '&fcolor=' + '000000' //'657b83'
                    + '&mode=0'
                    + '&out=1'
                    + '&remhost=quicklatex.com';
        if (preamble!='')
          qlQuery = qlQuery + '&preamble=' + encodeURIComponent(preamble);
        //if ($('#showerrors').is(':checked'))
        qlQuery = qlQuery + "&errors=1";      
        // Prevent ajax request from  caching
        qlQuery = qlQuery + '&rnd='+Math.random()*100;
        var yqlQuery = "q=" +encodeURIComponent("select * from htmlpost where url='http://www.quicklatex.com/latex3.f/' and postdata=\""+qlQuery+"\" and xpath=\"//p\"")
                     + "&format=json"
                     + "&env=" +encodeURIComponent("store://datatables.org/alltableswithkeys");
        var that = $(this);
        $.ajax({
          url: 'http://query.yahooapis.com/v1/public/yql',
          dataType: 'json',
          data: yqlQuery,
          processData: false,
          timeout: 100000,
          //traditional: false,
          //global: false,
          success: function (response) {
            output = response.query.results.postresult.p;
            if (output.length) {
              //Parse server response
              console.log(output);
              var pattern = /^(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s?([\S\s]*)/;
              var regs   = output.match(pattern);   
              var status = regs[1];
              var imgurl = regs[2];
              var valign = regs[3];
              var imgw   = regs[4];
              var imgh   = regs[5];
              var errmsg = regs[6];                               

              if(status=='0') {
                that.replaceWith("<img src=\""+imgurl+"\"/>"); /* style=\"background-color:"+"#"+bkgcolor+";\""+" */
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
    return false; 

  });
});
