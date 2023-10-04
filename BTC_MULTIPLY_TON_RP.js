var gameLost=0, cLost=0, gameWin=0, cWin=0, maxBet=0;
var startValue = "100,000,000", //reward points
stopPercentage = 5, maxWait = 100, stopped = false,
stopBefore = 1;
var start_multiplier = 'reward points'; //??
var repeatCurrent;
var a = $("#reward points").text(),
UX = ((Number(a)-0.00025000) / 160 ).toFixed(8),
b = $("#double_your_btc_stake").val(),
UX2 = (Number(b*5)).toFixed(8);
UX3 = (Number(b*2)).toFixed(8);
var $loButton = $("#double_your_reward points"), $hiButton = $("#double_your_reward points");
var $multiplier = $('#double_your_reward points_multiplier');
var startbalance=0;

function multiply() {
repeatCurrent++; //
var n = 1;
var balance = parseFloat( $("#balance").text() ) || 0;
if( balance ){
if( balance <= 100.1 ){
  n = 1;
  }
}


//---------- ??1?? ------------
if( n == 1 ){
  if( repeatCurrent == 151 ){
    reset();
    return $hiButton;
  }

  if( repeatCurrent == 1 ){
    $("#double_your_reward points_stake").val('100,000,000');
    $multiplier.val('2');
    return $hiButton;
  }
  if( repeatCurrent == 2 ){
    $("#double_your_reward points_stake").val('100,000,000');
    $multiplier.val('4');
    return $hiButton;
  }
  if( repeatCurrent == 3 ){
    $("#double_your_reward points_stake").val('100,000,000');
    $multiplier.val('6');
    return $hiButton;
  }
  if( repeatCurrent == 4 ){
    $("#double_your_reward points_stake").val('100,000,000');
    $multiplier.val('8');
    return $hiButton;
  }
  if( repeatCurrent == 5 ){
    $("#double_your_reward points_stake").val('100,000,000');
    $multiplier.val('10');
    return $hiButton;
  }
  if( repeatCurrent == 6 ){
    $("#double_your_reward points_stake").val('100,000,000');
    $multiplier.val('4');
    return $hiButton;
  }
  if( repeatCurrent == 7 ){
    $("#double_your_reward points_stake").val('100,000,000');
    $multiplier.val('5');
    return $hiButton;
  }
  if( repeatCurrent == 8 ){
    $("#double_your_btc_stake").val('0.00000010');
    $multiplier.val('6');
    return $hiButton;
  }
  if( repeatCurrent == 9 ){
    $("#double_your_btc_stake").val('0.00000015');
    $multiplier.val('7');
    return $hiButton;
  }
  if( repeatCurrent == 10 ){
    $("#double_your_btc_stake").val('0.00000015');
    $multiplier.val('8');
    return $hiButton;
  }
  if( repeatCurrent == 11 ){
    $("#double_your_btc_stake").val('0.00000015');
    $multiplier.val('9');
    return $hiButton;
  }
  if( repeatCurrent == 12 ){
    $("#double_your_btc_stake").val('0.00000015');
    $multiplier.val('10');
    return $hiButton;
  }
  if( repeatCurrent == 13 ){
    $("#double_your_btc_stake").val('0.00000080');
    $multiplier.val('3');
    return $hiButton;
  }
  if( repeatCurrent == 14 ){
    $("#double_your_btc_stake").val('0.00000300');
    $multiplier.val('2');
    return $hiButton;
  }
  if( repeatCurrent == 15 ){
    $("#double_your_btc_stake").val('0.00000300');
    $multiplier.val('3');
    return $hiButton;
  }
  if( repeatCurrent == 16 ){
    $("#double_your_btc_stake").val('0.00001000');
    $multiplier.val('2');
    return $hiButton;
  }
  if( repeatCurrent == 17 ){
    $("#double_your_btc_stake").val('0.00000500');
    $multiplier.val('5');
    return $hiButton;
  }
  if( repeatCurrent == 18 ){
    $("#double_your_btc_stake").val('0.00000500');
    $multiplier.val('6');
    return $hiButton;
  }
  if( repeatCurrent == 19 ){
    $("#double_your_btc_stake").val('0.00000500');
    $multiplier.val('7');
    return $hiButton;
  }
  if( repeatCurrent == 20 ){
    $("#double_your_btc_stake").val('0.00004000');
    $multiplier.val('2');
    return $hiButton;
  }
  if( repeatCurrent == 21 ){
    $("#double_your_btc_stake").val('0.00001000');
    $multiplier.val('9');
    return $hiButton;
  }
  if( repeatCurrent == 22 ){
    $("#double_your_btc_stake").val('0.00001000');
    $multiplier.val('10');
    return $hiButton;
  }
  if( repeatCurrent == 23 ){
    $("#double_your_btc_stake").val('0.00002000');
    $multiplier.val('7');
    return $hiButton;
  }
  if( repeatCurrent == 24 ){
    $("#double_your_btc_stake").val('0.00003000');
    $multiplier.val('5');
    return $hiButton;
  }
  if( repeatCurrent == 25 ){
    $("#double_your_btc_stake").val('0.00005000');
    $multiplier.val('4');
    return $hiButton;
  }
  if( repeatCurrent == 26 ){
    $("#double_your_btc_stake").val('0.00010000');
    $multiplier.val('3');
    return $hiButton;
  }
  if( repeatCurrent == 27 ){
    $("#double_your_btc_stake").val('0.00000004');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 28 ){
    $("#double_your_btc_stake").val('0.00000004');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 29 ){
    $("#double_your_btc_stake").val('0.00000004');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 30 ){
    $("#double_your_btc_stake").val('0.00000004');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 31 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 32 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 33 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 34 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 35 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 36 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 37 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 38 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 39 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 40 ){
    $("#double_your_btc_stake").val('0.00000008');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 41 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 42 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 43 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 44 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 45 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 46 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 47 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 48 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 49 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 50 ){
    $("#double_your_btc_stake").val('0.00000016');
    $multiplier.val('70');
    return $hiButton;
  }
  if( repeatCurrent == 51 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 52 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('50');
    return $hiButton;
  }
  if( repeatCurrent == 53 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 54 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('50');
    return $hiButton;
  }
  if( repeatCurrent == 55 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 56 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('50');
    return $hiButton;
  }
  if( repeatCurrent == 57 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 58 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('50');
    return $hiButton;
  }
  if( repeatCurrent == 59 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 60 ){
    $("#double_your_btc_stake").val('0.00000032');
    $multiplier.val('50');
    return $hiButton;
  }
  if( repeatCurrent == 61 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 62 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('50');
    return $hiButton;
  }
  if( repeatCurrent == 63 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 64 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('150');
    return $hiButton;
  }
  if( repeatCurrent == 65 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 66 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('250');
    return $hiButton;
  }
  if( repeatCurrent == 67 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 68 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('350');
    return $hiButton;
  }
  if( repeatCurrent == 69 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 70 ){
    $("#double_your_btc_stake").val('0.00000064');
    $multiplier.val('450');
    return $hiButton;
  }
  if( repeatCurrent == 71 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('128');
    return $hiButton;
    }
  if( repeatCurrent == 72 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('550');
    return $hiButton;
  }
  if( repeatCurrent == 73 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('4749');
    return $hiButton;
  }
  if( repeatCurrent == 74 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('650');
    return $hiButton;
  }
  if( repeatCurrent == 75 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('128');
    return $hiButton;
  }
  if( repeatCurrent == 76 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('750');
    return $loButton;
  }
  if( repeatCurrent == 77 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 78 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('850');
    return $loButton;
  }
  if( repeatCurrent == 79 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 80 ){
    $("#double_your_btc_stake").val('0.00000128');
    $multiplier.val('950');
    return $loButton;
  }
  if( repeatCurrent == 81 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 82 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('30');
    return $loButton;
  }
  if( repeatCurrent == 83 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 84 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('130');
    return $loButton;
  }
  if( repeatCurrent == 85 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 86 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('230');
    return $loButton;
  }
  if( repeatCurrent == 87 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 88 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('330');
    return $loButton;
  }
  if( repeatCurrent == 89 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 90 ){
    $("#double_your_btc_stake").val('0.00000256');
    $multiplier.val('430');
    return $loButton;
  }
  if( repeatCurrent == 91 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 92 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('22');
    return $loButton;
  }
  if( repeatCurrent == 93 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 94 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('122');
    return $loButton;
  }
  if( repeatCurrent == 95 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 96 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('222');
    return $loButton;
  }
  if( repeatCurrent == 97 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 98 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('322');
    return $loButton;
  }
  if( repeatCurrent == 99 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 100 ){
    $("#double_your_btc_stake").val('0.00000512');
    $multiplier.val('422');
    return $loButton;
  }
  if( repeatCurrent == 101 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 102 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('522');
    return $loButton;
  }
  if( repeatCurrent == 103 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 104 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('622');
    return $loButton;
  }
  if( repeatCurrent == 105 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 106 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('722');
    return $loButton;
  }
  if( repeatCurrent == 107 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 108 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('822');
    return $loButton;
  }
  if( repeatCurrent == 109 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 110 ){
    $("#double_your_btc_stake").val('0.00001024');
    $multiplier.val('922');
    return $loButton;
  }
  if( repeatCurrent ==111 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 112 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('22');
    return $loButton;
  }
  if( repeatCurrent == 113 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 114 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('822');
    return $loButton;
  }
  if( repeatCurrent == 115 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 116 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('722');
    return $loButton;
  }
  if( repeatCurrent == 117 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 118 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('622');
    return $loButton;
  }
  if( repeatCurrent == 119 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 120 ){
    $("#double_your_btc_stake").val('0.00002048');
    $multiplier.val('522');
    return $loButton;
  }
  if( repeatCurrent == 121 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 122 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('422');
    return $loButton;
  }
  if( repeatCurrent == 123 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 124 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('322');
    return $loButton;
  }
  if( repeatCurrent == 125 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 126 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('222');
    return $loButton;
  }
  if( repeatCurrent == 127 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 128 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('122');
    return $loButton;
  }
  if( repeatCurrent == 129 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 130 ){
    $("#double_your_btc_stake").val('0.00004096');
    $multiplier.val('29.99');
    return $loButton;
  }
  if( repeatCurrent == 131 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 132 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('122');
    return $loButton;
  }
  if( repeatCurrent == 133 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 134 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('29.99');
    return $loButton;
  }
  if( repeatCurrent == 135 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 136 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('29.99');
    return $loButton;
  }
  if( repeatCurrent == 137 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 138 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('29.99');
    return $loButton;
  }
  if( repeatCurrent == 139 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 140 ){
    $("#double_your_btc_stake").val('0.00008192');
    $multiplier.val('29.99');
    return $loButton;
  }
  if( repeatCurrent == 141 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 142 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('29.99');
  return $loButton;
  }
  if( repeatCurrent == 143 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 144 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('29.99');
    return $loButton;
  }
  if( repeatCurrent == 145 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 146 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('29.99');
    return $loButton;
  }
  if( repeatCurrent == 147 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('128');
    return $loButton;
  }
  if( repeatCurrent == 148 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('29.99');
    return $loButton;
  }
  if( repeatCurrent == 149 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('4749');
    return $loButton;
  }
  if( repeatCurrent == 150 ){
    $("#double_your_btc_stake").val('0.00016384');
    $multiplier.val('29.99');
    return $loButton;
  }
}

// ------- ??1 ?? ---------
reset();
return $loButton;
}

