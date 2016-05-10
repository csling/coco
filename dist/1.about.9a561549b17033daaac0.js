webpackJsonp([1],{

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.About = undefined;
	
	var _getPrototypeOf = __webpack_require__(357);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(362);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(363);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(367);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(402);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _About = __webpack_require__(436);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _reactFontawesome = __webpack_require__(412);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var About = exports.About = function (_React$Component) {
	  (0, _inherits3.default)(About, _React$Component);
	
	  function About(props) {
	    (0, _classCallCheck3.default)(this, About);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(About).call(this, props));
	
	    _this.state = {
	      selectedPane: 0
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(About, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      this.setState({ selectedPane: parseInt(e.target.getAttribute('data-link-id'), 0) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _About2.default.aboutContainer },
	        _react2.default.createElement(
	          'div',
	          { className: _About2.default.navSidebarContainer },
	          _react2.default.createElement(
	            'a',
	            { className: this.state.selectedPane === 0 ? _About2.default.navSidebarTabActive : _About2.default.navSidebarTab,
	              'data-link-id': '0',
	              onClick: function onClick(e) {
	                return _this2.handleClick(e);
	              } },
	            'Our Mission'
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: this.state.selectedPane === 1 ? _About2.default.navSidebarTabActive : _About2.default.navSidebarTab,
	              'data-link-id': '1',
	              onClick: function onClick(e) {
	                return _this2.handleClick(e);
	              } },
	            'Our Story'
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: this.state.selectedPane === 2 ? _About2.default.navSidebarTabActive : _About2.default.navSidebarTab,
	              'data-link-id': '2',
	              onClick: function onClick(e) {
	                return _this2.handleClick(e);
	              } },
	            'FAQs'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.state.selectedPane === 0 ? _About2.default.aboutPaneActive : _About2.default.aboutPane },
	          _react2.default.createElement(
	            'div',
	            { className: _About2.default.paneTitle },
	            'Our Mission'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _About2.default.paneContent },
	            _react2.default.createElement(
	              'p',
	              null,
	              'Nothing wrong with washing your brush. Now we\'ll take the almighty fan brush. We spend so much of our life looking - but never seeing. Let\'s put some happy trees and bushes back in here. See there, told you that would be easy. Let\'s have a little bit of fun today.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'We don\'t have to be committed. We are just playing here. These little son of a guns hide in your brush and you just have to push them out. You can do anything your heart can imagine. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. Sometimes you learn more from your mistakes than you do from your masterpieces. Just relax and let it flow. That easy.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Get away from those little Christmas tree things we used to make in school. Very easy to work these to death. We have a fantastic little sky! Anyone can paint. In life you need colors. We don\'t have anything but happy trees here.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'I guess I\'m a little weird. I like to talk to trees and animals. That\'s okay though; I have more fun than most people. It just happens - whether or not you worried about it or tried to plan it. Let\'s do that again. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger.'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.state.selectedPane === 1 ? _About2.default.aboutPaneActive : _About2.default.aboutPane },
	          _react2.default.createElement(
	            'div',
	            { className: _About2.default.paneTitle },
	            'Our Story'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _About2.default.paneContent },
	            _react2.default.createElement(
	              'div',
	              { className: _About2.default.profilePanels },
	              _react2.default.createElement(
	                'div',
	                { className: _About2.default.profilePanel },
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileAvatar },
	                  _react2.default.createElement(_reactFontawesome2.default, { className: _About2.default.avatarImage, name: 'user' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileName },
	                  'Misha Vargas'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileText },
	                  _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Transitioned from the bench to sales'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Generally swell guy'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Was viciously heckled at his own wedding'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Loves the Simpsons and is fighting to keep New Haverbrook on the map'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Self-proclaimed best sumo wrestler in LA'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Stupidly likes all teams from Oakland even though they\'re awful and never win anything'
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _About2.default.profilePanel },
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileAvatar },
	                  _react2.default.createElement(_reactFontawesome2.default, { className: _About2.default.avatarImage, name: 'user' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileName },
	                  'Christian Ling'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileText },
	                  _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Computer-science-grad-turned-lawyer-turned-software-developer'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Recovering karaoke addict'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Responsible for this website (but only the good parts; bugs and broken features are Taylor and Misha\'s fault!)'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Fairweather fan of the sports teams from whatever city he\'s currently in'
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _About2.default.profilePanel },
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileAvatar },
	                  _react2.default.createElement(_reactFontawesome2.default, { className: _About2.default.avatarImage, name: 'user' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileName },
	                  'Taylor Hollenbeck'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: _About2.default.profileText },
	                  _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Husband of a lawyer'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Made career transitions from Psychology to Marketing to Sales to Marketing'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Was the one heckling Misha at his wedding'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Hopes it was Flanders'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Recently traveled the world, going to 12 countries'
	                    ),
	                    _react2.default.createElement(
	                      'li',
	                      null,
	                      'Correctly likes all the teams from San Francisco. Three World Series Championships in five years'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.state.selectedPane === 2 ? _About2.default.aboutPaneActive : _About2.default.aboutPane },
	          _react2.default.createElement(
	            'div',
	            { className: _About2.default.paneTitle },
	            'FAQs'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _About2.default.paneContent },
	            _react2.default.createElement(
	              'p',
	              null,
	              'The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. We\'ll play with clouds today. Be careful. You can always add more - but you can\'t take it away. You don\'t have to spend all your time thinking about what you\'re doing, you just let it happen. Just go back and put one little more happy tree in there. Don\'t be afraid to make these big decisions. Once you start, they sort of just make themselves.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Here\'s something that\'s fun. Just pretend you are a whisper floating across a mountain. Let\'s put a touch more of the magic here.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'All you need to paint is a few tools, a little instruction, and a vision in your mind. Even the worst thing we can do here is good. Now let\'s put some happy little clouds in here. And I will hypnotize that just a little bit.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'This is the fun part Just make little strokes like that. Let\'s get crazy. Nothing wrong with washing your brush. Pretend you\'re water. Just floating without any effort. Having a good day. If what you\'re doing doesn\'t make you happy - you\'re doing the wrong thing.'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return About;
	}(_react2.default.Component);
	
	exports.default = About;

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(437);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(350)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(437, function() {
				var newContent = __webpack_require__(437);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(349)();
	// imports
	
	
	// module
	exports.push([module.id, ".About__rc-slider___1aglc{position:relative;height:4px;width:100%;border-radius:6px;background-color:#e9e9e9}.About__rc-slider___1aglc,.About__rc-slider___1aglc *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}.About__rc-slider-track___2I4Iq{position:absolute;left:0;height:4px;border-radius:6px;background-color:#abe2fb;z-index:1}.About__rc-slider-handle___cdxpe{position:absolute;margin-left:-7px;margin-top:-5px;width:14px;height:14px;cursor:pointer;border-radius:50%;border:2px solid #96dbfa;background-color:#fff;z-index:2}.About__rc-slider-handle___cdxpe:hover{border-color:#57c5f7}.About__rc-slider-handle-active___1pjqc:active{border-color:#57c5f7;box-shadow:0 0 5px #57c5f7}.About__rc-slider-mark___1Sv2S{position:absolute;top:10px;left:0;width:100%;font-size:12px;z-index:3}.About__rc-slider-mark-text___3oewJ{position:absolute;display:inline-block;vertical-align:middle;text-align:center;cursor:pointer;color:#999}.About__rc-slider-mark-text-active___3Boud{color:#666}.About__rc-slider-step___1tGfK{position:absolute;width:100%;height:4px;background:transparent;z-index:1}.About__rc-slider-dot___1LR19{position:absolute;bottom:-2px;width:8px;height:8px;border:2px solid #e9e9e9;background-color:#fff;cursor:pointer;border-radius:50%;vertical-align:middle}.About__rc-slider-dot___1LR19,.About__rc-slider-dot___1LR19:first-child,.About__rc-slider-dot___1LR19:last-child{margin-left:-4px}.About__rc-slider-dot-active___2qvs7{border-color:#96dbfa}.About__rc-slider-disabled___Q_9g3{background-color:#e9e9e9}.About__rc-slider-disabled___Q_9g3 .About__rc-slider-track___2I4Iq{background-color:#ccc}.About__rc-slider-disabled___Q_9g3 .About__rc-slider-dot___1LR19,.About__rc-slider-disabled___Q_9g3 .About__rc-slider-handle___cdxpe{border-color:#ccc;background-color:#fff;cursor:default}.About__rc-slider-disabled___Q_9g3 .About__rc-slider-dot___1LR19,.About__rc-slider-disabled___Q_9g3 .About__rc-slider-mark-text___3oewJ{cursor:default!important}.About__rc-slider-vertical___2nx9R{width:4px;height:100%}.About__rc-slider-vertical___2nx9R .About__rc-slider-track___2I4Iq{bottom:0;width:4px}.About__rc-slider-vertical___2nx9R .About__rc-slider-handle___cdxpe{position:absolute;margin-left:-5px;margin-bottom:-7px}.About__rc-slider-vertical___2nx9R .About__rc-slider-mark___1Sv2S{top:0;left:10px;height:100%}.About__rc-slider-vertical___2nx9R .About__rc-slider-step___1tGfK{height:100%;width:4px}.About__rc-slider-vertical___2nx9R .About__rc-slider-dot___1LR19{left:2px;margin-bottom:-4px}.About__rc-slider-vertical___2nx9R .About__rc-slider-dot___1LR19:first-child,.About__rc-slider-vertical___2nx9R .About__rc-slider-dot___1LR19:last-child{margin-bottom:-4px}.About__rc-slider-tooltip-zoom-down-appear___2wPfr,.About__rc-slider-tooltip-zoom-down-enter___2j2_B,.About__rc-slider-tooltip-zoom-down-leave___4lUgL{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:block!important;-webkit-animation-play-state:paused;animation-play-state:paused}.About__rc-slider-tooltip-zoom-down-appear___2wPfr.About__rc-slider-tooltip-zoom-down-appear-active___1LW5q,.About__rc-slider-tooltip-zoom-down-enter___2j2_B.About__rc-slider-tooltip-zoom-down-enter-active___3See9{-webkit-animation-name:About__rcSliderTooltipZoomDownIn___1htG1;animation-name:About__rcSliderTooltipZoomDownIn___1htG1;-webkit-animation-play-state:running;animation-play-state:running}.About__rc-slider-tooltip-zoom-down-leave___4lUgL.About__rc-slider-tooltip-zoom-down-leave-active___3EzBW{-webkit-animation-name:About__rcSliderTooltipZoomDownOut___THWDW;animation-name:About__rcSliderTooltipZoomDownOut___THWDW;-webkit-animation-play-state:running;animation-play-state:running}.About__rc-slider-tooltip-zoom-down-appear___2wPfr,.About__rc-slider-tooltip-zoom-down-enter___2j2_B{-webkit-transform:scale(0);transform:scale(0);-webkit-animation-timing-function:cubic-bezier(.23,1,.32,1);animation-timing-function:cubic-bezier(.23,1,.32,1)}.About__rc-slider-tooltip-zoom-down-leave___4lUgL{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}@-webkit-keyframes About__rcSliderTooltipZoomDownIn___1htG1{0%{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}}@keyframes About__rcSliderTooltipZoomDownIn___1htG1{0%{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes About__rcSliderTooltipZoomDownOut___THWDW{0%{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}}@keyframes About__rcSliderTooltipZoomDownOut___THWDW{0%{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:scale(0);transform:scale(0)}}.About__rc-tooltip___lX-Di{position:absolute;left:-9999px;top:-9999px;z-index:4;visibility:visible}.About__rc-tooltip___lX-Di,.About__rc-tooltip___lX-Di *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}.About__rc-tooltip-hidden___5XiAf{display:none}.About__rc-tooltip-placement-top___2EAYO{padding:4px 0 8px}.About__rc-tooltip-inner___2W4nj{padding:6px 2px;min-width:24px;height:24px;font-size:12px;line-height:1;color:#fff;text-align:center;text-decoration:none;background-color:#6c6c6c;border-radius:6px;box-shadow:0 0 4px #d9d9d9}.About__rc-tooltip-arrow___Q71Ur{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.About__rc-tooltip-placement-top___2EAYO .About__rc-tooltip-arrow___Q71Ur{bottom:4px;left:50%;margin-left:-4px;border-width:4px 4px 0;border-top-color:#6c6c6c}.About__aboutContainer___20Jhn{margin:0 20px}.About__navSidebarContainer___3AgQE{display:inline-block;margin-bottom:10px;width:100%}.About__navSidebarTab___2ztCo{cursor:pointer}.About__navSidebarTab___2ztCo,.About__navSidebarTabActive___3voT4{clear:left;display:inline-block;float:left;font-family:Helvetica Neue;font-size:30px;text-transform:uppercase;width:auto}.About__navSidebarTabActive___3voT4{color:#23527c;cursor:default;text-decoration:underline}.About__aboutPane___ui175{display:none;margin-bottom:25px;opacity:0}.About__aboutPaneActive___3HzwM{-webkit-animation:About__fadeInPane___27pPH .5s linear;animation:About__fadeInPane___27pPH .5s linear;display:block;margin-bottom:25px;opacity:1}.About__paneTitle___30T3f{font-family:Helvetica Neue;font-size:30px;margin-bottom:10px}.About__paneContent___2f3Ko{text-align:justify}.About__profilePanels___2Vt_I{display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:30px}.About__profilePanel___TbyLj{-webkit-flex-basis:0px;-ms-flex-preferred-size:0px;flex-basis:0px;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.About__profileAvatar___SYKBP{border:1px solid grey;margin:30px auto;height:100px;text-align:center;width:100px}.About__avatarImage___LH2Ig{font-size:100px}.About__profileName___1Eb6p{font-size:20px;text-align:center}.About__profileText___1Sk_p{border:1px solid grey;margin:30px 20px}.About__profileText___1Sk_p>ul{padding:15px 30px}@-webkit-keyframes About__fadeInPane___27pPH{0%{-webkit-filter:blur(2px);filter:blur(2px);opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{-webkit-filter:blur(0);filter:blur(0);opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes About__fadeInPane___27pPH{0%{-webkit-filter:blur(2px);filter:blur(2px);opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{-webkit-filter:blur(0);filter:blur(0);opacity:1;-webkit-transform:translate(0);transform:translate(0)}}", "", {"version":3,"sources":["/./src/routes/About/src/styles/packages/_rc-slider.scss","/./src/routes/About/src/routes/About/components/About.scss"],"names":[],"mappings":"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","file":"About.scss","sourcesContent":[".rc-slider {\n  position: relative;\n  height: 4px;\n  width: 100%;\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n  z-index: 1;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  z-index: 2;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle-active:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n  z-index: 3;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n  z-index: 1;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot:first-child {\n  margin-left: -4px;\n}\n.rc-slider-dot:last-child {\n  margin-left: -4px;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  background-color: #fff;\n  cursor: default;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: default !important;\n}\n.rc-slider-vertical {\n  width: 4px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-track {\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  position: absolute;\n  margin-left: -5px;\n  margin-bottom: -7px;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 10px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 4;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip-hidden {\n  display: none;\n}\n.rc-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n","@import '../../../styles/base';\n\n// ABOUT PAGE CONTAINER\n.aboutContainer {\n  margin: 0px 20px;\n}\n\n// SIDEBAR STYLES\n.navSidebarContainer {\n  display: inline-block;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.navSidebarTab {\n  clear: left;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  font-family: $sidebar-font-family;\n  font-size: 30px;\n  text-transform: uppercase;\n  width: auto;\n}\n\n.navSidebarTabActive {\n  clear: left;\n  color: #23527c;\n  cursor: default;\n  display: inline-block;\n  float: left;\n  font-family: $sidebar-font-family;\n  font-size: 30px;\n  text-decoration: underline;\n  text-transform: uppercase;\n  width: auto;\n}\n\n// PANES\n\n.aboutPane {\n  display: none;\n  margin-bottom: 25px;\n  opacity: 0;\n}\n\n.aboutPaneActive {\n  animation: fadeInPane 0.5s linear;\n  display: block;\n  margin-bottom: 25px;\n  opacity: 1;\n}\n\n.paneTitle {\n  font-family: $header-font-family;\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n\n.paneContent {\n  text-align: justify;\n}\n\n// PROFILE PANELS\n.profilePanels {\n  display: flex;\n  margin-top: 30px;\n}\n\n.profilePanel {\n  flex-basis: 0px;\n  flex-grow: 1;\n}\n\n.profileAvatar {\n  border: 1px solid grey;\n  margin: 30px auto;\n  height: 100px;\n  text-align: center;\n  width: 100px;\n}\n\n.avatarImage {\n  font-size: 100px;\n}\n\n.profileName {\n  font-size: 20px;\n  text-align: center;\n}\n\n.profileText {\n  border: 1px solid grey;\n  margin: 30px 20px;\n}\n\n.profileText > ul {\n  padding: 15px 30px;\n}\n\n// ANIMATIONS\n@keyframes fadeInPane {\n  0%   {filter: blur(2px); opacity: 0; transform: translate(0px, 20px)}\n  100% {filter: blur(0px); opacity: 1; transform: translate(0px, 0px)}\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"rc-slider": "About__rc-slider___1aglc",
		"rc-slider-track": "About__rc-slider-track___2I4Iq",
		"rc-slider-handle": "About__rc-slider-handle___cdxpe",
		"rc-slider-handle-active": "About__rc-slider-handle-active___1pjqc",
		"rc-slider-mark": "About__rc-slider-mark___1Sv2S",
		"rc-slider-mark-text": "About__rc-slider-mark-text___3oewJ",
		"rc-slider-mark-text-active": "About__rc-slider-mark-text-active___3Boud",
		"rc-slider-step": "About__rc-slider-step___1tGfK",
		"rc-slider-dot": "About__rc-slider-dot___1LR19",
		"rc-slider-dot-active": "About__rc-slider-dot-active___2qvs7",
		"rc-slider-disabled": "About__rc-slider-disabled___Q_9g3",
		"rc-slider-vertical": "About__rc-slider-vertical___2nx9R",
		"rc-slider-tooltip-zoom-down-appear": "About__rc-slider-tooltip-zoom-down-appear___2wPfr",
		"rc-slider-tooltip-zoom-down-enter": "About__rc-slider-tooltip-zoom-down-enter___2j2_B",
		"rc-slider-tooltip-zoom-down-leave": "About__rc-slider-tooltip-zoom-down-leave___4lUgL",
		"rc-slider-tooltip-zoom-down-appear-active": "About__rc-slider-tooltip-zoom-down-appear-active___1LW5q",
		"rc-slider-tooltip-zoom-down-enter-active": "About__rc-slider-tooltip-zoom-down-enter-active___3See9",
		"rcSliderTooltipZoomDownIn": "About__rcSliderTooltipZoomDownIn___1htG1",
		"rc-slider-tooltip-zoom-down-leave-active": "About__rc-slider-tooltip-zoom-down-leave-active___3EzBW",
		"rcSliderTooltipZoomDownOut": "About__rcSliderTooltipZoomDownOut___THWDW",
		"rc-tooltip": "About__rc-tooltip___lX-Di",
		"rc-tooltip-hidden": "About__rc-tooltip-hidden___5XiAf",
		"rc-tooltip-placement-top": "About__rc-tooltip-placement-top___2EAYO",
		"rc-tooltip-inner": "About__rc-tooltip-inner___2W4nj",
		"rc-tooltip-arrow": "About__rc-tooltip-arrow___Q71Ur",
		"aboutContainer": "About__aboutContainer___20Jhn",
		"navSidebarContainer": "About__navSidebarContainer___3AgQE",
		"navSidebarTab": "About__navSidebarTab___2ztCo",
		"navSidebarTabActive": "About__navSidebarTabActive___3voT4",
		"aboutPane": "About__aboutPane___ui175",
		"aboutPaneActive": "About__aboutPaneActive___3HzwM",
		"fadeInPane": "About__fadeInPane___27pPH",
		"paneTitle": "About__paneTitle___30T3f",
		"paneContent": "About__paneContent___2f3Ko",
		"profilePanels": "About__profilePanels___2Vt_I",
		"profilePanel": "About__profilePanel___TbyLj",
		"profileAvatar": "About__profileAvatar___SYKBP",
		"avatarImage": "About__avatarImage___LH2Ig",
		"profileName": "About__profileName___1Eb6p",
		"profileText": "About__profileText___1Sk_p"
	};

/***/ }

});
//# sourceMappingURL=1.about.9a561549b17033daaac0.js.map