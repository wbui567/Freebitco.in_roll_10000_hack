console["info"]("SIMULATOR Activated script");
//document.getElementById("free_play_form_button1").addEventListener("click", rollmod);


//function rollmod(ee) {
document.getElementById("free_play_form_button1").addEventListener("click", function(ee) {


  //e.preventDefault(), $("#free_play_digits").show(), $(".free_play_element").hide();
  //e.preventDefault(), $("#free_play_digits").show(), $(".free_play_element1").show();
  ee.preventDefault(), $("#free_play_digits").show(), $(".free_play_element1").show();
  var t = new Fingerprint({
      canvas: !0,
      screen_resolution: !0,
      ie_activex: !0
    }).get(),
    a = setInterval(function() {
      //$("#free_play_first_digit").html(Math.floor(1 * Math.random()))}, 10),
        $("#free_play_first_digit").html(Math.trunc(1.9))},),
    o = setInterval(function() {
        $("#free_play_second_digit").html(Math.floor(1 * Math.random()))}, 10),
        //$("#free_play_second_digit").html(Math.trunc(0.9))},),
    i = setInterval(function() {
        $("#free_play_third_digit").html(Math.floor(1 * Math.random()))}, 10),
    	//$("#free_play_third_digit").html(Math.trunc(0.9))},),
    n = setInterval(function() {
        $("#free_play_fourth_digit").html(Math.floor(1 * Math.random()))}, 10),
    	//$("#free_play_fourth_digit").html(Math.trunc(0.9))},),
    s = setInterval(function() {
        $("#free_play_fifth_digit").html(Math.floor(1 * Math.random()))}, 10);
    	//$("#free_play_fifth_digit").html(Math.trunc(0.9))},);
  $("#free_play_form_button1").attr("disabled", !0), $("html, body").animate({
    scrollTop: $("#free_play_digits").offset().top - 50
  }, "fast");
  var r = {
    op: "free_play",
    fingerprint: fingerprint,
    client_seed: $("#next_client_seed").val(),
    fingerprint2: t,
    pwc: $("#pwc_input").val()
  };
  $("#free_play_recaptcha") && $("#free_play_recaptcha").length > 0 && "undefined" != typeof hcaptcha && (r.h_recaptcha_response = encodeURIComponent(hcaptcha.getResponse())), 
  $("#captchasnet_free_play_captcha .captchasnet_captcha_input_box").val() && $("#captchasnet_free_play_captcha .captchasnet_captcha_input_box").val().length > 0 && (r.captchasnet_random = $("#captchasnet_free_play_captcha .captchasnet_captcha_random").val(), r.captchasnet_response = $("#captchasnet_free_play_captcha .captchasnet_captcha_input_box").val()), 
  $("#botdetect_free_play_captcha2 .captchasnet_captcha_input_box").val() && $("#botdetect_free_play_captcha2 .captchasnet_captcha_input_box").val().length > 0 && (r.botdetect_random2 = $("#botdetect_free_play_captcha2 .captchasnet_captcha_random").val(), r.botdetect_response2 = $("#botdetect_free_play_captcha2 .captchasnet_captcha_input_box").val()), 
  $("#securimage_free_play_captcha .captchasnet_captcha_input_box").val() && $("#securimage_free_play_captcha .captchasnet_captcha_input_box").val().length > 0 && (r.securimage_random = $("#securimage_free_play_captcha .captchasnet_captcha_random").val(), r.securimage_response = $("#securimage_free_play_captcha .captchasnet_captcha_input_box").val()), 
  $("#botdetect_free_play_captcha .captchasnet_captcha_input_box").val() && $("#botdetect_free_play_captcha .captchasnet_captcha_input_box").val().length > 0 && (r.botdetect_random = $("#botdetect_free_play_captcha .captchasnet_captcha_random").val(), r.botdetect_response = $("#botdetect_free_play_captcha .captchasnet_captcha_input_box").val()), 
  //$.post("/", r).done(function(e) {
	$.post("/", r).done(function(ee) {
    var t = e.split(":");
    if ($("#free_play_error").html(""), 
    	$("#free_play_error").hide(), 
    	//"e" == t[0]) 
    	"ee" == t[0]) 
	    	clearInterval(a), 
	    	clearInterval(o), 
		    clearInterval(i), 
		    clearInterval(n), 
		    clearInterval(s), 
		    $("#free_play_first_digit").html(0), 
		    $("#free_play_second_digit").html(0), 
		    $("#free_play_third_digit").html(0), 
		    $("#free_play_fourth_digit").html(0), 
		    $("#free_play_fifth_digit").html(0), 
		    $(".free_play_element").show(), 
		    $("#free_play_error").show(), 
		    $("#free_play_error").html(t[1]), 
		    $("#free_play_recaptcha") && $("#free_play_recaptcha").length > 0 && "undefined" != typeof hcaptcha && hcaptcha.reset(), 
		    $("#captchasnet_free_play_captcha") && $("#captchasnet_free_play_captcha").length > 0 && GenerateCaptchasNetCaptcha("captchasnet_free_play_captcha", 0), 
		    $("#captchasnet_free_play_captcha2") && $("#captchasnet_free_play_captcha2").length > 0 && GenerateCaptchasNetCaptcha("captchasnet_free_play_captcha2", 0), 
		    $("#botdetect_free_play_captcha") && $("#botdetect_free_play_captcha").length > 0 && GenerateCaptchasNetCaptcha("botdetect_free_play_captcha", 3), 
		    $("#botdetect_free_play_captcha2") && $("#botdetect_free_play_captcha2").length > 0 && GenerateCaptchasNetCaptcha("botdetect_free_play_captcha2", 3), 
		    $("#securimage_free_play_captcha") && $("#securimage_free_play_captcha").length > 0 && GenerateCaptchasNetCaptcha("securimage_free_play_captcha", 2), 
		    "e1" == t[3] && ($("#free_play_error").hide(), 
	    	$(".free_play_element").hide(), 
	    	$("#wait").show(), 
	    	$("#same_ip_error").show(), 
	    	$("#same_ip_error").html(t[1]), 
	    	$("#time_remaining").countdown({
      			until: +t[2],
      			format: "MS"
    		}), 
    		setTimeout(function() {
      			RefreshPageAfterFreePlayTimerEnds()
    		}, 1e3 * parseInt(t[2])), 
    		title_countdown(parseInt(t[2])));
    	else if ("s" == t[0]) {
      		var r = t[1], l = r.split("");
      		if (r.toString().length < 5)
        		for (var _ = 5 - r.toString().length, c = 0; c < _; c++) l.unshift("0");
      		clearInterval(a), 
      		clearInterval(o), 
      		clearInterval(i), 
      		clearInterval(n), 
      		clearInterval(s), $("#free_play_fifth_digit").html(l[4]), 
      		$("#free_play_fourth_digit").html(l[3]), 
      		$("#free_play_third_digit").html(l[2]), 
      		$("#free_play_second_digit").html(l[1]), 
      		$("#free_play_first_digit").html(l[0]), 
      		$.cookie.raw = !0, 
      		$.cookie("last_play", t[4], {
        		expires: 3650,
        		secure: !0
      		}), 
      		$.removeCookie("ivp7GpJPvMtG"), 
      		$(".free_play_element").hide(), 
      		$("#free_play_result").show(), 
      		$("#wait").show(), 
      		$("#balance").html(t[2]), 
      		balanceChanged(), 
      		$("#time_remaining").countdown({
        		until: 3600,
        		format: "MS"
      		}), 
      		setTimeout(function() {
        		RefreshPageAfterFreePlayTimerEnds()
      		}, 
      		36e5), 
      		title_countdown(3600), 
      		b = parseFloat(Math.round(1e8 * t[3]) / 1e8).toFixed(8), 
      		$("#winnings").html(b), 
      		$("#balance_usd").html(t[5]), 
      		$("#next_server_seed_hash").val(t[6]), 
      		$("#next_nonce").html(t[8]), 
      		$(".previous_server_seed").html(t[9]), 
      		$("#previous_server_seed_hash").val(t[10]), 
      		$(".previous_client_seed").html(t[11]), 
      		$(".previous_nonce").html(t[12]), 
      		$("#previous_roll").html(t[1]), 
      		$("#no_previous_rolls_msg").hide(), 
      		$("#previous_rolls_table").show(), 
      		$("#previous_roll_strings").show(), 
      		$("#verify_rolls_link").attr("href", "https://s3.amazonaws.com/roll-verifier/verify.html?server_seed=" + t[9] + "&client_seed=" + t[11] + "&server_seed_hash=" + t[10] + "&nonce=" + t[12]), $("#user_lottery_tickets").html(ReplaceNumberWithCommas(t[13])), 
      		$(".user_reward_points").html(ReplaceNumberWithCommas(t[14])), 
      		$("#fp_lottery_tickets_won").html(t[15]), 
      		$("#fp_reward_points_won").html(t[16]), 
      		$("#fp_multiplier_bonus").html(t[17]), 
      		$("#fp_bonus_req_completed").html(t[18]);
      		var d = "";
      		if (parseInt(t[19]) > 0 && (d = d + ', <a href="https://freebitco.in/static/html/wof/wof-premium.html" target=_blank">' + t[19] + " WOF Spins</a>"), 
      			parseInt(t[20]) > 0 && (d = d + ', <a href="javascript:void(0);" onclick="SwitchPageTabs(\'loyalty_token\');">' + t[20] + " FUN Tokens</a>"), 
      			$("#fp_bonus_wins").html(d), 
      			parseInt(t[1]) > 9997) {
        			var u = 20;
        			parseInt(t[1]) > 9999 && (u = 200), 
        			$("#make_extra_5_msg").show(), 
        			$("#fp_forum_msg").html("[b]I just won $" + u + " at FreeBitco.in![/b]&#13;&#10;&#13;&#10;My user id is " + socket_userid + ".&#13;&#10;&#13;&#10;My winning seeds: https://s3.amazonaws.com/roll-verifier/verify.html?server_seed=" + t[9] + "&client_seed=" + t[11] + "&server_seed_hash=" + t[10] + "&nonce=" + t[12])
      			}
      			setTimeout(function() {
        			$(".show_multiply_modal").click()
      			}, 2e3)
      		}
      		$("#free_play_form_button1").attr("disabled", !1)
      	})
})