function getRandomWait() {
  var wait = Math.floor(Math.random() * maxWait) +200; // ????
  console.log("Waiting for " + wait + "ms before next bet.");
  a = $("#balance").text(),
  UX = ((Number(a)-0.00025000) / 160 ).toFixed(8),
  b = $("#double_your_btc_stake").val(),
  UX2 = (Number(b*5)).toFixed(8);
  UX3 = (Number(b*2)).toFixed(8);
  return wait;
}

function startGame() {
  startbalance = $("#balance").text();
  console.log("Game started!");
  reset();
  $loButton.trigger("click");
}

function stopGame() {
  console.log("Game will stop soon! Let me finish.");
  stopped = true;
}

function reset(multiplier) {
  repeatCurrent = 0;
  $multiplier.val( start_multiplier );
  $("#double_your_btc_stake").val(startValue);
}

function deexponentize(number) {
  return number * 1e7;
}

function iHaveEnoughMoni() {
  var balance = deexponentize(parseFloat($("#balance").text()));
  var current = deexponentize($("#double_your_btc_stake").val());
  return balance * 2 / 100 * current * 2 > stopPercentage / 100;
}

function stopBeforeRedirect() {
  var minutes = parseInt($("title").text());
  if (minutes < stopBefore) {
    console.log("Approaching redirect! Stop the game so we don't get redirected while loosing.");
    stopGame();
    return true;
  }
  return false;
}


