module.exports = `Error: node_modules/babel-plugin-transform-react-remove-prop-types/src/index.js:83
 83:             const plugin = require(pluginName);
                                ^^^^^^^^^^^^^^^^^^^ The parameter passed to require() must be a literal string.

Error: node_modules/jss/lib/SheetsRegistry.js.flow:14
       v--------------------
 14:   get index(): number {
 15:     return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index
 16:   }
       ^ Potentially unsafe get/set usage. Getters and setters with side effects are potentially unsafe and disabled by default. You may opt-in to using them anyway by putting \`unsafe.enable_getters_and_setters=true\` into the [options] section of your .flowconfig.

Error: node_modules/jss/lib/renderers/DomRenderer.js.flow:15
 15: function getStyle(rule: HTMLElement|CSSStyleRule, prop: string): string {
                                         ^^^^^^^^^^^^ identifier \`CSSStyleRule\`. Could not resolve name

Error: node_modules/jss/lib/renderers/DomRenderer.js.flow:51
 51: function getSelector(rule: CSSOMRule): string {
                                ^^^^^^^^^ identifier \`CSSOMRule\`. Could not resolve name

Error: node_modules/jss/lib/renderers/DomRenderer.js.flow:128
128:       return node
                  ^^^^ Node. This type is incompatible with
123: function findCommentNode(text: string): Comment|null {
                                             ^^^^^^^^^^^^ union: Comment | null
  Member 1:
  123: function findCommentNode(text: string): Comment|null {
                                               ^^^^^^^ Comment
  Error:
  128:       return node
                    ^^^^ Node. This type is incompatible with
  123: function findCommentNode(text: string): Comment|null {
                                               ^^^^^^^ Comment
  Member 2:
  123: function findCommentNode(text: string): Comment|null {
                                                       ^^^^ null
  Error:
  128:       return node
                    ^^^^ Node. This type is incompatible with
  123: function findCommentNode(text: string): Comment|null {
                                                       ^^^^ null

Error: node_modules/jss/lib/rules/ConditionalRule.js.flow:19
 19:   renderable: ?CSSStyleRule
                    ^^^^^^^^^^^^ identifier \`CSSStyleRule\`. Could not resolve name

Error: node_modules/jss/lib/rules/FontFaceRule.js.flow:16
 16:   renderable: ?CSSStyleRule
                    ^^^^^^^^^^^^ identifier \`CSSStyleRule\`. Could not resolve name

Error: node_modules/jss/lib/rules/KeyframesRule.js.flow:19
 19:   renderable: ?CSSStyleRule
                    ^^^^^^^^^^^^ identifier \`CSSStyleRule\`. Could not resolve name

Error: node_modules/jss/lib/rules/SimpleRule.js.flow:15
 15:   renderable: ?CSSStyleRule
                    ^^^^^^^^^^^^ identifier \`CSSStyleRule\`. Could not resolve name

Error: node_modules/jss/lib/rules/StyleRule.js.flow:19
 19:   renderable: ?CSSStyleRule
                    ^^^^^^^^^^^^ identifier \`CSSStyleRule\`. Could not resolve name

Error: node_modules/jss/lib/rules/StyleRule.js.flow:38
       v-------------------------------------
 38:   set selector(selector: string): void {
 39:     const {sheet} = this.options
 40: 
...:
 69:   }
       ^ Potentially unsafe get/set usage. Getters and setters with side effects are potentially unsafe and disabled by default. You may opt-in to using them anyway by putting \`unsafe.enable_getters_and_setters=true\` into the [options] section of your .flowconfig.

Error: node_modules/jss/lib/rules/StyleRule.js.flow:74
       v-----------------------
 74:   get selector(): string {
 75:     if (this.renderable) {
 76:       return this.renderer.getSelector(this.renderable)
...:
 80:   }
       ^ Potentially unsafe get/set usage. Getters and setters with side effects are potentially unsafe and disabled by default. You may opt-in to using them anyway by putting \`unsafe.enable_getters_and_setters=true\` into the [options] section of your .flowconfig.

Error: node_modules/jss/lib/rules/ViewportRule.js.flow:16
 16:   renderable: ?CSSStyleRule
                    ^^^^^^^^^^^^ identifier \`CSSStyleRule\`. Could not resolve name

Error: node_modules/jss/lib/types.js.flow:26
 26:   setStyle(rule: HTMLElement|CSSStyleRule, prop: string, value: string): boolean;
                                  ^^^^^^^^^^^^ identifier \`CSSStyleRule\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/injectGlobal.test.js:17
 17: describe('injectGlobal', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/injectGlobal.test.js:18
 18:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/injectGlobal.test.js:22
 22:   it(\`should inject rules into the head\`, () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/keyframes.test.js:13
 13: describe('keyframes', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/keyframes.test.js:14
 14:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/keyframes.test.js:19
 19:   it('should return its name', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/keyframes.test.js:20
 20:     expect(keyframes\`
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/styled.test.js:5
  5: describe('styled', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/styled.test.js:6
  6:   it('should have all valid HTML5 elements defined as properties', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/constructors/test/styled.test.js:8
  8:       expect(styled[domElement]).toBeTruthy()
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/hoc/withTheme.js:10
 10: const wrapWithTheme = (Component: ReactClass<any>) => {
                                       ^^^^^^^^^^^^^^^ identifier \`ReactClass\`. Could not resolve name

Error: node_modules/styled-components/src/hoc/withTheme.js:19
 19:   class WithTheme extends React.Component {
                               ^^^^^^^^^^^^^^^ property \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/hoc/withTheme.js:29
 29:     state: { theme?: ?Object } = {};
                ^^^^^^^^^^^^^^^^^^^ object type. This type is incompatible with
 29: declare class React$Component<Props, State = void> {
                                                  ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/hoc/withTheme.js:39
 39:         this.setState({ theme })
             ^^^^^^^^^^^^^^^^^^^^^^^^ call of method \`setState\`
 39:         this.setState({ theme })
                           ^^^^^^^^^ object literal. This type is incompatible with
 38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ union: undefined | function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Member 1:
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Error:
   39:         this.setState({ theme })
                             ^^^^^^^^^ property \`theme\` of object literal. Property cannot be assigned on possibly undefined value
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Member 2:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Error:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. Callable signature not found in. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
   39:         this.setState({ theme })
                             ^^^^^^^^^ object literal

Error: node_modules/styled-components/src/models/AbstractStyledComponent.js:8
  8: export default class AbstractStyledComponent extends Component {
                                                          ^^^^^^^^^ identifier \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/models/AbstractStyledComponent.js:10
              v
 10:   state: {
 11:     theme: any,
 12:     generatedClassName?: string,
 13:     generatedStyles?: any
 14:   }
       ^ object type. This type is incompatible with
 29: declare class React$Component<Props, State = void> {
                                                  ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/models/StyleSheet.js:18
 18:   toReactElement(key: string): React.Element<*>,
                                    ^^^^^^^^^^^^^^^^ Element. Property not found in
                              v-
234:   declare export default {|
235:     +DOM: typeof DOM,
236:     +PropTypes: typeof PropTypes,
...:
248:   |};
       -^ object type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:234

Error: node_modules/styled-components/src/models/StyleSheet.js:135
       v----------------------
135:   static get instance() {
136:     return instance || (instance = StyleSheet.create())
137:   }
       ^ Potentially unsafe get/set usage. Getters and setters with side effects are potentially unsafe and disabled by default. You may opt-in to using them anyway by putting \`unsafe.enable_getters_and_setters=true\` into the [options] section of your .flowconfig.

Error: node_modules/styled-components/src/models/StyleSheetManager.js:6
  6: class StyleSheetManager extends Component {
                                     ^^^^^^^^^ identifier \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/models/StyledComponent.js:93
 93:           const { defaultProps } = this.constructor
                       ^^^^^^^^^^^^ property \`defaultProps\`. Property not found in
 93:           const { defaultProps } = this.constructor
                                        ^^^^ statics of BaseStyledComponent

Error: node_modules/styled-components/src/models/StyledComponent.js:97
 97:           this.setState({ theme, generatedClassName })
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ call of method \`setState\`
 97:           this.setState({ theme, generatedClassName })
                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal. This type is incompatible with
 38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ union: undefined | function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Member 1:
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Error:
   97:           this.setState({ theme, generatedClassName })
                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ property \`generatedClassName\` of object literal. Property cannot be assigned on possibly undefined value
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Member 2:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Error:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. Callable signature not found in. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
   97:           this.setState({ theme, generatedClassName })
                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal

Error: node_modules/styled-components/src/models/StyledComponent.js:105
105:         this.setState({ theme, generatedClassName })
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ call of method \`setState\`
105:         this.setState({ theme, generatedClassName })
                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal. This type is incompatible with
 38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ union: undefined | function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Member 1:
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Error:
  105:         this.setState({ theme, generatedClassName })
                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ property \`generatedClassName\` of object literal. Property cannot be assigned on possibly undefined value
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Member 2:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Error:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. Callable signature not found in. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  105:         this.setState({ theme, generatedClassName })
                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal

Error: node_modules/styled-components/src/models/StyledComponent.js:110
           v----------------------------
110:       this.setState((oldState) => {
111:         // Props should take precedence over ThemeProvider, which should take precedence over
112:         // defaultProps, but React automatically puts defaultProps on props.
...:
119:       })
           -^ call of method \`setState\`
118:         return { theme, generatedClassName }
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal. This type is incompatible with
 38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                                          ^^^^^^^^^^^^^^^^^^^^ union: undefined(s). See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Member 1:
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Error:
  118:         return { theme, generatedClassName }
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ property \`generatedClassName\` of object literal. Property cannot be assigned on possibly undefined value
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Member 2:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                                                            ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Error:
  118:         return { theme, generatedClassName }
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal. This type is incompatible with
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                                                            ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38

Error: node_modules/styled-components/src/models/StyledComponent.js:113
113:         const { defaultProps } = this.constructor
                     ^^^^^^^^^^^^ property \`defaultProps\`. Property not found in
113:         const { defaultProps } = this.constructor
                                      ^^^^ statics of BaseStyledComponent

Error: node_modules/styled-components/src/models/StyledComponent.js:115
115:         const theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme
                                                                                           ^^^^^ property \`theme\`. Property cannot be accessed on possibly undefined value
115:         const theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme
                                                                                  ^^^^^^^^ undefined

Error: node_modules/styled-components/src/models/StyledComponent.js:229
           v--------------------
229:       static get extend() {
230:         const {
231:           rules: rulesFromOptions,
...:
249:       }
           ^ Potentially unsafe get/set usage. Getters and setters with side effects are potentially unsafe and disabled by default. You may opt-in to using them anyway by putting \`unsafe.enable_getters_and_setters=true\` into the [options] section of your .flowconfig.

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:63
 63:           const { defaultProps } = this.constructor
                       ^^^^^^^^^^^^ property \`defaultProps\`. Property not found in
 63:           const { defaultProps } = this.constructor
                                        ^^^^ statics of BaseStyledNativeComponent

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:67
 67:           this.setState({ theme, generatedStyles })
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ call of method \`setState\`
 67:           this.setState({ theme, generatedStyles })
                             ^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal. This type is incompatible with
 38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ union: undefined | function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Member 1:
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Error:
   67:           this.setState({ theme, generatedStyles })
                               ^^^^^^^^^^^^^^^^^^^^^^^^^^ property \`generatedStyles\` of object literal. Property cannot be assigned on possibly undefined value
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Member 2:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Error:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. Callable signature not found in. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
   67:           this.setState({ theme, generatedStyles })
                               ^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:75
 75:         this.setState({ theme, generatedStyles })
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ call of method \`setState\`
 75:         this.setState({ theme, generatedStyles })
                           ^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal. This type is incompatible with
 38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ union: undefined | function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Member 1:
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Error:
   75:         this.setState({ theme, generatedStyles })
                             ^^^^^^^^^^^^^^^^^^^^^^^^^^ property \`generatedStyles\` of object literal. Property cannot be assigned on possibly undefined value
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Member 2:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Error:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. Callable signature not found in. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
   75:         this.setState({ theme, generatedStyles })
                             ^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:80
           v----------------------------
 80:       this.setState((oldState) => {
 81:         // Props should take precedence over ThemeProvider, which should take precedence over
 82:         // defaultProps, but React automatically puts defaultProps on props.
...:
 89:       })
           -^ call of method \`setState\`
 88:         return { theme, generatedStyles }
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal. This type is incompatible with
 38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                                          ^^^^^^^^^^^^^^^^^^^^ union: undefined(s). See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Member 1:
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Error:
   88:         return { theme, generatedStyles }
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^ property \`generatedStyles\` of object literal. Property cannot be assigned on possibly undefined value
   29: declare class React$Component<Props, State = void> {
                                                    ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29
  Member 2:
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                                                            ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38
  Error:
   88:         return { theme, generatedStyles }
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^ object literal. This type is incompatible with
   38:     partialState: $Shape<State> | ((State, Props) => $Shape<State> | void),
                                                                            ^^^^ undefined. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:38

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:83
 83:         const { defaultProps } = this.constructor
                     ^^^^^^^^^^^^ property \`defaultProps\`. Property not found in
 83:         const { defaultProps } = this.constructor
                                      ^^^^ statics of BaseStyledNativeComponent

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:85
 85:         const theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme
                                                                                           ^^^^^ property \`theme\`. Property cannot be accessed on possibly undefined value
 85:         const theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme
                                                                                  ^^^^^^^^ undefined

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:109
109:           \`Check whether the stateless functional component is passing on innerRef as a ref in \${displayName}.\`,
                                                                                                      ^^^^^^^^^^^ null. This type cannot be coerced to
109:           \`Check whether the stateless functional component is passing on innerRef as a ref in \${displayName}.\`,
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ string

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:109
109:           \`Check whether the stateless functional component is passing on innerRef as a ref in \${displayName}.\`,
                                                                                                      ^^^^^^^^^^^ undefined. This type cannot be coerced to
109:           \`Check whether the stateless functional component is passing on innerRef as a ref in \${displayName}.\`,
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ string

Error: node_modules/styled-components/src/models/StyledNativeComponent.js:183
           v--------------------
183:       static get extend() {
184:         const {
185:           displayName: _,
...:
206:       }
           ^ Potentially unsafe get/set usage. Getters and setters with side effects are potentially unsafe and disabled by default. You may opt-in to using them anyway by putting \`unsafe.enable_getters_and_setters=true\` into the [options] section of your .flowconfig.

Error: node_modules/styled-components/src/models/ThemeProvider.js:23
 23: class ThemeProvider extends Component {
                                 ^^^^^^^^^ identifier \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:8
  8: describe('ThemeProvider', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:9
  9:   it('should not throw an error when no children are passed', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:11
 11:     expect(result.html()).toEqual(null)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:25
 25:     expect(renderedComp.contains(child)).toEqual(true)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:32
 32:     class Child extends React.Component {
                             ^^^^^^^^^^^^^^^ property \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:35
 35:           expect(theme).toEqual({ ...outerTheme, ...innerTheme })
               ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:59
 59:     class Child extends React.Component {
                             ^^^^^^^^^^^^^^^ property \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:62
 62:           expect(theme).toEqual({ ...outerestTheme, ...outerTheme, ...innerTheme })
               ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:90
 90:     class Child extends React.Component {
                             ^^^^^^^^^^^^^^^ property \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/models/test/ThemeProvider.test.js:94
 94:           expect(theme).toEqual(themes[this.props.shouldHaveTheme])
               ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/native/index.js:4
  4: import reactNative from 'react-native'
                             ^^^^^^^^^^^^^^ react-native. Required module not found

Error: node_modules/styled-components/src/no-parser/test/basic.test.js:9
  9: describe('basic', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/basic.test.js:10
 10:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/basic.test.js:14
 14:   it('should throw a meaningful error when called with null', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/basic.test.js:17
 17:       expect(() => {
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/basic.test.js:22
 22:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                                                                       ^^^^ empty array literal. This type cannot be coerced to
 22:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ string

Error: node_modules/styled-components/src/no-parser/test/basic.test.js:22
 22:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                                                                       ^^^^ null. This type cannot be coerced to
 22:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ string

Error: node_modules/styled-components/src/no-parser/test/basic.test.js:22
 22:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                                                                       ^^^^ undefined. This type cannot be coerced to
 22:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ string

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:4
  4: describe('preparsed flatten without executionContext', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:5
  5:   it('doesnt merge strings', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:6
  6:     expect(flatten([['foo', 'bar', 'baz']])).toEqual([['foo', 'bar', 'baz']])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:11
 11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:11
 11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                 ^^^^^ boolean. This type is incompatible with
  5:   Array<Interpolation>
             ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/types.js:5
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                   ^^^^^ boolean. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                   ^^^^^ boolean. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                   ^^^^^ boolean. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                   ^^^^^ boolean. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:11
 11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                               ^^^^^^^^^ undefined. This type is incompatible with
  5:   Array<Interpolation>
             ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/types.js:5
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                 ^^^^^^^^^ undefined. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                 ^^^^^^^^^ undefined. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                 ^^^^^^^^^ undefined. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                 ^^^^^^^^^ undefined. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:11
 11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                                 ^^^^ null. This type is incompatible with
  5:   Array<Interpolation>
             ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/types.js:5
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                                   ^^^^ null. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                                   ^^^^ null. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                                   ^^^^ null. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   11:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]])).toEqual([['foo', 'bar', 'baz']])
                                                                   ^^^^ null. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:15
 15:     expect(flatten([['foo', 0, 'bar', NaN, 'baz', -1]])).toEqual([['foo', '0', 'bar', 'NaN', 'baz', '-1']])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:20
 20:     expect(flatten([[1, true]])).toEqual([['1', 'true']])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:20
 20:     expect(flatten([[1, true]])).toEqual([['1', 'true']])
                ^^^^^^^^^^^^^^^^^^^^ function call
 20:     expect(flatten([[1, true]])).toEqual([['1', 'true']])
                             ^^^^ boolean. This type is incompatible with
  5:   Array<Interpolation>
             ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/types.js:5
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   20:     expect(flatten([[1, true]])).toEqual([['1', 'true']])
                               ^^^^ boolean. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   20:     expect(flatten([[1, true]])).toEqual([['1', 'true']])
                               ^^^^ boolean. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   20:     expect(flatten([[1, true]])).toEqual([['1', 'true']])
                               ^^^^ boolean. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   20:     expect(flatten([[1, true]])).toEqual([['1', 'true']])
                               ^^^^ boolean. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:36
 36:     expect(
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:44
 44:     expect(
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:52
 52:     expect(flatten([[1, 2, [3, 4, 5], 'come:on;', 'lets:ride;']]))
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:59
 59:     expect(flatten([['foo', func, 'baz']])).toEqual([['foo', func, 'baz']])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:64
 64:   it('merges strings', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:65
 65:     expect(flatten([['foo', 'bar', 'baz']], {})).toEqual(['foobarbaz'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:70
 70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:70
 70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                 ^^^^^ boolean. This type is incompatible with
  5:   Array<Interpolation>
             ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/types.js:5
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                   ^^^^^ boolean. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                   ^^^^^ boolean. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                   ^^^^^ boolean. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                   ^^^^^ boolean. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:70
 70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                               ^^^^^^^^^ undefined. This type is incompatible with
  5:   Array<Interpolation>
             ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/types.js:5
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                 ^^^^^^^^^ undefined. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                 ^^^^^^^^^ undefined. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                 ^^^^^^^^^ undefined. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                 ^^^^^^^^^ undefined. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:70
 70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                                 ^^^^ null. This type is incompatible with
  5:   Array<Interpolation>
             ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/types.js:5
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                                   ^^^^ null. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                                   ^^^^ null. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                                   ^^^^ null. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   70:     expect(flatten([['foo', false, 'bar', undefined, 'baz', null]], {})).toEqual(['foobarbaz'])
                                                                   ^^^^ null. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:74
 74:     expect(flatten([['foo', 0, 'bar', NaN, 'baz', -1]], {})).toEqual(['foo0barNaNbaz-1'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:79
 79:     expect(flatten([[1, true]], {})).toEqual(['1true'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:79
 79:     expect(flatten([[1, true]], {})).toEqual(['1true'])
                ^^^^^^^^^^^^^^^^^^^^^^^^ function call
 79:     expect(flatten([[1, true]], {})).toEqual(['1true'])
                             ^^^^ boolean. This type is incompatible with
  5:   Array<Interpolation>
             ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/types.js:5
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   79:     expect(flatten([[1, true]], {})).toEqual(['1true'])
                               ^^^^ boolean. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   79:     expect(flatten([[1, true]], {})).toEqual(['1true'])
                               ^^^^ boolean. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   79:     expect(flatten([[1, true]], {})).toEqual(['1true'])
                               ^^^^ boolean. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   79:     expect(flatten([[1, true]], {})).toEqual(['1true'])
                               ^^^^ boolean. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:96
 96:     expect(
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:104
104:     expect(
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:112
112:     expect(flatten([[1, 2, [3, 4, 5], 'come:on;', 'lets:ride;']], {}))
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:118
118:     expect(flatten([['foo', func, 'baz']], {})).toEqual(['foobarbaz'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:123
123:     expect(flatten([['foo', func, 'baz']], {})).toEqual(['foobaz', 'add me to the end'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/flatten.test.js:128
128:     expect(flatten([['foo', func, 'baz']], {})).toEqual(['foobaz', 'a', 'b'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/keyframes.test.js:13
 13: describe('keyframes', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/keyframes.test.js:14
 14:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/no-parser/test/keyframes.test.js:18
 18:   it('should correctly assemble preprocessed CSS', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/primitives/index.js:4
  4: import reactPrimitives from 'react-primitives'
                                 ^^^^^^^^^^^^^^^^^^ react-primitives. Required module not found

Error: node_modules/styled-components/src/test/attrs.test.js:9
  9: describe('attrs', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:10
 10:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:14
 14:   it('work fine with an empty object', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:16
 16:     expect(shallow(<Comp />).html()).toEqual('<div class="sc-a b"></div>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:23
 23:     expect(shallow(<Comp />).html()).toEqual('<button type="button" class="sc-a b"></button>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:30
 30:     expect(shallow(<Comp />).html()).toEqual('<button type="button" class="sc-a b"></button>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:37
 37:     expect(shallow(<Comp />).html()).toEqual('<button type="button" class="sc-a b"></button>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:46
 46:     expect(shallow(<Comp />).html()).toEqual(
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:61
 61:     expect(shallow(<Comp />).html()).toEqual(
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:70
 70:     expect(shallow(<Comp />).html()).toEqual(
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:83
 83:     expect(shallow(<Comp />).html()).toEqual('<div data-foo="bar" aria-label="A simple FooBar" class="sc-a b"></div>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:93
 93:     expect(shallow(<Comp />).html()).toEqual('<button type="submit" tabindex="0" class="sc-a b"></button>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:104
104:     expect(shallow(<Child />).html()).toEqual('<button type="submit" tabindex="0" class="sc-b c"></button>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:118
118:     expect(shallow(<Comp />).html()).toEqual('<a href="#" class="sc-a b"></a>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:126
126:     expect(shallow(<Comp />).html()).toEqual('<div class="sc-a b">Probably a bad idea</div>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:133
133:     expect(shallow(<Comp />).html()).toEqual('<div class="sc-a b"><span>Probably a bad idea</span></div>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/attrs.test.js:140
140:     expect(shallow(<Comp>Something else</Comp>).html()).toEqual('<div class="sc-a b">Something else</div>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/basic.test.js:9
  9: describe('basic', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/basic.test.js:13
 13:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/basic.test.js:17
 17:   it('should not throw an error when called', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/basic.test.js:24
 24:       expect(() => {
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/basic.test.js:29
 29:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                                                                       ^^^^ empty array literal. This type cannot be coerced to
 29:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ string

Error: node_modules/styled-components/src/test/basic.test.js:29
 29:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                                                                       ^^^^ null. This type cannot be coerced to
 29:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ string

Error: node_modules/styled-components/src/test/basic.test.js:29
 29:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                                                                       ^^^^ undefined. This type cannot be coerced to
 29:       }).toThrow(\`Cannot create styled-component for component: \${comp}\`)
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ string

Error: node_modules/styled-components/src/test/basic.test.js:65
 65:     expect(StyledTag.displayName).toBe('styled.div')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/basic.test.js:92
 92:       class Wrapper extends Component {
                                 ^^^^^^^^^ identifier \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/test/basic.test.js:109
109:     class InnerComponent extends Component {
                                      ^^^^^^^^^ identifier \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/test/basic.test.js:118
118:       class Wrapper extends Component {
                                 ^^^^^^^^^ identifier \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/test/basic.test.js:137
137:       class Wrapper extends Component {
                                 ^^^^^^^^^ identifier \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/test/basic.test.js:144
144:       expect(wrapper.find(InnerComponent).prop('className'))
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/basic.test.js:152
152:       class Wrapper extends Component {
                                 ^^^^^^^^^ identifier \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/test/css.test.js:9
  9: describe('css features', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/css.test.js:10
 10:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/css.test.js:14
 14:   it('should add vendor prefixes in the right order', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:9
  9: describe('expanded api', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:13
 13:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:18
 18:     it('should be auto-generated if none passed', () => {
         ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:20
 20:       expect(Comp.displayName).toBe('styled.div')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:25
 25:       expect(Comp.displayName).toBe('Comp')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:30
 30:     it('should be generated as "sc" + hash', () => {
         ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:33
 33:       expect(Comp.styledComponentId).toBe('sc-a')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:42
 42:       expect(Comp.styledComponentId).toBe('Comp-a')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:51
 51:       expect(Comp.styledComponentId).toBe('LOLOMG')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:60
 60:       expect(Comp.styledComponentId).toBe('Comp-LOLOMG')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:74
 74:       expect(Comp.styledComponentId).toBe('Comp-LOLOMG')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:84
 84:       expect(Comp.styledComponentId).toBe('Comp-OMGLOL-h1')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:92
 92:     it('should merge the options strings', () => {
         ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:97
 97:       expect(Comp.displayName).toBe('dn-2')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/expanded-api.test.js:106
106:       expect(Comp.displayName).toBe('dn-5')
           ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:10
 10: describe('extending', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:14
 14:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:18
 18:   it('should generate empty classes with no styles', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:116
116:     expect(Child.propTypes).toEqual(Parent.propTypes)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:126
126:     expect(Child.fetchData).toBeTruthy()
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:137
137:     expect(Child.fetchData).toBeTruthy()
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:179
179:     expect(shallow(<Child />).html()).toEqual('<span class="sc-b c"></span>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:190
190:     expect(shallow(<Child />).html()).toEqual('<span class="sc-c d"></span>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/extending.test.js:204
204:     expect(shallow(<Child />).html()).toEqual('<a href="/test" class="sc-c d"></a>')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/overriding.test.js:9
  9: describe('extending', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/overriding.test.js:13
 13:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/overriding.test.js:17
 17:   it('should let you use another component in a css rule', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/props.test.js:9
  9: describe('props', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/props.test.js:10
 10:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/props.test.js:14
 14:   it('should execute interpolations and fall back', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/styles.test.js:9
  9: describe('with styles', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/styles.test.js:13
 13:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/styles.test.js:20
 20:   it('should append a style', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/styles.test.js:192
192:     Array.from(document.querySelectorAll('style')).forEach(el => expect(el.getAttribute('nonce')).toBe('foo'))
                                                                      ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:11
 11: describe('theming', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:12
 12:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:16
 16:   it('should inject props.theme into a styled component', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:210
210:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:214
214:   it('should properly render with the same theme from default props on re-render', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:298
298:     expect(wrapper.find('div').prop('className')).toBe('sc-a b')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:319
319:     expect(wrapper.find('div').text()).toBe('black')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:339
339:     expect(wrapper.find('div').text()).toBe('black')
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:378
378:     class MyComponent extends React.Component {
                                   ^^^^^^^^^^^^^^^ property \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/test/theme.test.js:384
384:     expect(MyComponentWithTheme.myStaticProperty).toBe(true)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:388
388:     class Comp extends React.Component {
                            ^^^^^^^^^^^^^^^ property \`Component\`. Too few type arguments. Expected at least 1
 29: declare class React$Component<Props, State = void> {
                                   ^^^^^^^^^^^^ See type parameters of definition here. See lib: /private/tmp/flow/flowlib_24613c2e/react.js:29

Error: node_modules/styled-components/src/test/theme.test.js:395
395:     const ref = jest.fn()
                     ^^^^ identifier \`jest\`. Could not resolve name

Error: node_modules/styled-components/src/test/theme.test.js:413
413:     const ref = jest.fn()
                     ^^^^ identifier \`jest\`. Could not resolve name

Error: node_modules/styled-components/src/test/utils.js:74
 74:     expect(stripped).toEqual(stripWhitespace(expectation))
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/utils.js:77
 77:     expect(css).toEqual(expectation)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/warnTooManyClasses.test.js:10
 10: describe('warn too many classes', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/test/warnTooManyClasses.test.js:16
 16:   beforeEach(() => {
       ^^^^^^^^^^ identifier \`beforeEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/warnTooManyClasses.test.js:22
 22:   afterEach(() => {
       ^^^^^^^^^ identifier \`afterEach\`. Could not resolve name

Error: node_modules/styled-components/src/test/warnTooManyClasses.test.js:26
 26:   it('should warn once', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/test/warnTooManyClasses.test.js:33
 33:     expect(warnCallCount).toEqual(1)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/warnTooManyClasses.test.js:43
 43:     expect(warnCallCount).toEqual(1)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/test/warnTooManyClasses.test.js:54
 54:     expect(warnCallCount).toEqual(0)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/types.js:11
 11: export type Target = string | ReactClass<*>
                                   ^^^^^^^^^^^^^ identifier \`ReactClass\`. Could not resolve name

Error: node_modules/styled-components/src/utils/getComponentName.js:4
  4: export default function getComponentName(target: ReactClass<*>): string {
                                                      ^^^^^^^^^^^^^ identifier \`ReactClass\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:4
  4: describe('flatten', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:5
  5:   it('doesnt merge strings', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:6
  6:     expect(flatten(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:10
 10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:10
 10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                ^^^^^ boolean. This type is incompatible with
 17: const flatten = (chunks: Array<Interpolation>, executionContext: ?Object): Array<Interpolation> => (
                                    ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/utils/flatten.js:17
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                  ^^^^^ boolean. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                  ^^^^^ boolean. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                  ^^^^^ boolean. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                  ^^^^^ boolean. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/utils/test/flatten.test.js:10
 10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                              ^^^^^^^^^ undefined. This type is incompatible with
 17: const flatten = (chunks: Array<Interpolation>, executionContext: ?Object): Array<Interpolation> => (
                                    ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/utils/flatten.js:17
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                ^^^^^^^^^ undefined. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                ^^^^^^^^^ undefined. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                ^^^^^^^^^ undefined. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                ^^^^^^^^^ undefined. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/utils/test/flatten.test.js:10
 10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                                ^^^^ null. This type is incompatible with
 17: const flatten = (chunks: Array<Interpolation>, executionContext: ?Object): Array<Interpolation> => (
                                    ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/utils/flatten.js:17
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                                  ^^^^ null. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                                  ^^^^ null. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                                  ^^^^ null. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   10:     expect(flatten(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz'])
                                                                  ^^^^ null. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/utils/test/flatten.test.js:13
 13:     expect(flatten(['foo', 0, 'bar', NaN, 'baz', -1])).toEqual(['foo', '0', 'bar', 'NaN', 'baz', '-1'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:17
 17:     expect(flatten([1, true])).toEqual(['1', 'true'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:17
 17:     expect(flatten([1, true])).toEqual(['1', 'true'])
                ^^^^^^^^^^^^^^^^^^ function call
 17:     expect(flatten([1, true])).toEqual(['1', 'true'])
                            ^^^^ boolean. This type is incompatible with
 17: const flatten = (chunks: Array<Interpolation>, executionContext: ?Object): Array<Interpolation> => (
                                    ^^^^^^^^^^^^^ union: function type | string | number | array type. See: node_modules/styled-components/src/utils/flatten.js:17
  Member 1:
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Error:
   17:     expect(flatten([1, true])).toEqual(['1', 'true'])
                              ^^^^ boolean. This type is incompatible with
    2: export type Interpolation = ((executionContext: Object) => Interpolation) |
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/styled-components/src/types.js:2
  Member 2:
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Error:
   17:     expect(flatten([1, true])).toEqual(['1', 'true'])
                              ^^^^ boolean. This type is incompatible with
    3:   string |
         ^^^^^^ string. See: node_modules/styled-components/src/types.js:3
  Member 3:
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Error:
   17:     expect(flatten([1, true])).toEqual(['1', 'true'])
                              ^^^^ boolean. This type is incompatible with
    4:   number |
         ^^^^^^ number. See: node_modules/styled-components/src/types.js:4
  Member 4:
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5
  Error:
   17:     expect(flatten([1, true])).toEqual(['1', 'true'])
                              ^^^^ boolean. This type is incompatible with
    5:   Array<Interpolation>
         ^^^^^^^^^^^^^^^^^^^^ array type. See: node_modules/styled-components/src/types.js:5

Error: node_modules/styled-components/src/utils/test/flatten.test.js:56
 56:     expect(flatten([1, 2, [3, 4, 5], 'come:on;', 'lets:ride;'])).toEqual(['1', '2', '3', '4', '5', 'come:on;', 'lets:ride;'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:61
 61:     expect(flatten(['foo', func, 'baz'])).toEqual(['foo', func, 'baz'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:66
 66:     expect(flatten(['foo', func, 'baz'], { bool: true })).toEqual(['foo', 'bar', 'baz'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:70
 70:     expect(flatten(['foo', func], { bool: true })).toEqual(['foo', 'bar'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/flatten.test.js:75
 75:     expect(flatten(['foo', func], { bool: true })).toEqual(['foo', 'static', 'bar'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/generateAlphabeticName.test.js:4
  4: describe('generateAlphabeticName', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/generateAlphabeticName.test.js:5
  5:   it('should create alphabetic names for number input data', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/generateAlphabeticName.test.js:6
  6:     expect(generateAlphabeticName(1000000000)).toEqual('cGNYzm');
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/interleave.test.js:4
  4: describe('interleave', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/interleave.test.js:5
  5:   it('blindly interleave', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/interleave.test.js:6
  6:     expect(interleave([], [])).toEqual([undefined])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/interleave.test.js:12
 12:     expect(interleave(['foo', 'bar'], [])).toEqual(['foo'])
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/validAttr.test.js:4
  4: describe('validAttr', () => {
     ^^^^^^^^ identifier \`describe\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/validAttr.test.js:5
  5:   it('should allow all the reactProps', () => {
       ^^ identifier \`it\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/validAttr.test.js:6
  6:     expect(validAttr('children')).toEqual(true)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/validAttr.test.js:22
 22:     expect(validAttr('accept')).toEqual(true)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/validAttr.test.js:167
167:     expect(validAttr('accentHeight')).toEqual(true)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/validAttr.test.js:408
408:     expect(validAttr('data-xyz')).toEqual(true)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/validAttr.test.js:414
414:     expect(validAttr('DATA-XYZ')).toEqual(true)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/styled-components/src/utils/test/validAttr.test.js:420
420:     expect(validAttr('onCopy')).toEqual(true)
         ^^^^^^ identifier \`expect\`. Could not resolve name

Error: node_modules/stylelint/lib/assignDisabledRanges.js:23
 23: ) /*: postcss$result*/ {
           ^^^^^^^^^^^^^^ identifier \`postcss$result\`. Could not resolve name

Error: node_modules/stylelint/lib/assignDisabledRanges.js:36
 36:   function processDisableLineCommand(comment /*: postcss$comment*/) {
                                                      ^^^^^^^^^^^^^^^ identifier \`postcss$comment\`. Could not resolve name

Error: node_modules/stylelint/lib/augmentConfig.js:16
 16:   stylelint /*: stylelint$internalApi*/,
                     ^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$internalApi\`. Could not resolve name

Error: node_modules/stylelint/lib/augmentConfig.js:17
 17:   config /*: stylelint$config*/,
                  ^^^^^^^^^^^^^^^^ identifier \`stylelint$config\`. Could not resolve name

Error: node_modules/stylelint/lib/augmentConfig.js:133
133:   processors /*: stylelint$configProcessors*/,
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$configProcessors\`. Could not resolve name

Error: node_modules/stylelint/lib/createStylelint.js:16
 16:   options /*: stylelint$options*/
                   ^^^^^^^^^^^^^^^^^ identifier \`stylelint$options\`. Could not resolve name

Error: node_modules/stylelint/lib/createStylelint.js:17
 17: ) /*: stylelint$internalApi*/ {
           ^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$internalApi\`. Could not resolve name

Error: node_modules/stylelint/lib/createStylelintResult.js:6
  6:   stylelint /*: stylelint$internalApi*/,
                     ^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$internalApi\`. Could not resolve name

Error: node_modules/stylelint/lib/createStylelintResult.js:9
  9: ) /*: Promise<stylelint$result>*/ {
                   ^^^^^^^^^^^^^^^^ identifier \`stylelint$result\`. Could not resolve name

Error: node_modules/stylelint/lib/getConfigForFile.js:7
  7: /*:: type configPromise = Promise<?{ config: stylelint$config, filepath: string }>*/
                                                  ^^^^^^^^^^^^^^^^ identifier \`stylelint$config\`. Could not resolve name

Error: node_modules/stylelint/lib/getConfigForFile.js:10
 10:   stylelint /*: stylelint$internalApi*/,
                     ^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$internalApi\`. Could not resolve name

Error: node_modules/stylelint/lib/getPostcssResult.js:15
 15:   stylelint /*: stylelint$internalApi*/
                     ^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$internalApi\`. Could not resolve name

Error: node_modules/stylelint/lib/getPostcssResult.js:22
 22:     syntax?: stylelint$syntaxes,
                  ^^^^^^^^^^^^^^^^^^ identifier \`stylelint$syntaxes\`. Could not resolve name

Error: node_modules/stylelint/lib/getPostcssResult.js:27
 27:   const cached /*: ?postcss$result*/ = stylelint._postcssResultCache.get(
                         ^^^^^^^^^^^^^^ identifier \`postcss$result\`. Could not resolve name

Error: node_modules/stylelint/lib/getPostcssResult.js:77
 77:       const postcssOptions /*: postcss$options*/ = {};
                                    ^^^^^^^^^^^^^^^ identifier \`postcss$options\`. Could not resolve name

Error: node_modules/stylelint/lib/isPathIgnored.js:10
 10:   stylelint /*: stylelint$internalApi*/,
                     ^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$internalApi\`. Could not resolve name

Error: node_modules/stylelint/lib/lintSource.js:14
 14:   stylelint /*: stylelint$internalApi*/,
                     ^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$internalApi\`. Could not resolve name

Error: node_modules/stylelint/lib/lintSource.js:99
 99:   config /*: stylelint$config*/
                  ^^^^^^^^^^^^^^^^ identifier \`stylelint$config\`. Could not resolve name

Error: node_modules/stylelint/lib/needlessDisables.js:7
  7:   results /*: Array<stylelint$result>*/
                         ^^^^^^^^^^^^^^^^ identifier \`stylelint$result\`. Could not resolve name

Error: node_modules/stylelint/lib/needlessDisables.js:8
  8: ) /*: stylelint$needlessDisablesReport*/ {
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$needlessDisablesReport\`. Could not resolve name

Error: node_modules/stylelint/lib/normalizeRuleSettings.js:19
 19:   rawSettings /*: ?stylelint$configRuleSettings*/,
                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$configRuleSettings\`. Could not resolve name

Error: node_modules/stylelint/lib/postcssPlugin.js:99
 99: /*:: type postcssPromise = Promise<?{ config: stylelint$config, filepath: string }>*/
                                                   ^^^^^^^^^^^^^^^^ identifier \`stylelint$config\`. Could not resolve name

Error: node_modules/stylelint/lib/postcssPlugin.js:109
109:   const stylelint /*: stylelint$internalApi*/ = createStylelint(
                           ^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$internalApi\`. Could not resolve name

Error: node_modules/stylelint/lib/standalone.js:37
 37:   options /*: stylelint$standaloneOptions */
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$standaloneOptions\`. Could not resolve name

Error: node_modules/stylelint/lib/standalone.js:38
 38: ) /*: Promise<stylelint$standaloneReturnValue>*/ {
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$standaloneReturnValue\`. Could not resolve name

Error: node_modules/stylelint/lib/standalone.js:234
234:     stylelintResults /*: Array<stylelint$result>*/
                                    ^^^^^^^^^^^^^^^^ identifier \`stylelint$result\`. Could not resolve name

Error: node_modules/stylelint/lib/standalone.js:266
266: ) /*: stylelint$result*/ {
           ^^^^^^^^^^^^^^^^ identifier \`stylelint$result\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/addEmptyLineBefore.js:8
  8:   node /*: postcss$node*/,
                ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/atRuleParamIndex.js:3
  3: module.exports = function(atRule /*: postcss$atRule*/) /*: number*/ {
                                          ^^^^^^^^^^^^^^ identifier \`postcss$atRule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/blockString.js:17
 17:   statement /*: postcss$rule | postcss$atRule*/
                     ^^^^^^^^^^^^ identifier \`postcss$rule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/blockString.js:17
 17:   statement /*: postcss$rule | postcss$atRule*/
                                    ^^^^^^^^^^^^^^ identifier \`postcss$atRule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/checkAgainstRule.js:13
 13:     ruleSettings: stylelint$configRuleSettings,
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ identifier \`stylelint$configRuleSettings\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/findAtRuleContext.js:10
 10:   rule /*: postcss$rule */
                ^^^^^^^^^^^^ identifier \`postcss$rule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/findAtRuleContext.js:11
 11: ) /*: ?postcss$node*/ {
            ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/getNextNonSharedLineCommentNode.js:6
  6: function getNodeLine(node /*:: ?: postcss$node*/) /*: number | void*/ {
                                       ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/getPreviousNonSharedLineCommentNode.js:6
  6: function getNodeLine(node /*:: ?: postcss$node*/) /*: number | void*/ {
                                       ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/hasBlock.js:10
 10: module.exports = function(statement /*: postcss$node*/) /*: boolean*/ {
                                             ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/hasEmptyBlock.js:11
 11:   statement /*: postcss$rule | postcss$atRule*/
                     ^^^^^^^^^^^^ identifier \`postcss$rule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/hasEmptyBlock.js:11
 11:   statement /*: postcss$rule | postcss$atRule*/
                                    ^^^^^^^^^^^^^^ identifier \`postcss$atRule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/isAfterCommentLine.js:6
  6: module.exports = function(node /*: postcss$node*/) /*: boolean*/ {
                                        ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/isAfterStandardPropertyDeclaration.js:9
  9: module.exports = function(node /*: postcss$node*/) /*: boolean*/ {
                                        ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/isBlocklessAtRuleAfterBlocklessAtRule.js:7
  7: module.exports = function(atRule /*: postcss$atRule*/) /*: boolean*/ {
                                          ^^^^^^^^^^^^^^ identifier \`postcss$atRule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/isBlocklessAtRuleAfterSameNameBlocklessAtRule.js:8
  8: module.exports = function(atRule /*: postcss$atRule*/) /*: boolean*/ {
                                          ^^^^^^^^^^^^^^ identifier \`postcss$atRule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/isFirstNested.js:4
  4: module.exports = function(statement /*: postcss$node*/) /*: boolean*/ {
                                             ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/isKeyframeRule.js:7
  7: module.exports = function(rule /*: postcss$rule*/) /*: boolean*/ {
                                        ^^^^^^^^^^^^ identifier \`postcss$rule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/isSharedLineComment.js:13
 13:   node /*: postcss$node*/
                ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/isStandardSyntaxAtRule.js:10
 10: module.exports = function(atRule /*: postcss$atRule*/) /*: boolean*/ {
                                          ^^^^^^^^^^^^^^ identifier \`postcss$atRule\`. Could not resolve name

Error: node_modules/stylelint/lib/utils/removeEmptyLinesBefore.js:6
  6:   node /*: postcss$node*/,
                ^^^^^^^^^^^^ identifier \`postcss$node\`. Could not resolve name
`
