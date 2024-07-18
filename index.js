(async () => {
  try {
    await import('./index.mjs');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1); // Exit with non-zero code to indicate failure
  }
})();