$("#double_your_btc_bet_lose").unbind();
$("#double_your_btc_bet_win").unbind();
var balance_prev = parseFloat( $("#balance").text() ) || 0;
$("#double_your_btc_bet_lose").bind("DOMSubtreeModified", function(event) {
  if ($(event.currentTarget).is(':contains("lose")')) {
    if($("#double_your_btc_stake").val() > maxBet){ maxBet = $
      ("#double_your_btc_stake").val();}
    gameLost = gameLost + 1;
    cLost = cLost + 1;
    cWin = 0;
    console.clear();
    console.log('%c???: ' + gameWin + ' ???: ' + gameLost, 'color: #FF0000');
    console.log('%c??: ' + cWin + ' ??: ' + cLost, 'color: #FF0000');
    console.log('%c??: ' +(Number($("#balance").text()) -
    Number(startbalance)).toFixed(8) , 'color: #FF0000');
    console.log('%c????: ' + maxBet, 'color: #FF0000');
    console.log('?????151??');
    console.log('??(?)100????');
    console.log('??(?)10????');
    var btn = multiply();

// ?
var balance_current = parseFloat( $("#balance").text() );
if( balance_prev ){
// ?????100??,?????
  if( balance_prev - balance_current >= 0.01){
    setTimeout(function() {
      balance_prev = balance_current;
      //btn.trigger("click");
      startGame();
      }, 1000 * 60 * 1440 ); // 1000??1?*60?*1?=????

  }else{
  setTimeout(function() {
  btn.trigger("click");
  }, getRandomWait());
}
}else{
  balance_prev = balance_current;
  setTimeout(function() {
    btn.trigger("click");
  }, getRandomWait());
}
// ????? end

  }
});

