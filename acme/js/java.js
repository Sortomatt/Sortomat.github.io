     $.ajax({
         url: "js/acme.json",
         dataType: "json",
         success: function (data) {
             console.log(data);
             var home = data['nav-bar']['home'];
             var anvil = data['nav-bar']['anvil'];
             var explosive = data['nav-bar']['tnt'];
             var decoy = data['nav-bar']['decoy'];
             var trap = data['nav-bar']['trap'];
             var output = '#flexlist';

             $('#flexlist').html("<li><a href='#'>Home</a></li><li><a href='#'>Anvils</a></li><li><a href='#'>Explosives</a></li><li><a href='#'>Decoys</a></li><li><a href='#'>Traps</a></li>");



             $("#flexlist").on("click", "a", function (evt) {
                 evt.preventDefault();
                 var navClick = $(this).text();
                 console.log(navClick);

                 var pname = data[navClick]['name'];
                 var pdesc = data[navClick]['description'];
                 var pmanu = data[navClick]['manufacturer'];
                 var pprice = data[navClick]['price'];
                 var preview = data[navClick]['reviews'];
                 var pimage = data[navClick]['path']
                 console.log(pmanu);
                 $("#home").hide();


                 $("#pname").html(pname);
                 $("#pdesc").html(pdesc);
                 $("#pmanu").html("Made by: " + pmanu);
                 $("#pprice").html("Price: $" + pprice);
                 $("#previews").html("Reviews: " + preview);
                 $("#pimg").html(pimage);


             });
         }
     });
