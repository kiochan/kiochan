// Function to format commit types with aligned spaces
function formatCommitTypes(types) {
  // Step 1: Find the longest `type` string length
  const maxLength = Math.max(...types.map((type) => type.type.length));

  // Step 2: Map over the types and format them
  return types.map((type) => {
    // Calculate the number of spaces needed to align the text
    const spaces = ' '.repeat(maxLength - type.type.length + 1);
    return {
      value: type.type,
      name: `${type.type}:${spaces}${type.text}`, // Concatenate type, spaces, and text
      emoji: `:${type.emoji}:`,
    };
  });
}

// Raw commit types without formatting
const rawCommitTypes = [
  { type: 'feat', text: 'A new feature', emoji: 'sparkles' },
  { type: 'fix', text: 'A bug fix', emoji: 'bug' },
  { type: 'docs', text: 'Documentation only changes', emoji: 'memo' },
  {
    type: 'style',
    text: 'Changes that do not affect the meaning of the code',
    emoji: 'lipstick',
  },
  {
    type: 'refactor',
    text: 'A code change that neither fixes a bug nor adds a feature',
    emoji: 'recycle',
  },
  {
    type: 'perf',
    text: 'A code change that improves performance',
    emoji: 'zap',
  },
  {
    type: 'test',
    text: 'Adding missing tests or correcting existing tests',
    emoji: 'white_check_mark',
  },
  {
    type: 'build',
    text: 'Changes that affect the build system or external dependencies',
    emoji: 'package',
  },
  {
    type: 'ci',
    text: 'Changes to our CI configuration files and scripts',
    emoji: 'ferris_wheel',
  },
  {
    type: 'chore',
    text: "Other changes that don't modify src or test files",
    emoji: 'hammer',
  },
  { type: 'revert', text: 'Reverts a previous commit', emoji: 'rewind' },
];

// Apply formatting to the commit types
const commitTypes = formatCommitTypes(rawCommitTypes);

/** @type {import('@commitlint/types').UserConfig} */
const commitlintConfig = {
  extends: ['@commitlint/config-conventional'], // Extends conventional commit rules
  rules: {
    // Use the formatted commit types for the commitlint rules
    'type-enum': [2, 'always', commitTypes.map((type) => type.value)],
    'subject-case': [2, 'never', ['sentence-case']], // Do not enforce capitalization on the subject
    'header-max-length': [2, 'always', 72], // Limit the commit message header to 72 characters
  },
  ignores: [
    (commitMessage) => {
      return (
        commitMessage.trim() === 'draft' ||
        commitMessage.trim().startsWith('draft: ')
      );
    },
  ], // Ignore commitlint rules if the message starts with 'draft'
};

/** @type {import('cz-git').UserConfig} */
const czgitConfig = {
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking:
        'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixesSelect:
        'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefix: 'Input ISSUES prefix:',
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      generatingByAI: 'Generating your AI commit subject...',
      generatedSelectByAI: 'Select suitable subject by AI generated:',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    types: commitTypes, // Use the formatted commit types for the prompt
    useEmoji: false,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: ['web'],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed: ISSUES has been processed' },
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
  },
};

module.exports = {
  ...commitlintConfig,
  ...czgitConfig,
};