$("#double_your_btc_bet_win").bind("DOMSubtreeModified", function(event) {
  if ($(event.currentTarget).is(':contains("win")')) {
    if($("#double_your_btc_stake").val() > maxBet){ maxBet = $
      ("#double_your_btc_stake").val();}
    gameWin = gameWin + 1;
    cWin = cWin + 1;
    cLost = 0;
    console.clear();
    console.log('%c???: ' + gameWin + ' ???: ' + gameLost, 'color: #00CC00');
    console.log('%c??: ' + cWin + ' ??: ' + cLost, 'color: #00CC00');
    console.log('%c??: ' +(Number($("#balance").text()) -
    Number(startbalance)).toFixed(8) , 'color: #FF0000');
    console.log('%c????: ' + maxBet, 'color: #00CC00');
    console.log('?????151??');
    console.log('??(?)100????');
    console.log('??(?)10????');
    if (stopBeforeRedirect()) {
      return;
    }
    if (iHaveEnoughMoni()) {
      console.log("You WON! But don't be greedy. Restarting!");
      reset();
      if (stopped) {
        stopped = false;
        return false;
      }
    } else {
      console.log("You WON! Betting again");
    }

// ?
var balance_current = parseFloat( $("#balance").text() );
if( balance_prev ){
// ?????10???,??????
  if( balance_current - balance_prev >= 0.0010 ){
    setTimeout(function() {
      balance_prev = balance_current;
      //$hiButton.trigger("click");
      startGame();
      }, 1000 * 60 * 1440 ); // 1000??1?*60?*60?=????
  }else{
    setTimeout(function() {
      $hiButton.trigger("click");
    }, getRandomWait());
  }
}else{
  balance_prev = balance_current;
  setTimeout(function() {
    $hiButton.trigger("click");
  }, getRandomWait());
}
// ????? end
}
});
startGame();
