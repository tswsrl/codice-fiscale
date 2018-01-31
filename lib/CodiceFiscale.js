'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CodiceFiscale = function () {
	function CodiceFiscale() {
		_classCallCheck(this, CodiceFiscale);

		this.$dispari = {
			0: 1, 9: 21, I: 19, R: 8,
			1: 0, A: 1, J: 21, S: 12,
			2: 5, B: 0, K: 2, T: 14,
			3: 7, C: 5, L: 4, U: 16,
			4: 9, D: 7, M: 18, V: 10,
			5: 13, E: 9, N: 20, W: 22,
			6: 15, F: 13, O: 11, X: 25,
			7: 17, G: 15, P: 3, Y: 24,
			8: 19, H: 17, Q: 6, Z: 23
		};
		this.$pari = {
			0: 0, 9: 9, I: 8, R: 17,
			1: 1, A: 0, J: 9, S: 18,
			2: 2, B: 1, K: 10, T: 19,
			3: 3, C: 2, L: 11, U: 20,
			4: 4, D: 3, M: 12, V: 21,
			5: 5, E: 4, N: 13, W: 22,
			6: 6, F: 5, O: 14, X: 23,
			7: 7, G: 6, P: 15, Y: 24,
			8: 8, H: 7, Q: 16, Z: 25
		};

		this.$control = {
			0: 'A', 7: 'H', 14: 'O', 21: 'V',
			1: 'B', 8: 'I', 15: 'P', 22: 'W',
			2: 'C', 9: 'J', 16: 'Q', 23: 'X',
			3: 'D', 10: 'K', 17: 'R', 24: 'Y',
			4: 'E', 11: 'L', 18: 'S', 25: 'Z',
			5: 'F', 12: 'M', 19: 'T',
			6: 'G', 13: 'N', 20: 'U'
		};
	}

	_createClass(CodiceFiscale, [{
		key: 'controllo',
		value: function controllo($fifteen) {
			$fifteen = $fifteen.toUpperCase();
			var $tmp = 0;
			for (var $i = 1; $i <= 15; $i += 1) {
				$tmp += this['$' + ($i % 2 === 0 ? '' : 'dis') + 'pari'][$fifteen.charAt($i - 1)];
			}

			return this.$control[$tmp % 26];
		}
	}, {
		key: 'check',
		value: function check($sixteen) {
			return this.controllo($sixteen.substr(0, 15)) === $sixteen.substr(-1);
		}
	}, {
		key: 'guess',
		value: function guess($fifteen) {
			return '' + $fifteen + this.controllo($fifteen);
		}
	}]);

	return CodiceFiscale;
}();

module.exports = CodiceFiscale;