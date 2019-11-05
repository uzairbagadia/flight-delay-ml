'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Bagadia\\Desktop\\Flight-Delay-FY-Project\\pages\\insurances\\new.js?entry';


var InsuranceNew = function (_Component) {
    (0, _inherits3.default)(InsuranceNew, _Component);

    function InsuranceNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, InsuranceNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InsuranceNew.__proto__ || (0, _getPrototypeOf2.default)(InsuranceNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumAmount: '',
            departureTimestamp: '',
            airlineName: '',
            flightCode: '',
            errorMsg: '',
            loading: false,
            latestInsurance: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, latestInsurance;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMsg: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createInsurance(_this.state.minimumAmount * 1000000000, _this.state.departureTimestamp, _this.state.airlineName, _this.state.flightCode).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 10;
                                return _factory2.default.methods.getLatestInsurance().call();

                            case 10:
                                latestInsurance = _context.sent;

                                console.log(latestInsurance);
                                _this.setState({ latestInsurance: latestInsurance });

                                _routes.Router.pushRoute('/insurances/' + latestInsurance + '/depositshow');
                                _context.next = 19;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMsg: _context.t0.message });

                            case 19:

                                /*try{
                                    const latestInsurance = await factory.methods.getLatestInsurance().call();
                                    console.log(latestInsurance);
                                }catch(err){
                                    this.setState({errorMsg: err.message });
                                }*/
                                _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 16]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(InsuranceNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'New Insurance'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Amount'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'ether',
                labelPosition: 'right',
                value: this.state.minimumAmount,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumAmount: event.target.value });
                },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Arrival Time'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.departureTimestamp,
                onChange: function onChange(event) {
                    return _this3.setState({ departureTimestamp: event.target.value });
                },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'Airline Name'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.airlineName,
                onChange: function onChange(event) {
                    return _this3.setState({ airlineName: event.target.value });
                },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, 'Flight Code'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.flightCode,
                onChange: function onChange(event) {
                    return _this3.setState({ flightCode: event.target.value });
                },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, ' Create ')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var latestInsurance;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _factory2.default.methods.getLatestInsurance().call();

                            case 2:
                                latestInsurance = _context2.sent;
                                return _context2.abrupt('return', { latestInsurance: latestInsurance });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return InsuranceNew;
}(_react.Component);

