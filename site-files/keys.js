$(document).ready(function() {
	$("#test").click(function(){
		$('use').removeClass('pressed');
		$('use').removeClass('pressed-key');
	});
});

$(document).keyup(function(e) {
 	if ($("#test").prop("checked") !== true) {
		$('use').removeClass('pressed');
		$('use').removeClass('pressed-key');
	}
});

$(document).keydown(function(e) {
	// Первый ряд
	if(e.keyCode == 27) {
		$('#esc use').addClass('pressed-key');
		$('#esc-b use').addClass('pressed');
		$('#out').text('esc');
	};
	if(e.keyCode == 112) {
		$('#f1 use').addClass('pressed-key');
		$('#f1-b use').addClass('pressed');
		$('#out').text('f1');
	};
	if(e.keyCode == 113) {
		$('#f2 use').addClass('pressed-key');
		$('#f2-b use').addClass('pressed');
		$('#out').text('f2');
	};
	if(e.keyCode == 114) {
		$('#f3 use').addClass('pressed-key');
		$('#f3-b use').addClass('pressed');
		$('#out').text('f3');
	};
	if(e.keyCode == 115) {
		$('#f4 use').addClass('pressed-key');
		$('#f4-b use').addClass('pressed');
		$('#out').text('f4');
	};
	if(e.keyCode == 116) {
		$('#f5 use').addClass('pressed-key');
		$('#f5-b use').addClass('pressed');
		$('#out').text('f5');
	};
	if(e.keyCode == 117) {
		$('#f6 use').addClass('pressed-key');
		$('#f6-b use').addClass('pressed');
		$('#out').text('f6');
	};
	if(e.keyCode == 118) {
		$('#f7 use').addClass('pressed-key');
		$('#f7-b use').addClass('pressed');
		$('#out').text('f7');
	};
	if(e.keyCode == 119) {
		$('#f8 use').addClass('pressed-key');
		$('#f8-b use').addClass('pressed');
		$('#out').text('f8');
	};
	if(e.keyCode == 120) {
		$('#f9 use').addClass('pressed-key');
		$('#f9-b use').addClass('pressed');
		$('#out').text('f9');
	};
	if(e.keyCode == 121) {
		$('#f10 use').addClass('pressed-key');
		$('#f10-b use').addClass('pressed');
		$('#out').text('f10');
	};
	if(e.keyCode == 122) {
		$('#f11 use').addClass('pressed-key');
		$('#f11-b use').addClass('pressed');
		$('#out').text('f11');
	};
	if(e.keyCode == 123) {
		$('#f12 use').addClass('pressed-key');
		$('#f12-b use').addClass('pressed');
		$('#out').text('f12');
	};
	if(e.keyCode == 124) {
		$('#f13 use').addClass('pressed-key');
		$('#f14 use').addClass('pressed-key');
		$('#f15 use').addClass('pressed-key');
		$('#f13-b use').addClass('pressed');
		$('#f14-b use').addClass('pressed');
		$('#f15-b use').addClass('pressed');
		$('#out').text('f13—f15');
	};
	if(e.keyCode == 127) {
		$('#f16 use').addClass('pressed-key');
		$('#f16-b use').addClass('pressed');
		$('#out').text('f16');
	};
	if(e.keyCode == 128) {
		$('#f17 use').addClass('pressed-key');
		$('#f17-b use').addClass('pressed');
		$('#out').text('f17');
	};
	if(e.keyCode == 129) {
		$('#f18 use').addClass('pressed-key');
		$('#f18-b use').addClass('pressed');
		$('#out').text('f18');
	};
	if(e.keyCode == 130) {
		$('#f19 use').addClass('pressed-key');
		$('#f19-b use').addClass('pressed');
		$('#out').text('f19');
	};

	// Второй ряд
	if(e.keyCode == 192) {
		$('#paragraph use').addClass('pressed-key');
		$('#paragraph-b use').addClass('pressed');
		$('#out').text('§');
	};
	if(e.keyCode == 49) {
		$('#1 use').addClass('pressed-key');
		$('#1-b use').addClass('pressed');
		$('#num1 use').addClass('pressed-key');
		$('#num1-b use').addClass('pressed');
		$('#out').text('1');
	};
	if(e.keyCode == 50) {
		$('#2 use').addClass('pressed-key');
		$('#2-b use').addClass('pressed');
		$('#num2 use').addClass('pressed-key');
		$('#num2-b use').addClass('pressed');		
		$('#out').text('2');
	};
	if(e.keyCode == 51) {
		$('#3 use').addClass('pressed-key');
		$('#3-b use').addClass('pressed');
		$('#num3 use').addClass('pressed-key');
		$('#num3-b use').addClass('pressed');
		$('#out').text('3');
	};
	if(e.keyCode == 52) {
		$('#4 use').addClass('pressed-key');
		$('#4-b use').addClass('pressed');
		$('#num4 use').addClass('pressed-key');
		$('#num4-b use').addClass('pressed');
		$('#out').text('4');
	};
	if(e.keyCode == 53) {
		$('#5 use').addClass('pressed-key');
		$('#5-b use').addClass('pressed');
		$('#num5 use').addClass('pressed-key');
		$('#num5-b use').addClass('pressed');
		$('#out').text('5');
	};
	if(e.keyCode == 54) {
		$('#6 use').addClass('pressed-key');
		$('#6-b use').addClass('pressed');
		$('#num6 use').addClass('pressed-key');
		$('#num6-b use').addClass('pressed');
		$('#out').text('6');
	};
	if(e.keyCode == 55) {
		$('#7 use').addClass('pressed-key');
		$('#7-b use').addClass('pressed');
		$('#num7 use').addClass('pressed-key');
		$('#num7-b use').addClass('pressed');
		$('#out').text('7');
	};
	if(e.keyCode == 56) {
		$('#8 use').addClass('pressed-key');
		$('#8-b use').addClass('pressed');
		$('#num8 use').addClass('pressed-key');
		$('#num8-b use').addClass('pressed');
		$('#out').text('8');
	};
	if(e.keyCode == 57) {
		$('#9 use').addClass('pressed-key');
		$('#9-b use').addClass('pressed');
		$('#num9 use').addClass('pressed-key');
		$('#num9-b use').addClass('pressed');
		$('#out').text('9');
	};
	if(e.keyCode == 48) {
		$('#0 use').addClass('pressed-key');
		$('#0-b use').addClass('pressed');
		$('#num0 use').addClass('pressed-key');
		$('#num0-b use').addClass('pressed');
		$('#out').text('0');
	};
	if(e.keyCode == 189) {
		$('#dash use').addClass('pressed-key');
		$('#dash-b use').addClass('pressed');
		$('#out').text('-');
	};
	if(e.keyCode == 187) {
		$('#ravno use').addClass('pressed-key');
		$('#ravno-b use').addClass('pressed');
		$('#out').text('=');
	};
	if(e.keyCode == 8) {
		$('#backspace use').addClass('pressed-key');
		$('#backspace-b use').addClass('pressed');
		$('#out').text('backspace');
	};
	if(e.keyCode == 36) {
		event.preventDefault();
		$('#home use').addClass('pressed-key');
		$('#home-b use').addClass('pressed');
		$('#out').text('home');
	};
	if(e.keyCode == 35) {
		event.preventDefault();
		$('#end use').addClass('pressed-key');
		$('#end-b use').addClass('pressed');
		$('#out').text('end');
	};
	if(e.keyCode == 33) {
		event.preventDefault();
		$('#pageup use').addClass('pressed-key');
		$('#pageup-b use').addClass('pressed');
		$('#out').text('page up');
	};
	if(e.keyCode == 34) {
		event.preventDefault();
		$('#pagedown use').addClass('pressed-key');
		$('#pagedown-b use').addClass('pressed');
		$('#out').text('page down');
	};
	if(e.keyCode == 12) {
		$('#numlock use').addClass('pressed-key');
		$('#numlock-b use').addClass('pressed');
		$('#out').text('num lock');
	};
	if(e.keyCode == 111) {
		$('#slash-r use').addClass('pressed-key');
		$('#slash-r-b use').addClass('pressed');
		$('#out').text('slash');
	};
	if(e.keyCode == 106) {
		$('#star use').addClass('pressed-key');
		$('#star-b use').addClass('pressed');
		$('#out').text('*');
	};

	// Третий ряд
	if(e.keyCode == 9) {
		event.preventDefault();
		$('#tab use').addClass('pressed-key');
		$('#tab-b use').addClass('pressed');
		$('#out').text('tab');
	};
	if(e.keyCode == 219) {
		$('#figure-l use').addClass('pressed-key');
		$('#figure-l-b use').addClass('pressed');
		$('#out').text('[');
	};
	if(e.keyCode == 221) {
		$('#figure-r use').addClass('pressed-key');
		$('#figure-r-b use').addClass('pressed');
		$('#out').text(']');
	};
	if(e.keyCode == 13) {
		$('#enter use').addClass('pressed-key');
		$('#ent use').addClass('pressed');
		$('#numenter use').addClass('pressed-key');
		$('#numenter-b use').addClass('pressed');
		$('#out').text('enter');
	};
	if(e.keyCode == 46) {
		$('#delete use').addClass('pressed-key');
		$('#delete-b use').addClass('pressed');
		$('#out').text('delete');
	};
	if(e.keyCode == 109) {
		$('#minus use').addClass('pressed-key');
		$('#minus-b use').addClass('pressed');
		$('#out').text('minus');
	};

	// Буквы
	if(e.keyCode == 65) {
		$('#A use').addClass('pressed-key');
		$('#A-b use').addClass('pressed');
		$('#out').text('a');
	};
	if(e.keyCode == 66) {
		$('#B use').addClass('pressed-key');
		$('#B-b use').addClass('pressed');
		$('#out').text('b');
	};
	if(e.keyCode == 67) {
		$('#C use').addClass('pressed-key');
		$('#C-b use').addClass('pressed');
		$('#out').text('c');
	};
	if(e.keyCode == 68) {
		$('#D use').addClass('pressed-key');
		$('#D-b use').addClass('pressed');
		$('#out').text('d');
	};
	if(e.keyCode == 69) {
		$('#E use').addClass('pressed-key');
		$('#E-b use').addClass('pressed');
		$('#out').text('e');
	};
	if(e.keyCode == 70) {
		$('#F use').addClass('pressed-key');
		$('#F-b use').addClass('pressed');
		$('#out').text('f');
	};
	if(e.keyCode == 71) {
		$('#G use').addClass('pressed-key');
		$('#G-b use').addClass('pressed');
		$('#out').text('g');
	};
	if(e.keyCode == 72) {
		$('#H use').addClass('pressed-key');
		$('#H-b use').addClass('pressed');
		$('#out').text('h');
	};
	if(e.keyCode == 73) {
		$('#I use').addClass('pressed-key');
		$('#I-b use').addClass('pressed');
		$('#out').text('i');
	};
	if(e.keyCode == 74) {
		$('#J use').addClass('pressed-key');
		$('#J-b use').addClass('pressed');
		$('#out').text('j');
	};
	if(e.keyCode == 75) {
		$('#K use').addClass('pressed-key');
		$('#K-b use').addClass('pressed');
		$('#out').text('k');
	};
	if(e.keyCode == 76) {
		$('#L use').addClass('pressed-key');
		$('#L-b use').addClass('pressed');
		$('#out').text('l');
	};
	if(e.keyCode == 77) {
		$('#M use').addClass('pressed-key');
		$('#M-b use').addClass('pressed');
		$('#out').text('m');
	};
	if(e.keyCode == 78) {
		$('#N use').addClass('pressed-key');
		$('#N-b use').addClass('pressed');
		$('#out').text('n');
	};
	if(e.keyCode == 79) {
		$('#O use').addClass('pressed-key');
		$('#O-b use').addClass('pressed');
		$('#out').text('o');
	};
	if(e.keyCode == 80) {
		$('#P use').addClass('pressed-key');
		$('#P-b use').addClass('pressed');
		$('#out').text('p');
	};
	if(e.keyCode == 81) {
		$('#Q use').addClass('pressed-key');
		$('#Q-b use').addClass('pressed');
		$('#out').text('q');
	};
	if(e.keyCode == 82) {
		$('#R use').addClass('pressed-key');
		$('#R-b use').addClass('pressed');
		$('#out').text('r');
	};
	if(e.keyCode == 83) {
		$('#S use').addClass('pressed-key');
		$('#S-b use').addClass('pressed');
		$('#out').text('s');
	};
	if(e.keyCode == 84) {
		$('#T use').addClass('pressed-key');
		$('#T-b use').addClass('pressed');
		$('#out').text('t');
	};
	if(e.keyCode == 85) {
		$('#U use').addClass('pressed-key');
		$('#U-b use').addClass('pressed');
		$('#out').text('u');
	};
	if(e.keyCode == 86) {
		$('#V use').addClass('pressed-key');
		$('#V-b use').addClass('pressed');
		$('#out').text('v');
	};
	if(e.keyCode == 87) {
		$('#W use').addClass('pressed-key');
		$('#W-b use').addClass('pressed');
		$('#out').text('w');
	};
	if(e.keyCode == 88) {
		$('#X use').addClass('pressed-key');
		$('#X-b use').addClass('pressed');
		$('#out').text('x');
	};
	if(e.keyCode == 89) {
		$('#Y use').addClass('pressed-key');
		$('#Y-b use').addClass('pressed');
		$('#out').text('y');
	};
	if(e.keyCode == 90) {
		$('#Z use').addClass('pressed-key');
		$('#Z-b use').addClass('pressed');
		$('#out').text('z');
	};

	// Четвертый ряд
	if(e.keyCode == 20) {
		$('#capslock use').addClass('pressed-key');
		$('#capslock-b use').addClass('pressed');
		$('#out').text('caps lock');
	};
	if(e.keyCode == 186) {
		$('#tochkazpt use').addClass('pressed-key');
		$('#tochkazpt-b use').addClass('pressed');
		$('#out').text(';');
	};
	if(e.keyCode == 222) {
		$('#squote use').addClass('pressed-key');
		$('#squote-b use').addClass('pressed');
		$('#out').text("'");
	};
	if(e.keyCode == 220) {
		$('#slash-l use').addClass('pressed-key');
		$('#slash-l-b use').addClass('pressed');
		$('#out').text('backslash');
	};
	if(e.keyCode == 107) {
		$('#plus use').addClass('pressed-key');
		$('#plus-b use').addClass('pressed');
		$('#out').text('+');
	};

	// Пятый ряд
	if(e.keyCode == 16) {
		$('#shift use').addClass('pressed-key');
		$('#shift-b use').addClass('pressed');
		$('#out').text('shift');
	};
	if(e.keyCode == 188) {
		$('#comma use').addClass('pressed-key');
		$('#comma-b use').addClass('pressed');
		$('#out').text(',');
	};
	if(e.keyCode == 190) {
		$('#dot use').addClass('pressed-key');
		$('#dot-b use').addClass('pressed');
		$('#out').text('.');
	};
	if(e.keyCode == 191) {
		$('#question use').addClass('pressed-key');
		$('#question-b use').addClass('pressed');
		$('#out').text('slash');
	};

	// Шестой ряд
	if(e.keyCode == 17) {
		$('#ctrl use').addClass('pressed-key');
		$('#ctrl-b use').addClass('pressed');
		$('#out').text('control');
	};
	if(e.keyCode == 18) {
		$('#alt use').addClass('pressed-key');
		$('#alt-b use').addClass('pressed');
		$('#out').text('option');
	};
	if(e.keyCode == 91) {
		$('#cmd-l use').addClass('pressed-key');
		$('#cmd-l-b use').addClass('pressed');
		$('#out').text('command');
	};
	if(e.keyCode == 93) {
		$('#cmd-r use').addClass('pressed-key');
		$('#cmd-r-b use').addClass('pressed');
		$('#out').text('command');
	};
	if(e.keyCode == 32) {
		event.preventDefault();
		$('#space use').addClass('pressed-key');
		$('#space-b use').addClass('pressed');
		$('#out').text('space');
	};
	if(e.keyCode == 110) {
		$('#numdot use').addClass('pressed-key');
		$('#numdot-b use').addClass('pressed');
		$('#out').text('.');
	};
	if(e.keyCode == 37) {
		event.preventDefault();
		$('#left use').addClass('pressed-key');
		$('#left-b use').addClass('pressed');
		$('#out').text('left');
	};
	if(e.keyCode == 38) {
		event.preventDefault();
		$('#up use').addClass('pressed-key');
		$('#up-b use').addClass('pressed');
		$('#out').text('up');
	};
	if(e.keyCode == 39) {
		event.preventDefault();
		$('#right use').addClass('pressed-key');
		$('#right-b use').addClass('pressed');
		$('#out').text('right');
	};
	if(e.keyCode == 40) {
		event.preventDefault();
		$('#down use').addClass('pressed-key');
		$('#down-b use').addClass('pressed');
		$('#out').text('down');
	};
});