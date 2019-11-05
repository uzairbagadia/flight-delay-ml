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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Bagadia\\Desktop\\Flight-Delay-FY-Project\\pages\\index.js?entry';


var InsuranceIndex = function (_Component) {
    (0, _inherits3.default)(InsuranceIndex, _Component);

    function InsuranceIndex() {
        (0, _classCallCheck3.default)(this, InsuranceIndex);

        return (0, _possibleConstructorReturn3.default)(this, (InsuranceIndex.__proto__ || (0, _getPrototypeOf2.default)(InsuranceIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(InsuranceIndex, [{
        key: 'componentDidMount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var insurances, date, timestamp;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedInsurances().call();

                            case 2:
                                insurances = _context.sent;
                                date = new Date();
                                timestamp = date.getTime();

                                console.log(timestamp);

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'renderInsurances',
        value: function renderInsurances() {
            // this is static will have view video 155 again once we deploy on rinkeby
            var items = this.props.insurances.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/insurances/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    }, 'View Insurance')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            });
        }

        /*  const items = [
              {
                header: 'Project Report - April',
                description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
                meta: 'ROI: 30%',
                fluid: true
              },
              {
                header: 'Project Report - May',
                description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
                meta: 'ROI: 34%',
                fluid: true
              },
              {
                header: 'Project Report - June',
                description:
                  'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
                meta: 'ROI: 27%',
                fluid: true
              },
            ]
              return <Card.Group items = {items}/>
        }*/

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, ' Available Insurances'), _react2.default.createElement(_routes.Link, { route: '/insurances/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: ' Create Insurance',
                icon: ' add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }))), this.renderInsurances()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var insurances;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _factory2.default.methods.getDeployedInsurances().call();

                            case 2:
                                insurances = _context2.sent;
                                return _context2.abrupt('return', { insurances: insurances });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return InsuranceIndex;
}(_react.Component);

exports.default = InsuranceIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkluc3VyYW5jZUluZGV4IiwibWV0aG9kcyIsImdldERlcGxveWVkSW5zdXJhbmNlcyIsImNhbGwiLCJpbnN1cmFuY2VzIiwiZGF0ZSIsIkRhdGUiLCJ0aW1lc3RhbXAiLCJnZXRUaW1lIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwicHJvcHMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckluc3VyYW5jZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFRLEFBQU07O0FBQ2QsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUVuQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQU8wQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isd0JBQWhCLEEsQUFBd0M7O2lDQUEzRDtBLHNEQUNGO0EsdUNBQU8sSUFBSSxBLEFBQUosQUFDTjtBLDRDQUFZLEtBQUEsQUFBSyxBLEFBRXJCOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUVFLEFBQ2Q7QUFDQTtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsSUFDaEMsbUJBQVcsQUFDUDs7NEJBQU8sQUFDSyxBQUNSO2lEQUNJLEFBQUMsOEJBQUssd0JBQU4sQUFBNEI7c0NBQTVCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkwsQUFHQyxBQUNJLEFBR1I7MkJBUEosQUFBTyxBQU9JLEFBRWQ7QUFUVSxBQUNIO0FBSFosQUFBYyxBQWFkLGFBYmM7aURBYVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFxQjs4QkFBckI7Z0NBQVAsQUFBTyxBQUNOO0FBRE07YUFBQTtBQUtUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQXlCTSxBQUNKO21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUk7QUFGSjtBQUFBLGFBQUEsa0JBRUksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsdURBQ1UsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQURKLEFBQ0ksQUFDSTtBQURKO2dDQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZSLEFBRVEsQUFFQSwwQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFBRCxBQUNjLEFBQ1Y7eUJBRkosQUFFWSxBQUNSO3NCQUhKLEFBR1MsQUFDTDt5QkFKSixBQUlhOzs4QkFKYjtnQ0FOaEIsQUFJUSxBQUNJLEFBQ0ksQUFRTjtBQVJNO0FBQ0ksdUJBVnhCLEFBQ0EsQUFFSSxBQWNVLEFBQUssQUFHdEI7Ozs7Ozs7Ozs7Ozt1Q0E3RTRCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix3QkFBaEIsQSxBQUF3Qzs7aUNBQTNEO0E7a0VBQ0MsRUFBQyxZQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIYyxBLEFBbUY3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9CYWdhZGlhL0Rlc2t0b3AvRmxpZ2h0LURlbGF5LUZZLVByb2plY3QifQ==