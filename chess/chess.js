function chess() {
    var table = document.createElement( 'table' ),
        char = [ '','A','B','C','D','E','F','G','H','' ],
        black1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],
        white1 = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9821;','&#9815;','&#9814;','1' ],
        black2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
        white2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];
    for ( var i = 0, n = 9; i < 10, n >= 0; i++, n-- ) {
        var tr = table.insertRow(i);
        for ( var j = 0; j < 10; j++ ) {
            var td = tr.insertCell( j );
                        switch (i) {
                case 0:
                    td.innerText = char[ j ];
                    break;
                case 1:
                    td.innerHTML = black1[ j ];
                    break;
                case 2:
                    td.innerHTML = black2[ j ];
                    break;
                case 7:
                    td.innerHTML = white2[ j ];
                    break;
                case 8:
                    td.innerHTML = white1[ j ];
                    break;
                case 9:
                    td.innerText = char[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        td.innerHTML = n;
                    }
                    break;
            }
        }
    }
    document.body.append( table );
};
chess();