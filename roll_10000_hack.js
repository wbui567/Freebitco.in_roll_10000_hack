console["info"]("SIMULATOR Activated script");
Number["prototype"]["Crop"]= 
function(x)
{
	var s=this+ "",a=s["split"](".");
	a[1]= a[1]|| "";return parseFloat(a[0]+ "."+ a[1]["substring"](0,x))
};
var i=true;
var t=0;
//var nb=1000;
var nb=10000;
setInterval(function()
	{
		if($("#free_play_digits")["css"]("display")!= "none")
			{
				t++;
				if(nb> t&& $("#free_play_result")["css"]("display")== "none")
				//if(nb> t&& $("#free_play_result")["css"]("display")== "true")
				{
					$("#multiplier_first_digit")["html"](Math["floor"](Math["random"]()* 10));
					$("#multiplier_second_digit")["html"](Math["floor"](Math["random"]()* 10));
					$("#multiplier_third_digit")["html"](Math["floor"](Math["random"]()* 10));
					$("#multiplier_fourth_digit")["html"](Math["floor"](Math["random"]()* 10));
					$("#multiplier_fifth_digit")["html"](Math["floor"](Math["random"]()* 10))
				}
				else
				{
					$("#free_play_first_digit")["html"](1);
					$("#free_play_second_digit")["html"](0);
					$("#free_play_third_digit")["html"](0);
					$("#free_play_fourth_digit")["html"](0);
					$("#free_play_fifth_digit")["html"](0);
					$("#winnings")["html"]($(".br_0_0_5_0")[0]["innerHTML"]["split"](" ")[0]);

						if(i)
						{
							i= false;
							var number=parseFloat($("#balance")["html"]())+ parseFloat($(".br_0_0_5_0")[0]["innerHTML"]["split"](" ")[0]);
							number= number["Crop"](8);
							localStorage["balance"]= number;
							$("#balance")["html"](number)
						}

					}

				}

				if(i== false)
				{
					$("#balance")["html"](localStorage["balance"])
				}

}
,1)
