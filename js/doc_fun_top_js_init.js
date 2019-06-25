function top_section_init(){
var thisform = document.form;
var deduct_sub_lender							= 0.00;	

thisform.deduct_sub.value 				=  0.00;

//alert("TEST ==>" + thisform.count.value);

//function old_init()
//{	

if (thisform.count.value < 2)
{
arrInc_wire[0] 				= 		thisform.inc_wire.value.replace(",","").replace(",","");
arrPaid[0] 		 			= 		thisform.paid.value.replace(",","").replace(",","");
arrTotal[0] 		 		= 		thisform.total.value.replace(",","").replace(",","");

for ( i = 0; i < deduct_cnt ; i++ )
{
if (thisform.inc_wire.value == "Y" )
{
thisform.deduct_sub.value	= parseFloat(thisform.deduct_sub.value.replace(",","").replace(",",""))+ ( parseFloat(arrTotal[i]) - parseFloat(arrPaid[i]) );
}

if ((thisform.inc_wire.value == "Y" ) && (thisform.paid_by.value == "L"))
{
deduct_sub_lender	= parseFloat(deduct_sub_lender)- ( parseFloat(arrTotal[i]) - parseFloat(arrPaid[i]) );
}
else if (thisform.inc_wire.value == "Y" )
{
deduct_sub_lender = parseFloat(deduct_sub_lender)+ ( parseFloat(arrTotal[i]) - parseFloat(arrPaid[i]) );							

}	
}
}
else
{	

for ( i = 0; i < deduct_cnt ; i++ )
{
arrInc_wire[i] 	 		= 		thisform.inc_wire[i].value.replace(",","").replace(",","");
arrPaid[i] 		  		= 		thisform.paid[i].value.replace(",","").replace(",","");
arrTotal[i] 		  	= 		thisform.total[i].value.replace(",","").replace(",","");
if (thisform.inc_wire[i].value == "Y" )				
{
//alert ("NET WIRE ==> " + thisform.inc_wire[i].value + ",  TOTAL ==> " + parseFloat(arrTotal[i]));
thisform.deduct_sub.value	= parseFloat(thisform.deduct_sub.value.replace(",","").replace(",",""))+ ( parseFloat(arrTotal[i]) - parseFloat(arrPaid[i]) );
}
//alert ("2.   NET WIRE ==> " + thisform.inc_wire[i].value + ",  TOTAL ==> " + parseFloat(arrTotal[i]));
if ((thisform.inc_wire[i].value == "Y" ) && (thisform.paid_by[i].value == "L"))
{
deduct_sub_lender	= parseFloat(deduct_sub_lender)- ( parseFloat(arrTotal[i]) - parseFloat(arrPaid[i]) );
}
else if (thisform.inc_wire[i].value == "Y" )
{
deduct_sub_lender = parseFloat(deduct_sub_lender)+ ( parseFloat(arrTotal[i]) - parseFloat(arrPaid[i]) );							

}	
}
}
//
thisform.deduct_sub.value = Math.round(thisform.deduct_sub.value.replace(",","").replace(",","")  * 100.0) /100.0;
deduct_sub_lender 				= Math.round(deduct_sub_lender  * 100.0) /100.0;
FormatComma(document.form.deduct_sub);
//
//---------------------------  INTEREST  PART  ---------------------------------------------------------------------------
if ( document.form.t_prog_name.value.substring(0,5) == "SO560" )
{
if ( document.form.odd_days_basis.value == 360 )
{
per_diem1 	= parseFloat(document.form.loan_amt.value.replace(",","").replace(",","")) * parseFloat(document.form.int_rate.value.replace(",","").replace(",","")) / 360.0 ;
}
else
{
per_diem1 	= parseFloat(document.form.loan_amt.value.replace(",","").replace(",","")) * parseFloat(document.form.int_rate.value.replace(",","").replace(",","")) / 365.0 ;
}
}
else
{		


if ( document.form.odd_days_basis.value == 360 )
{
if ( (document.form.int_rate_real_manual.value == "") || (document.form.int_rate_real_manual.value == null ) || (document.form.int_rate_real_manual.value == 0 ) )
{
per_diem1 	= parseFloat(document.form.loan_amt.value.replace(",","").replace(",","")) * parseFloat(document.form.int_rate_real.value.replace(",","").replace(",","")) / 360.0 ;
//alert("1 : " + per_diem1);
//alert("1 : " + document.form.int_rate_real.value);
}
else
{
per_diem1 	= parseFloat(document.form.loan_amt.value.replace(",","").replace(",","")) * parseFloat(document.form.int_rate_real_manual.value.replace(",","").replace(",","")) / 360.0 ;
//alert("2");
}						}
else
{
if ( (document.form.int_rate_real_manual.value == "") || (document.form.int_rate_real_manual.value == null ) || (document.form.int_rate_real_manual.value == 0 ) )
{
per_diem1 	= parseFloat(document.form.loan_amt.value.replace(",","").replace(",","")) * parseFloat(document.form.int_rate_real.value.replace(",","").replace(",","")) / 365.0 ;
}
else
{
per_diem1 	= parseFloat(document.form.loan_amt.value.replace(",","").replace(",","")) * parseFloat(document.form.int_rate_real_manual.value.replace(",","").replace(",","")) / 365.0 ;
}
}
}
per_diem1			= parseFloat(per_diem1) * 0.01;
//alert("3 : " + per_diem1);
document.form.per_diem.value = Math.round ((parseFloat(per_diem1) * 10000.0)) / 10000.0;
//alert("1 : " + document.form.per_diem.value);		
//odd_days  = oint_from - oint_to
odd_days_int1 =  parseFloat(document.form.per_diem.value.replace(",","").replace(",","")) * parseFloat(document.form.odd_days.value.replace(",","").replace(",","")) ;
//alert(odd_days_int1);
document.form.odd_days_int.value = Math.round( parseFloat( odd_days_int1 ) * 100.0 - 0.00001 ) / 100.0 ;
//alert(document.form.odd_days_int.value)		
//----------------------------------------------------------------------------------------------------------------------------	

document.form.wire_amt.value = document.form.loan_amt.value.replace(",","").replace(",","");

if (document.form.srp_to_wire.value == "Y") {
document.form.wire_amt.value = parseFloat(document.form.wire_amt.value.replace(",","").replace(",","")) + parseFloat (document.form.srp_fee.value.replace(",","").replace(",","") );
document.form.wire_amt.value  = Math.round(document.form.wire_amt.value * 100.0) / 100.0;
}

if (document.form.ysp_to_wire.value == "Y") {
document.form.wire_amt.value = parseFloat(document.form.wire_amt.value.replace(",","").replace(",","")) + parseFloat (document.form.yield_fee.value.replace(",","").replace(",","") );
document.form.wire_amt.value  = Math.round(document.form.wire_amt.value * 100.0) / 100.0;
}
//alert("1 :   " + document.form.vaff_to_wire.value);
if ( document.form.vaff_to_wire.value == "Y" ) {
document.form.wire_amt.value  = parseFloat(document.form.wire_amt.value.replace(",","").replace(",","")) - parseFloat(document.form.mip_fee.value.replace(",","").replace(",",""));
document.form.wire_amt.value  = Math.round(document.form.wire_amt.value * 100.0) / 100.0;
}	

//alert("2 :   " + document.form.ris_to_wire.value);
if ( document.form.ris_to_wire.value == "Y" ) {
document.form.wire_amt.value  = parseFloat(document.form.wire_amt.value.replace(",","").replace(",","")) - parseFloat(document.form.req_setup.value.replace(",","").replace(",",""));
document.form.wire_amt.value  = Math.round(document.form.wire_amt.value * 100.0) / 100.0;
}


document.form.wire_amt.value = parseFloat(document.form.wire_amt.value.replace(",","").replace(",",""))  - parseFloat(deduct_sub_lender);
document.form.wire_amt.value  = Math.round(document.form.wire_amt.value * 100.0) / 100.0;


if ( document.form.ppi_to_wire.value == "Y" ) {
document.form.wire_amt.value  = parseFloat(document.form.wire_amt.value.replace(",","").replace(",","")) - parseFloat(document.form.odd_days_int.value.replace(",","").replace(",",""));
document.form.wire_amt.value  = Math.round(document.form.wire_amt.value * 100.0) / 100.0;
}	

//	
//alert("WIRE_AMT ==> " + document.form.wire_amt.value);
FormatComma(thisform.deduct_sub);
FormatComma(document.form.per_diem);
//alert(document.form.odd_days_int.value);
FormatComma(document.form.odd_days_int);
FormatComma(document.form.wire_amt);
//
dateCheck(document.form.oint_from);
dateCheck(document.form.oint_to);

//}
}