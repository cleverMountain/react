"use strict";
exports.__esModule = true;
exports.MODULESPECIFIER_TYPES = exports.MODULEDECLARATION_TYPES = exports.MISCELLANEOUS_TYPES = exports.METHOD_TYPES = exports.LVAL_TYPES = exports.LOOP_TYPES = exports.LOGICAL_OPERATORS = exports.LITERAL_TYPES = exports.JSX_TYPES = exports.INHERIT_KEYS = exports.IMPORTOREXPORTDECLARATION_TYPES = exports.IMMUTABLE_TYPES = exports.FUNCTION_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FOR_TYPES = exports.FOR_INIT_KEYS = exports.FORXSTATEMENT_TYPES = exports.FLOW_TYPES = exports.FLOWTYPE_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.FLIPPED_ALIAS_KEYS = exports.FLATTENABLE_KEYS = exports.EXPRESSION_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.EQUALITY_BINARY_OPERATORS = exports.ENUMMEMBER_TYPES = exports.ENUMBODY_TYPES = exports.DEPRECATED_KEYS = exports.DEPRECATED_ALIASES = exports.DECLARATION_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.COMPARISON_BINARY_OPERATORS = exports.COMMENT_KEYS = exports.CLASS_TYPES = exports.BUILDER_KEYS = exports.BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.BLOCK_TYPES = exports.BLOCK_SCOPED_SYMBOL = exports.BLOCKPARENT_TYPES = exports.BINARY_TYPES = exports.BINARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = exports.ALIAS_KEYS = exports.ACCESSOR_TYPES = void 0;
exports.assertAssignmentExpression = exports.assertArrowFunctionExpression = exports.assertArrayTypeAnnotation = exports.assertArrayPattern = exports.assertArrayExpression = exports.assertArgumentPlaceholder = exports.assertAnyTypeAnnotation = exports.assertAccessor = exports.arrowFunctionExpression = exports.arrayTypeAnnotation = exports.arrayPattern = exports.arrayExpression = exports.argumentPlaceholder = exports.appendToMemberExpression = exports.anyTypeAnnotation = exports.addComments = exports.addComment = exports.__internal__deprecationWarning = exports.WHILE_TYPES = exports.VISITOR_KEYS = exports.USERWHITESPACABLE_TYPES = exports.UPDATE_OPERATORS = exports.UNARY_OPERATORS = exports.UNARYLIKE_TYPES = exports.TYPESCRIPT_TYPES = exports.TYPES = exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.TSENTITYNAME_TYPES = exports.TSBASETYPE_TYPES = exports.TERMINATORLESS_TYPES = exports.STRING_UNARY_OPERATORS = exports.STATEMENT_TYPES = exports.STATEMENT_OR_BLOCK_KEYS = exports.STANDARDIZED_TYPES = exports.SCOPABLE_TYPES = exports.PUREISH_TYPES = exports.PROPERTY_TYPES = exports.PRIVATE_TYPES = exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = exports.PATTERN_TYPES = exports.PATTERNLIKE_TYPES = exports.OBJECTMEMBER_TYPES = exports.NUMBER_UNARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.NOT_LOCAL_BINDING = exports.NODE_PARENT_VALIDATIONS = exports.NODE_FIELDS = void 0;
exports.assertEmptyTypeAnnotation = exports.assertEmptyStatement = exports.assertDoWhileStatement = exports.assertDoExpression = exports.assertDirectiveLiteral = exports.assertDirective = exports.assertDecorator = exports.assertDeclaredPredicate = exports.assertDeclareVariable = exports.assertDeclareTypeAlias = exports.assertDeclareOpaqueType = exports.assertDeclareModuleExports = exports.assertDeclareModule = exports.assertDeclareInterface = exports.assertDeclareFunction = exports.assertDeclareExportDeclaration = exports.assertDeclareExportAllDeclaration = exports.assertDeclareClass = exports.assertDeclaration = exports.assertDecimalLiteral = exports.assertDebuggerStatement = exports.assertContinueStatement = exports.assertConditionalExpression = exports.assertConditional = exports.assertCompletionStatement = exports.assertClassProperty = exports.assertClassPrivateProperty = exports.assertClassPrivateMethod = exports.assertClassMethod = exports.assertClassImplements = exports.assertClassExpression = exports.assertClassDeclaration = exports.assertClassBody = exports.assertClassAccessorProperty = exports.assertClass = exports.assertCatchClause = exports.assertCallExpression = exports.assertBreakStatement = exports.assertBooleanTypeAnnotation = exports.assertBooleanLiteralTypeAnnotation = exports.assertBooleanLiteral = exports.assertBlockStatement = exports.assertBlockParent = exports.assertBlock = exports.assertBindExpression = exports.assertBinaryExpression = exports.assertBinary = exports.assertBigIntLiteral = exports.assertAwaitExpression = exports.assertAssignmentPattern = void 0;
exports.assertImportSpecifier = exports.assertImportOrExportDeclaration = exports.assertImportNamespaceSpecifier = exports.assertImportDefaultSpecifier = exports.assertImportDeclaration = exports.assertImportAttribute = exports.assertImport = exports.assertImmutable = exports.assertIfStatement = exports.assertIdentifier = exports.assertGenericTypeAnnotation = exports.assertFunctionTypeParam = exports.assertFunctionTypeAnnotation = exports.assertFunctionParent = exports.assertFunctionExpression = exports.assertFunctionDeclaration = exports.assertFunction = exports.assertForXStatement = exports.assertForStatement = exports.assertForOfStatement = exports.assertForInStatement = exports.assertFor = exports.assertFlowType = exports.assertFlowPredicate = exports.assertFlowDeclaration = exports.assertFlowBaseAnnotation = exports.assertFlow = exports.assertFile = exports.assertExpressionWrapper = exports.assertExpressionStatement = exports.assertExpression = exports.assertExportSpecifier = exports.assertExportNamespaceSpecifier = exports.assertExportNamedDeclaration = exports.assertExportDefaultSpecifier = exports.assertExportDefaultDeclaration = exports.assertExportDeclaration = exports.assertExportAllDeclaration = exports.assertExistsTypeAnnotation = exports.assertEnumSymbolBody = exports.assertEnumStringMember = exports.assertEnumStringBody = exports.assertEnumNumberMember = exports.assertEnumNumberBody = exports.assertEnumMember = exports.assertEnumDefaultedMember = exports.assertEnumDeclaration = exports.assertEnumBooleanMember = exports.assertEnumBooleanBody = exports.assertEnumBody = void 0;
exports.assertObjectPattern = exports.assertObjectMethod = exports.assertObjectMember = exports.assertObjectExpression = exports.assertNumericLiteral = exports.assertNumberTypeAnnotation = exports.assertNumberLiteralTypeAnnotation = exports.assertNumberLiteral = exports.assertNullableTypeAnnotation = exports.assertNullLiteralTypeAnnotation = exports.assertNullLiteral = exports.assertNoop = exports.assertNode = exports.assertNewExpression = exports.assertModuleSpecifier = exports.assertModuleExpression = exports.assertModuleDeclaration = exports.assertMixedTypeAnnotation = exports.assertMiscellaneous = exports.assertMethod = exports.assertMetaProperty = exports.assertMemberExpression = exports.assertLoop = exports.assertLogicalExpression = exports.assertLiteral = exports.assertLabeledStatement = exports.assertLVal = exports.assertJSXText = exports.assertJSXSpreadChild = exports.assertJSXSpreadAttribute = exports.assertJSXOpeningFragment = exports.assertJSXOpeningElement = exports.assertJSXNamespacedName = exports.assertJSXMemberExpression = exports.assertJSXIdentifier = exports.assertJSXFragment = exports.assertJSXExpressionContainer = exports.assertJSXEmptyExpression = exports.assertJSXElement = exports.assertJSXClosingFragment = exports.assertJSXClosingElement = exports.assertJSXAttribute = exports.assertJSX = exports.assertIntersectionTypeAnnotation = exports.assertInterpreterDirective = exports.assertInterfaceTypeAnnotation = exports.assertInterfaceExtends = exports.assertInterfaceDeclaration = exports.assertInferredPredicate = exports.assertIndexedAccessType = void 0;
exports.assertTSBooleanKeyword = exports.assertTSBigIntKeyword = exports.assertTSBaseType = exports.assertTSAsExpression = exports.assertTSArrayType = exports.assertTSAnyKeyword = exports.assertSymbolTypeAnnotation = exports.assertSwitchStatement = exports.assertSwitchCase = exports.assertSuper = exports.assertStringTypeAnnotation = exports.assertStringLiteralTypeAnnotation = exports.assertStringLiteral = exports.assertStaticBlock = exports.assertStatement = exports.assertStandardized = exports.assertSpreadProperty = exports.assertSpreadElement = exports.assertSequenceExpression = exports.assertScopable = exports.assertReturnStatement = exports.assertRestProperty = exports.assertRestElement = exports.assertRegexLiteral = exports.assertRegExpLiteral = exports.assertRecordExpression = exports.assertQualifiedTypeIdentifier = exports.assertPureish = exports.assertProperty = exports.assertProgram = exports.assertPrivateName = exports.assertPrivate = exports.assertPlaceholder = exports.assertPipelineTopicExpression = exports.assertPipelinePrimaryTopicReference = exports.assertPipelineBareFunction = exports.assertPatternLike = exports.assertPattern = exports.assertParenthesizedExpression = exports.assertOptionalMemberExpression = exports.assertOptionalIndexedAccessType = exports.assertOptionalCallExpression = exports.assertOpaqueType = exports.assertObjectTypeSpreadProperty = exports.assertObjectTypeProperty = exports.assertObjectTypeInternalSlot = exports.assertObjectTypeIndexer = exports.assertObjectTypeCallProperty = exports.assertObjectTypeAnnotation = exports.assertObjectProperty = void 0;
exports.assertTSTypeAssertion = exports.assertTSTypeAnnotation = exports.assertTSTypeAliasDeclaration = exports.assertTSType = exports.assertTSTupleType = exports.assertTSThisType = exports.assertTSSymbolKeyword = exports.assertTSStringKeyword = exports.assertTSSatisfiesExpression = exports.assertTSRestType = exports.assertTSQualifiedName = exports.assertTSPropertySignature = exports.assertTSParenthesizedType = exports.assertTSParameterProperty = exports.assertTSOptionalType = exports.assertTSObjectKeyword = exports.assertTSNumberKeyword = exports.assertTSNullKeyword = exports.assertTSNonNullExpression = exports.assertTSNeverKeyword = exports.assertTSNamespaceExportDeclaration = exports.assertTSNamedTupleMember = exports.assertTSModuleDeclaration = exports.assertTSModuleBlock = exports.assertTSMethodSignature = exports.assertTSMappedType = exports.assertTSLiteralType = exports.assertTSIntrinsicKeyword = exports.assertTSIntersectionType = exports.assertTSInterfaceDeclaration = exports.assertTSInterfaceBody = exports.assertTSInstantiationExpression = exports.assertTSInferType = exports.assertTSIndexedAccessType = exports.assertTSIndexSignature = exports.assertTSImportType = exports.assertTSImportEqualsDeclaration = exports.assertTSFunctionType = exports.assertTSExternalModuleReference = exports.assertTSExpressionWithTypeArguments = exports.assertTSExportAssignment = exports.assertTSEnumMember = exports.assertTSEnumDeclaration = exports.assertTSEntityName = exports.assertTSDeclareMethod = exports.assertTSDeclareFunction = exports.assertTSConstructorType = exports.assertTSConstructSignatureDeclaration = exports.assertTSConditionalType = exports.assertTSCallSignatureDeclaration = void 0;
exports.bigIntLiteral = exports.awaitExpression = exports.assignmentPattern = exports.assignmentExpression = exports.assertYieldExpression = exports.assertWithStatement = exports.assertWhileStatement = exports.assertWhile = exports.assertVoidTypeAnnotation = exports.assertVariance = exports.assertVariableDeclarator = exports.assertVariableDeclaration = exports.assertV8IntrinsicIdentifier = exports.assertUserWhitespacable = exports.assertUpdateExpression = exports.assertUnionTypeAnnotation = exports.assertUnaryLike = exports.assertUnaryExpression = exports.assertTypeofTypeAnnotation = exports.assertTypeScript = exports.assertTypeParameterInstantiation = exports.assertTypeParameterDeclaration = exports.assertTypeParameter = exports.assertTypeCastExpression = exports.assertTypeAnnotation = exports.assertTypeAlias = exports.assertTupleTypeAnnotation = exports.assertTupleExpression = exports.assertTryStatement = exports.assertTopicReference = exports.assertThrowStatement = exports.assertThisTypeAnnotation = exports.assertThisExpression = exports.assertTerminatorless = exports.assertTemplateLiteral = exports.assertTemplateElement = exports.assertTaggedTemplateExpression = exports.assertTSVoidKeyword = exports.assertTSUnknownKeyword = exports.assertTSUnionType = exports.assertTSUndefinedKeyword = exports.assertTSTypeReference = exports.assertTSTypeQuery = exports.assertTSTypePredicate = exports.assertTSTypeParameterInstantiation = exports.assertTSTypeParameterDeclaration = exports.assertTSTypeParameter = exports.assertTSTypeOperator = exports.assertTSTypeLiteral = exports.assertTSTypeElement = void 0;
exports.emptyTypeAnnotation = exports.emptyStatement = exports.doWhileStatement = exports.doExpression = exports.directiveLiteral = exports.directive = exports.decorator = exports.declaredPredicate = exports.declareVariable = exports.declareTypeAlias = exports.declareOpaqueType = exports.declareModuleExports = exports.declareModule = exports.declareInterface = exports.declareFunction = exports.declareExportDeclaration = exports.declareExportAllDeclaration = exports.declareClass = exports.decimalLiteral = exports.debuggerStatement = exports.createUnionTypeAnnotation = exports.createTypeAnnotationBasedOnTypeof = exports.createTSUnionType = exports.createFlowUnionType = exports.continueStatement = exports.conditionalExpression = exports.cloneWithoutLoc = exports.cloneNode = exports.cloneDeepWithoutLoc = exports.cloneDeep = exports.clone = exports.classProperty = exports.classPrivateProperty = exports.classPrivateMethod = exports.classMethod = exports.classImplements = exports.classExpression = exports.classDeclaration = exports.classBody = exports.classAccessorProperty = exports.catchClause = exports.callExpression = exports.buildMatchMemberExpression = exports.breakStatement = exports.booleanTypeAnnotation = exports.booleanLiteralTypeAnnotation = exports.booleanLiteral = exports.blockStatement = exports.bindExpression = exports.binaryExpression = void 0;
exports.is = exports.intersectionTypeAnnotation = exports.interpreterDirective = exports.interfaceTypeAnnotation = exports.interfaceExtends = exports.interfaceDeclaration = exports.inheritsComments = exports.inherits = exports.inheritTrailingComments = exports.inheritLeadingComments = exports.inheritInnerComments = exports.inferredPredicate = exports.indexedAccessType = exports.importSpecifier = exports.importNamespaceSpecifier = exports.importDefaultSpecifier = exports.importDeclaration = exports.importAttribute = exports["import"] = exports.ifStatement = exports.identifier = exports.getOuterBindingIdentifiers = exports.getBindingIdentifiers = exports.genericTypeAnnotation = exports.functionTypeParam = exports.functionTypeAnnotation = exports.functionExpression = exports.functionDeclaration = exports.forStatement = exports.forOfStatement = exports.forInStatement = exports.file = exports.expressionStatement = exports.exportSpecifier = exports.exportNamespaceSpecifier = exports.exportNamedDeclaration = exports.exportDefaultSpecifier = exports.exportDefaultDeclaration = exports.exportAllDeclaration = exports.existsTypeAnnotation = exports.enumSymbolBody = exports.enumStringMember = exports.enumStringBody = exports.enumNumberMember = exports.enumNumberBody = exports.enumDefaultedMember = exports.enumDeclaration = exports.enumBooleanMember = exports.enumBooleanBody = exports.ensureBlock = void 0;
exports.isDeclareOpaqueType = exports.isDeclareModuleExports = exports.isDeclareModule = exports.isDeclareInterface = exports.isDeclareFunction = exports.isDeclareExportDeclaration = exports.isDeclareExportAllDeclaration = exports.isDeclareClass = exports.isDeclaration = exports.isDecimalLiteral = exports.isDebuggerStatement = exports.isContinueStatement = exports.isConditionalExpression = exports.isConditional = exports.isCompletionStatement = exports.isClassProperty = exports.isClassPrivateProperty = exports.isClassPrivateMethod = exports.isClassMethod = exports.isClassImplements = exports.isClassExpression = exports.isClassDeclaration = exports.isClassBody = exports.isClassAccessorProperty = exports.isClass = exports.isCatchClause = exports.isCallExpression = exports.isBreakStatement = exports.isBooleanTypeAnnotation = exports.isBooleanLiteralTypeAnnotation = exports.isBooleanLiteral = exports.isBlockStatement = exports.isBlockScoped = exports.isBlockParent = exports.isBlock = exports.isBinding = exports.isBindExpression = exports.isBinaryExpression = exports.isBinary = exports.isBigIntLiteral = exports.isAwaitExpression = exports.isAssignmentPattern = exports.isAssignmentExpression = exports.isArrowFunctionExpression = exports.isArrayTypeAnnotation = exports.isArrayPattern = exports.isArrayExpression = exports.isArgumentPlaceholder = exports.isAnyTypeAnnotation = exports.isAccessor = void 0;
exports.isGenericTypeAnnotation = exports.isFunctionTypeParam = exports.isFunctionTypeAnnotation = exports.isFunctionParent = exports.isFunctionExpression = exports.isFunctionDeclaration = exports.isFunction = exports.isForXStatement = exports.isForStatement = exports.isForOfStatement = exports.isForInStatement = exports.isFor = exports.isFlowType = exports.isFlowPredicate = exports.isFlowDeclaration = exports.isFlowBaseAnnotation = exports.isFlow = exports.isFile = exports.isExpressionWrapper = exports.isExpressionStatement = exports.isExpression = exports.isExportSpecifier = exports.isExportNamespaceSpecifier = exports.isExportNamedDeclaration = exports.isExportDefaultSpecifier = exports.isExportDefaultDeclaration = exports.isExportDeclaration = exports.isExportAllDeclaration = exports.isExistsTypeAnnotation = exports.isEnumSymbolBody = exports.isEnumStringMember = exports.isEnumStringBody = exports.isEnumNumberMember = exports.isEnumNumberBody = exports.isEnumMember = exports.isEnumDefaultedMember = exports.isEnumDeclaration = exports.isEnumBooleanMember = exports.isEnumBooleanBody = exports.isEnumBody = exports.isEmptyTypeAnnotation = exports.isEmptyStatement = exports.isDoWhileStatement = exports.isDoExpression = exports.isDirectiveLiteral = exports.isDirective = exports.isDecorator = exports.isDeclaredPredicate = exports.isDeclareVariable = exports.isDeclareTypeAlias = void 0;
exports.isNodesEquivalent = exports.isNode = exports.isNewExpression = exports.isModuleSpecifier = exports.isModuleExpression = exports.isModuleDeclaration = exports.isMixedTypeAnnotation = exports.isMiscellaneous = exports.isMethod = exports.isMetaProperty = exports.isMemberExpression = exports.isLoop = exports.isLogicalExpression = exports.isLiteral = exports.isLet = exports.isLabeledStatement = exports.isLVal = exports.isJSXText = exports.isJSXSpreadChild = exports.isJSXSpreadAttribute = exports.isJSXOpeningFragment = exports.isJSXOpeningElement = exports.isJSXNamespacedName = exports.isJSXMemberExpression = exports.isJSXIdentifier = exports.isJSXFragment = exports.isJSXExpressionContainer = exports.isJSXEmptyExpression = exports.isJSXElement = exports.isJSXClosingFragment = exports.isJSXClosingElement = exports.isJSXAttribute = exports.isJSX = exports.isIntersectionTypeAnnotation = exports.isInterpreterDirective = exports.isInterfaceTypeAnnotation = exports.isInterfaceExtends = exports.isInterfaceDeclaration = exports.isInferredPredicate = exports.isIndexedAccessType = exports.isImportSpecifier = exports.isImportOrExportDeclaration = exports.isImportNamespaceSpecifier = exports.isImportDefaultSpecifier = exports.isImportDeclaration = exports.isImportAttribute = exports.isImport = exports.isImmutable = exports.isIfStatement = exports.isIdentifier = void 0;
exports.isSpreadProperty = exports.isSpreadElement = exports.isSpecifierDefault = exports.isSequenceExpression = exports.isScope = exports.isScopable = exports.isReturnStatement = exports.isRestProperty = exports.isRestElement = exports.isRegexLiteral = exports.isRegExpLiteral = exports.isReferenced = exports.isRecordExpression = exports.isQualifiedTypeIdentifier = exports.isPureish = exports.isProperty = exports.isProgram = exports.isPrivateName = exports.isPrivate = exports.isPlaceholderType = exports.isPlaceholder = exports.isPipelineTopicExpression = exports.isPipelinePrimaryTopicReference = exports.isPipelineBareFunction = exports.isPatternLike = exports.isPattern = exports.isParenthesizedExpression = exports.isOptionalMemberExpression = exports.isOptionalIndexedAccessType = exports.isOptionalCallExpression = exports.isOpaqueType = exports.isObjectTypeSpreadProperty = exports.isObjectTypeProperty = exports.isObjectTypeInternalSlot = exports.isObjectTypeIndexer = exports.isObjectTypeCallProperty = exports.isObjectTypeAnnotation = exports.isObjectProperty = exports.isObjectPattern = exports.isObjectMethod = exports.isObjectMember = exports.isObjectExpression = exports.isNumericLiteral = exports.isNumberTypeAnnotation = exports.isNumberLiteralTypeAnnotation = exports.isNumberLiteral = exports.isNullableTypeAnnotation = exports.isNullLiteralTypeAnnotation = exports.isNullLiteral = exports.isNoop = void 0;
exports.isTSNumberKeyword = exports.isTSNullKeyword = exports.isTSNonNullExpression = exports.isTSNeverKeyword = exports.isTSNamespaceExportDeclaration = exports.isTSNamedTupleMember = exports.isTSModuleDeclaration = exports.isTSModuleBlock = exports.isTSMethodSignature = exports.isTSMappedType = exports.isTSLiteralType = exports.isTSIntrinsicKeyword = exports.isTSIntersectionType = exports.isTSInterfaceDeclaration = exports.isTSInterfaceBody = exports.isTSInstantiationExpression = exports.isTSInferType = exports.isTSIndexedAccessType = exports.isTSIndexSignature = exports.isTSImportType = exports.isTSImportEqualsDeclaration = exports.isTSFunctionType = exports.isTSExternalModuleReference = exports.isTSExpressionWithTypeArguments = exports.isTSExportAssignment = exports.isTSEnumMember = exports.isTSEnumDeclaration = exports.isTSEntityName = exports.isTSDeclareMethod = exports.isTSDeclareFunction = exports.isTSConstructorType = exports.isTSConstructSignatureDeclaration = exports.isTSConditionalType = exports.isTSCallSignatureDeclaration = exports.isTSBooleanKeyword = exports.isTSBigIntKeyword = exports.isTSBaseType = exports.isTSAsExpression = exports.isTSArrayType = exports.isTSAnyKeyword = exports.isSymbolTypeAnnotation = exports.isSwitchStatement = exports.isSwitchCase = exports.isSuper = exports.isStringTypeAnnotation = exports.isStringLiteralTypeAnnotation = exports.isStringLiteral = exports.isStaticBlock = exports.isStatement = exports.isStandardized = void 0;
exports.isUnaryExpression = exports.isTypeofTypeAnnotation = exports.isTypeScript = exports.isTypeParameterInstantiation = exports.isTypeParameterDeclaration = exports.isTypeParameter = exports.isTypeCastExpression = exports.isTypeAnnotation = exports.isTypeAlias = exports.isType = exports.isTupleTypeAnnotation = exports.isTupleExpression = exports.isTryStatement = exports.isTopicReference = exports.isThrowStatement = exports.isThisTypeAnnotation = exports.isThisExpression = exports.isTerminatorless = exports.isTemplateLiteral = exports.isTemplateElement = exports.isTaggedTemplateExpression = exports.isTSVoidKeyword = exports.isTSUnknownKeyword = exports.isTSUnionType = exports.isTSUndefinedKeyword = exports.isTSTypeReference = exports.isTSTypeQuery = exports.isTSTypePredicate = exports.isTSTypeParameterInstantiation = exports.isTSTypeParameterDeclaration = exports.isTSTypeParameter = exports.isTSTypeOperator = exports.isTSTypeLiteral = exports.isTSTypeElement = exports.isTSTypeAssertion = exports.isTSTypeAnnotation = exports.isTSTypeAliasDeclaration = exports.isTSType = exports.isTSTupleType = exports.isTSThisType = exports.isTSSymbolKeyword = exports.isTSStringKeyword = exports.isTSSatisfiesExpression = exports.isTSRestType = exports.isTSQualifiedName = exports.isTSPropertySignature = exports.isTSParenthesizedType = exports.isTSParameterProperty = exports.isTSOptionalType = exports.isTSObjectKeyword = void 0;
exports.memberExpression = exports.matchesPattern = exports.logicalExpression = exports.labeledStatement = exports.jsxText = exports.jsxSpreadChild = exports.jsxSpreadAttribute = exports.jsxOpeningFragment = exports.jsxOpeningElement = exports.jsxNamespacedName = exports.jsxMemberExpression = exports.jsxIdentifier = exports.jsxFragment = exports.jsxExpressionContainer = exports.jsxEmptyExpression = exports.jsxElement = exports.jsxClosingFragment = exports.jsxClosingElement = exports.jsxAttribute = exports.jSXText = exports.jSXSpreadChild = exports.jSXSpreadAttribute = exports.jSXOpeningFragment = exports.jSXOpeningElement = exports.jSXNamespacedName = exports.jSXMemberExpression = exports.jSXIdentifier = exports.jSXFragment = exports.jSXExpressionContainer = exports.jSXEmptyExpression = exports.jSXElement = exports.jSXClosingFragment = exports.jSXClosingElement = exports.jSXAttribute = exports.isYieldExpression = exports.isWithStatement = exports.isWhileStatement = exports.isWhile = exports.isVoidTypeAnnotation = exports.isVariance = exports.isVariableDeclarator = exports.isVariableDeclaration = exports.isVar = exports.isValidIdentifier = exports.isValidES3Identifier = exports.isV8IntrinsicIdentifier = exports.isUserWhitespacable = exports.isUpdateExpression = exports.isUnionTypeAnnotation = exports.isUnaryLike = void 0;
exports.spreadProperty = exports.spreadElement = exports.shallowEqual = exports.sequenceExpression = exports.returnStatement = exports.restProperty = exports.restElement = exports.removeTypeDuplicates = exports.removePropertiesDeep = exports.removeProperties = exports.removeComments = exports.regexLiteral = exports.regExpLiteral = exports.recordExpression = exports.react = exports.qualifiedTypeIdentifier = exports.program = exports.privateName = exports.prependToMemberExpression = exports.placeholder = exports.pipelineTopicExpression = exports.pipelinePrimaryTopicReference = exports.pipelineBareFunction = exports.parenthesizedExpression = exports.optionalMemberExpression = exports.optionalIndexedAccessType = exports.optionalCallExpression = exports.opaqueType = exports.objectTypeSpreadProperty = exports.objectTypeProperty = exports.objectTypeInternalSlot = exports.objectTypeIndexer = exports.objectTypeCallProperty = exports.objectTypeAnnotation = exports.objectProperty = exports.objectPattern = exports.objectMethod = exports.objectExpression = exports.numericLiteral = exports.numberTypeAnnotation = exports.numberLiteralTypeAnnotation = exports.numberLiteral = exports.nullableTypeAnnotation = exports.nullLiteralTypeAnnotation = exports.nullLiteral = exports.noop = exports.newExpression = exports.moduleExpression = exports.mixedTypeAnnotation = exports.metaProperty = void 0;
exports.tSParenthesizedType = exports.tSParameterProperty = exports.tSOptionalType = exports.tSObjectKeyword = exports.tSNumberKeyword = exports.tSNullKeyword = exports.tSNonNullExpression = exports.tSNeverKeyword = exports.tSNamespaceExportDeclaration = exports.tSNamedTupleMember = exports.tSModuleDeclaration = exports.tSModuleBlock = exports.tSMethodSignature = exports.tSMappedType = exports.tSLiteralType = exports.tSIntrinsicKeyword = exports.tSIntersectionType = exports.tSInterfaceDeclaration = exports.tSInterfaceBody = exports.tSInstantiationExpression = exports.tSInferType = exports.tSIndexedAccessType = exports.tSIndexSignature = exports.tSImportType = exports.tSImportEqualsDeclaration = exports.tSFunctionType = exports.tSExternalModuleReference = exports.tSExpressionWithTypeArguments = exports.tSExportAssignment = exports.tSEnumMember = exports.tSEnumDeclaration = exports.tSDeclareMethod = exports.tSDeclareFunction = exports.tSConstructorType = exports.tSConstructSignatureDeclaration = exports.tSConditionalType = exports.tSCallSignatureDeclaration = exports.tSBooleanKeyword = exports.tSBigIntKeyword = exports.tSAsExpression = exports.tSArrayType = exports.tSAnyKeyword = exports.symbolTypeAnnotation = exports.switchStatement = exports.switchCase = exports["super"] = exports.stringTypeAnnotation = exports.stringLiteralTypeAnnotation = exports.stringLiteral = exports.staticBlock = void 0;
exports.tsConstructorType = exports.tsConstructSignatureDeclaration = exports.tsConditionalType = exports.tsCallSignatureDeclaration = exports.tsBooleanKeyword = exports.tsBigIntKeyword = exports.tsAsExpression = exports.tsArrayType = exports.tsAnyKeyword = exports.tryStatement = exports.traverseFast = exports.traverse = exports.topicReference = exports.toStatement = exports.toSequenceExpression = exports.toKeyAlias = exports.toIdentifier = exports.toExpression = exports.toComputedKey = exports.toBlock = exports.toBindingIdentifierName = exports.throwStatement = exports.thisTypeAnnotation = exports.thisExpression = exports.templateLiteral = exports.templateElement = exports.taggedTemplateExpression = exports.tSVoidKeyword = exports.tSUnknownKeyword = exports.tSUnionType = exports.tSUndefinedKeyword = exports.tSTypeReference = exports.tSTypeQuery = exports.tSTypePredicate = exports.tSTypeParameterInstantiation = exports.tSTypeParameterDeclaration = exports.tSTypeParameter = exports.tSTypeOperator = exports.tSTypeLiteral = exports.tSTypeAssertion = exports.tSTypeAnnotation = exports.tSTypeAliasDeclaration = exports.tSTupleType = exports.tSThisType = exports.tSSymbolKeyword = exports.tSStringKeyword = exports.tSSatisfiesExpression = exports.tSRestType = exports.tSQualifiedName = exports.tSPropertySignature = void 0;
exports.tsTypePredicate = exports.tsTypeParameterInstantiation = exports.tsTypeParameterDeclaration = exports.tsTypeParameter = exports.tsTypeOperator = exports.tsTypeLiteral = exports.tsTypeAssertion = exports.tsTypeAnnotation = exports.tsTypeAliasDeclaration = exports.tsTupleType = exports.tsThisType = exports.tsSymbolKeyword = exports.tsStringKeyword = exports.tsSatisfiesExpression = exports.tsRestType = exports.tsQualifiedName = exports.tsPropertySignature = exports.tsParenthesizedType = exports.tsParameterProperty = exports.tsOptionalType = exports.tsObjectKeyword = exports.tsNumberKeyword = exports.tsNullKeyword = exports.tsNonNullExpression = exports.tsNeverKeyword = exports.tsNamespaceExportDeclaration = exports.tsNamedTupleMember = exports.tsModuleDeclaration = exports.tsModuleBlock = exports.tsMethodSignature = exports.tsMappedType = exports.tsLiteralType = exports.tsIntrinsicKeyword = exports.tsIntersectionType = exports.tsInterfaceDeclaration = exports.tsInterfaceBody = exports.tsInstantiationExpression = exports.tsInferType = exports.tsIndexedAccessType = exports.tsIndexSignature = exports.tsImportType = exports.tsImportEqualsDeclaration = exports.tsFunctionType = exports.tsExternalModuleReference = exports.tsExpressionWithTypeArguments = exports.tsExportAssignment = exports.tsEnumMember = exports.tsEnumDeclaration = exports.tsDeclareMethod = exports.tsDeclareFunction = void 0;
exports.yieldExpression = exports.withStatement = exports.whileStatement = exports.voidTypeAnnotation = exports.variance = exports.variableDeclarator = exports.variableDeclaration = exports.valueToNode = exports.validate = exports.v8IntrinsicIdentifier = exports.updateExpression = exports.unionTypeAnnotation = exports.unaryExpression = exports.typeofTypeAnnotation = exports.typeParameterInstantiation = exports.typeParameterDeclaration = exports.typeParameter = exports.typeCastExpression = exports.typeAnnotation = exports.typeAlias = exports.tupleTypeAnnotation = exports.tupleExpression = exports.tsVoidKeyword = exports.tsUnknownKeyword = exports.tsUnionType = exports.tsUndefinedKeyword = exports.tsTypeReference = exports.tsTypeQuery = void 0;
