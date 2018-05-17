function terimainput(){
       var a=document.forms['biodata']['nama'].value;
       var b=document.forms['biodata']['alamat'].value;
	   var c=document.forms['biodata']['tgl'].value;
       var d=document.forms['biodata']['agama'].value;
	   var e=document.forms['biodata']['telp'].value;
	   var f=document.forms['biodata']['email'].value;
               
                                               
       var tabel = document.getElementById("tabelinput");
       var row = tabel.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
	   var cell4 = row.insertCell(3);
	   var cell5 = row.insertCell(4);
	   var cell6 = row.insertCell(5);
	   var cell7 = row.insertCell(6);
               
       cell1.innerHTML = a;
       cell2.innerHTML = b;
       cell3.innerHTML = c;
	   cell4.innerHTML = d;
       cell5.innerHTML = e;
       cell6.innerHTML = f;
}