exports.default = InsuranceNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnN1cmFuY2VzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIkxheW91dCIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiSW5zdXJhbmNlTmV3Iiwic3RhdGUiLCJtaW5pbXVtQW1vdW50IiwiZGVwYXJ0dXJlVGltZXN0YW1wIiwiYWlybGluZU5hbWUiLCJmbGlnaHRDb2RlIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwibGF0ZXN0SW5zdXJhbmNlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUluc3VyYW5jZSIsInNlbmQiLCJmcm9tIiwiZ2V0TGF0ZXN0SW5zdXJhbmNlIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFRLEFBQU0sQUFBTzs7QUFDN0IsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWE7Ozs7Ozs7SSxBQUd0Qjs7Ozs7Ozs7Ozs7Ozs7OzROLEFBTUY7MkJBQU8sQUFDVyxBQUNkO2dDQUZHLEFBRWlCLEFBQ3BCO3lCQUhHLEFBR1UsQUFDYjt3QkFKRyxBQUlTLEFBQ1o7c0JBTEcsQUFLTyxBQUNWO3FCQU5HLEFBTUssQUFDUjs2QkFQRyxBQU9hLEE7QUFQYixBQUNILGlCQVFKLEE7aUdBQVcsaUJBQUEsQUFBTyxPQUFQOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVUsTUFBTSxVQUZ2QixBQUVQLEFBQWMsQUFBeUI7Z0RBRmhDO2dEQUFBO3VDQUlvQixjQUFBLEFBQUssSUFKekIsQUFJb0IsQUFBUzs7aUNBQTFCO0FBSkgsb0RBQUE7Z0RBQUE7eURBTUksQUFBUSxRQUFSLEFBQWdCLGdCQUFnQixNQUFBLEFBQUssTUFBTCxBQUFXLGdCQUEzQyxBQUF5RCxZQUFXLE1BQUEsQUFBSyxNQUF6RSxBQUErRSxvQkFBbUIsTUFBQSxBQUFLLE1BQXZHLEFBQTZHLGFBQVksTUFBQSxBQUFLLE1BQTlILEFBQW9JLFlBQXBJLEFBQ047MENBQ1MsU0FSUCxBQU1JLEFBQ0QsQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FGRzs7aUNBTko7Z0RBQUE7dUNBWTBCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixxQkFaMUMsQUFZMEIsQUFBcUM7O2lDQUE3RDtBQVpGLDJEQWFIOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3NDQUFBLEFBQUssU0FBUyxFQUFDLGlCQUFmLEFBQWMsQUFBaUIsQUFJL0I7OytDQUFBLEFBQU8sMkJBQVAsQUFBZ0Msa0JBbEI3QjtnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFvQkg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFVBQVUsWUFwQnRCLEFBb0JILEFBQWMsQUFBZTs7aUNBSWpDOztBQU1BOzs7Ozs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0E5QlIsQUE4QlAsQUFBYyxBQUFTOztpQ0E5QmhCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBbUNIO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSxrQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFRLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7OEJBQXBEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwyQkFBQSxBQUFDO3VCQUFELEFBQ1EsQUFDUjsrQkFGQSxBQUVnQixBQUNoQjt1QkFBUyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNwQjswQkFDSSx5QkFBQTsyQkFDSSxPQUFBLEFBQUssU0FBUyxFQUFDLGVBQWUsTUFBQSxBQUFNLE9BRHhDLEFBQ0ksQUFBYyxBQUE2QjtBQU5uRDs7OzhCQUFBO2dDQUZKLEFBRUksQUFVQTtBQVZBO0FBQ0EsZ0NBU0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBWkosQUFZSSxBQUNBLGlDQUFBLEFBQUM7dUJBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDcEI7MEJBQ0kseUJBQUE7MkJBQ0ksT0FBQSxBQUFLLFNBQVMsRUFBQyxvQkFBb0IsTUFBQSxBQUFNLE9BRDdDLEFBQ0ksQUFBYyxBQUFrQztBQUp4RDs7OzhCQUFBO2dDQWJKLEFBYUksQUFRQTtBQVJBO0FBQ0EsZ0NBT0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBckJKLEFBcUJJLEFBQ0EsaUNBQUEsQUFBQzt1QkFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNwQjswQkFDSSx5QkFBQTsyQkFDSSxPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BRHRDLEFBQ0ksQUFBYyxBQUEyQjtBQUpqRDs7OzhCQUFBO2dDQXRCSixBQXNCSSxBQVFBO0FBUkE7QUFDQSxnQ0FPQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUE5QkosQUE4QkksQUFDQSxnQ0FBQSxBQUFDO3VCQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ3BCOzBCQUNJLHlCQUFBOzJCQUNJLE9BQUEsQUFBSyxTQUFTLEVBQUMsWUFBYSxNQUFBLEFBQU0sT0FEdEMsQUFDSSxBQUFjLEFBQTJCO0FBSmpEOzs7OEJBQUE7Z0NBaENSLEFBQ0ksQUErQkksQUFTSjtBQVRJO0FBQ0EsaUNBUUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUF1QixRQUFPLFNBQVcsS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0F6Q0osQUF5Q0ksQUFFSTtBQUZKO2dDQUVJLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBaERoQixBQUNJLEFBSUksQUEyQ1EsQUFRbkI7Ozs7Ozs7Ozs7Ozt1Q0F6R2lDLGtCQUFBLEFBQVEsUUFBUixBQUFnQixxQkFBcUIsQSxBQUFyQzs7aUNBQXhCO0E7a0VBQ0MsRUFBQyxpQixBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSFksQSxBQStHM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0JhZ2FkaWEvRGVza3RvcC9GbGlnaHQtRGVsYXktRlktUHJvamVjdCJ9