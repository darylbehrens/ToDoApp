module.exports = {
  src: './src',
  schema: './schema.graphql', // path to your .graphql schema file
  language: 'typescript',
  artifactDirectory: './src/__generated__',
  eagerEsModules: true, // 👈 ADD THIS LINE
};