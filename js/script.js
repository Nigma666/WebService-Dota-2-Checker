// $('#search-button').on('click', function () {
//     $.ajax({
//         //url: 'http://www.omdbapi.com',
//         url: 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001',
//         type: 'get',
//         dataType: 'json',
//         // data: {
//         //     apikey: 'fabec1d4',
//         //     s: $('#search-input').val(),

//         // },
//         data: {
//             //match_id: $('#search-input').val(),

//             key: 'C228EE0717551355957ED2E67303C1A2',
//             // match_id: '6255786624',
//             match_id: $('#search-input').val(),
//         },
//         success: function (result) {

//             console.log(result);

// let isi = result.result;
// let hai = isi.error;

// console.log(hai)
//         }

//     })

// })


//Ini button Search Player
$('#search-button-player').on('click', function () {
    $.ajax({
        url: 'https://api.opendota.com/api/players/' + $('#search-input-player').val(),
        type: 'get',
        dataType: 'json',
        data: {
            //match_id: $('#search-input').val(),

            //key: 'C228EE0717551355957ED2E67303C1A2',
            // match_id: '6255786624',
            //match_id: $('#search-input-heroes').val(),
        },

        success: function (p) {
            let id_player = $('#search-input-heroes').val()
            console.log(p)
            console.log(p.profile)
            profiles = p.profile
            id_players = profiles.account_id
            console.log(id_players)
            if (p.rank_tier == null) {
                console.log('player tidak ada')
                $('#Home').html('<h1> 404 MAAF PEMAIN TIDAK DITEMUKAN :(</h1>')
            }
            else {
                // $('#Home').html('<center><h2>Player Ditemukan</center> </h2><div img src=' + p.profile.avatarfull + ' class="rounded float-start" alt="...">')
                $('#Home').html('<center><h1> Pemain Ditemukan <br>' + id_players + '</h1> <div class="mb-3"><img src=' + p.profile.avatarfull + ' class="rounded float-start" alt="..."> <br><div class="mb-3"> <h2>' + profiles.personaname + '</h2> <br> <p> Perkiraan MMR: ' + p.mmr_estimate.estimate + ' <br> <p> Kewarganegaraan: ' + profiles.loccountrycode + '<br> <p> Steam Profile : <a target="_blank" rel="noopener noreferrer" href=' + profiles.profileurl + '> Menuju Steam? </a>')
            }
        }

    })
})


$('#search-button').on('click', function () {

    $.ajax({
        url: 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001',
        type: 'get',
        dataType: 'json',
        data: {
            //match_id: $('#search-input').val(),

            key: 'C228EE0717551355957ED2E67303C1A2',
            // match_id: '6255786624',
            match_id: $('#search-input').val(),
        },

        success: function (result) {
            let isi = result.result;
            let hai = isi.error;
            let pemenang = isi.radiant_win;
            let pemain = isi.players;
            let winner;
            if (pemenang == "true") {
                winner = 'Radiant'
            }
            else {
                winner = 'Dire'
            }

            // //perulangan foreach array
            $.each(pemain, function (index, value) {
                console.log('My array has at position ' + index + ', this value: ' + value);
            });

            console.log(result)

            //mencari nilai KDA tertinggi
            let kill = 0, pemainke;
            $.each(pemain, function (index, value) {
                //console.log('My array has at position ' + index + ', this value: ' + value);
                if (pemain[index].kills >= kill) {
                    kill = pemain[index].kills;
                    pemainke = index;
                }
            });
            console.log('kill terbanyak yaitu yaitu ' + kill)
            console.log('kill terbanyak yaitu player ' + pemainke)
            //console.log('killnya yaitu ' + pemain[1].kills)

            console.log(result)
            // if (hai == "No Match ID specified") {
            //     $('#Home').html('<center><h2> Match ditemukan dimenangkan oleh ' + winner + ' Team! <br>Permain terbaik dari match ini: </h2> <div class="mb-3"><label for="exampleFormControlInput1" class="form-label"><p>Player ID</label><input type="email" class="form-control" id="exampleFormControlInput1" value="' + pemain[pemainke].account_id + '"></div> <div class="mb-3"><label for="exampleFormControlInput1" class="form-label"><p>Jumlah Kill</label><input type="email" class="form-control" id="exampleFormControlInput1" value="' + pemain[pemainke].kills + '"></div> <div class="mb-3"><label for="exampleFormControlInput1" class="form-label"><p>Jumlah Keuangan</label><input type="email" class="form-control" id="exampleFormControlInput1" value="' + pemain[pemainke].net_worth + '"></div> <div class="mb-3"><label for="exampleFormControlInput1" class="form-label"><p>Hero</label><input type="email" class="form-control" id="exampleFormControlInput1" value="' + + pemain[pemainke].hero_id + '"></div> ')

            // }
            if (isi.error == "No Match ID specified" || isi.error == "Match ID not found" || isi.error == "Practice matches are not available via GetMatchDetails") {
                $('#Home').html('<h1> ' + hai + '</h1>')
                $('#About').html('')
                $('#Contact').html('')
                $('#Blog').html('')
                console.log(hai)
            }
            else {

                $('#Home').html('<center><h2> Match ditemukan dimenangkan oleh ' + winner + ' Team! <br>Permain terbaik dari match ini: </h2> <div class="mb-3"><label for="exampleFormControlInput1" class="form-label"><p>Player ID</label><input type="email" class="form-control" id="exampleFormControlInput1" value="' + pemain[pemainke].account_id + '"></div> <div class="mb-3"><label for="exampleFormControlInput1" class="form-label"><p>Jumlah Kill</label><input type="email" class="form-control" id="exampleFormControlInput1" value="' + pemain[pemainke].kills + '"></div> <div class="mb-3"><label for="exampleFormControlInput1" class="form-label"><p>Jumlah Keuangan</label><input type="email" class="form-control" id="exampleFormControlInput1" value="' + pemain[pemainke].net_worth + '"></div> <div class="mb-3"><label for="exampleFormControlInput1" class="form-label"><p>Hero</label><input type="email" class="form-control" id="tampilkanhero" value="' + + pemain[pemainke].hero_id + '"> Tampilkan Hero? <a href = "#Home" id="Tampil"> Oke! </a></div>')
                //nyimpan hero id
                let namahero = pemain[pemainke].hero_id
                let x
                //Hero tampil
                $('#Tampil').on('click', function () {
                    $.ajax({
                        url: 'https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001',
                        type: 'get',
                        dataType: 'json',
                        data: {
                            //match_id: $('#search-input').val(),

                            key: 'C228EE0717551355957ED2E67303C1A2',
                            // match_id: '6255786624',
                            //match_id: $('#search-input-heroes').val(),
                        },


                        success: function (result_hero) {
                            let y = result_hero.result
                            let z = y.heroes[namahero]
                            let zz
                            document.getElementById("tampilkanhero").value = y.heroes[namahero - 1].name;
                            console.log(y.heroes[namahero - 1])
                        }

                    })
                })
                // end
            }
        }


    })

})


// $.ajax({
//     url: 'http://mysite.microsoft.sample.xyz.com/api/mycall',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     type: "POST", /* or type:"GET" or type:"PUT" */
//     dataType: "json",
//     data: {
//     },
//     success: function (result) {
//         console.log(result);
//     },
//     error: function () {
//         console.log("error");
//     }
// });